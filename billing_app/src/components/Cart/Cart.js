import React,{useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { startGetProducts, startRemoveProduct } from '../../Actions/productActions'
//import Basket from './Basket'

export default function Cart(props){
    const [basketItems , setBasketItems] = useState([])
    const [toggle , setToggle] = useState(false)
    const dispatch  = useDispatch()
    const products = useSelector((state)=>{
        return state.product
    })

    useEffect(()=>{
        dispatch(startGetProducts())
    },[dispatch])

    const handleItem = (productId)=>{
        const lineItems = {
            customer : customerId,
            line : [{
                product : productId 
                //quanity : Number(qty)
            }]
        }
        //console.log(lineItems)
        setBasketItems(lineItems)
    }
    const customerId = props.match.params.id
    const handleRemove = (id)=>{
        dispatch(startRemoveProduct(id))
    }
    return (
        <div>
            <h3>cart Items </h3>
            {products.map(ele=>{
                return (
                    <div key = {ele._id}>
                        <blockquote>
                            <h4>Name : {ele.name}</h4>
                            <h4>Price :{ele.price}</h4>
                            {toggle ? (<div>
                                <button>+</button>|<button>-</button><button onclick = {()=>{handleRemove(ele._id)}}>remove</button>
                            </div>) : <button onClick = {()=>{handleItem(ele._id)}}>Add to cart</button>} 
                        </blockquote>
                    </div>
                )
            })}
            {/* <Basket basketItems = {basketItems}/> */}
        </div>
    )
}