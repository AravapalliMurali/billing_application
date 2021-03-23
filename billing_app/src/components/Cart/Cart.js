import React,{useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { startGetProducts } from '../../Actions/productActions'
import Basket from './Basket'


export default function Cart(props){
    const customerId = props.match.params.id
    const [quanity , setQuanity] = useState(1)
    const [basketItems , setBasketItems] = useState([])
    const dispatch  = useDispatch()
    const products = useSelector((state)=>{
        return state.product
    })

    useEffect(()=>{
        dispatch(startGetProducts())
    },[dispatch])

    useEffect(()=>{
        const result = JSON.parse(localStorage.getItem('lineItems')) || []
        setBasketItems(result)
    },[])

    useEffect(()=>{
        localStorage.setItem("lineItems",JSON.stringify(basketItems))
    },[basketItems])

    const handleRemove = (id)=>{
        const result  = basketItems.filter(ele=>ele.line[0].product !== id)
        setBasketItems(result)
    }

    const handleItem = (productId)=>{
        const lineItems = {
            customer : customerId,
            line : [{
                product : productId, 
                quanity : quanity
            }]}
        const result = [lineItems, ...basketItems]
        setBasketItems(result)
    }

    const handleAdd = (id)=>{
        setQuanity(quanity + 1)
            const newObj = {
                line :[{
                    product : id,
                    quanity : quanity
                }]}        
            const result = basketItems.map(ele=>{
                if(ele.line.map(ele=>ele.product) == id){
                    return {...ele , ...newObj }  
                } else {
                    return {...ele}
                }
            })
            setBasketItems(result)   
    }
    
    const handleSub = (id)=>{
        setQuanity(quanity - 1)
        const newObj = {
            line:[{
                product : id,
                quanity : quanity
            }]}
        const result = basketItems.map(ele=>{
            if(ele.line.map(ele=>ele.product) == id){
                return {...ele , ...newObj }  
            } else {
                return {...ele}
            }})
        setBasketItems(result)
    }
    return (
        <div>
            <h3>product Items </h3>
            {products.map(ele=>{
                return <Basket key={ele._id} {...ele}
                handleAdd={handleAdd} 
                handleRemove ={handleRemove} 
                handleItem={handleItem}
                handleSub={handleSub}/>
            })}
        </div>
    )
}