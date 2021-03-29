import React,{useState,useEffect} from 'react'
import Cart from './Cart'
import {useDispatch} from 'react-redux'
import{startGetProducts} from '../../../Actions/productActions'
import ShoppingProducts from './ShoppingProducts'
import {addItems} from '../../../Actions/cartAction'

export default function ShoppingContainer(props) {
    const {id} = props.match.params
    const dispatch = useDispatch()
    const [cartItems , setCartItems] = useState([])

    useEffect(()=>{
        dispatch(startGetProducts())
    },[dispatch])

    const addItem =(product)=>{
        const exist = cartItems.find(ele=>ele._id === product._id)
        if(exist){
            setCartItems(
                cartItems.map(ele=> ele._id ===product._id ? {...ele , quantity : exist. quantity + 1  }: ele)
            )
        } else {
            setCartItems([...cartItems ,{...product ,quantity: 1}])
        }
    }

    const removeProduct=(product)=>{
        const exist  = cartItems.find(ele=>ele._id === product._id)
        if(exist.quantity === 1){
            setCartItems(
                cartItems.filter(ele=>ele._id !== product._id)
            )
        } else {
            setCartItems(
                cartItems.map(ele=>ele._id === product._id ? {...ele , quantity : exist.quantity - 1} : ele)
            )
        }
    }

    const handleCheckOut= ()=>{
        const conformation = window.confirm('Are you to checkOut and process for Generating  bill')
          if(conformation){
              dispatch(addItems(cartItems))
          }}

    return (
        <div>
            <ShoppingProducts addItem={addItem}/>
            <Cart cartItems = {cartItems} addItem = {addItem} handleCheckOut ={handleCheckOut} 
            removeProduct = {removeProduct} CustomerId ={id}/>      
        </div>
    )
}
