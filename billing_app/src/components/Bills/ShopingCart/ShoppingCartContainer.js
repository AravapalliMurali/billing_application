import React,{useState,useEffect} from 'react'
import Cart from './Cart'
import {useDispatch , useSelector} from 'react-redux'
import{startGetProducts} from '../../../Actions/productActions'
import ShoppingProducts from './ShoppingProducts'
import {Container , Typography ,Grid } from '@material-ui/core'

export default function ShoppingCartContainer(props) {
    const {id} = props.match.params
    const dispatch = useDispatch()
    const [cartItems , setCartItems] = useState([])

    const customerName = useSelector((state)=>{
        return state.customers.find(ele=>ele._id === id)
    })

    useEffect(()=>{
        dispatch(startGetProducts())
    },[dispatch])

    const addItem =(product)=>{
        const exist = cartItems.find(ele=>ele._id === product._id)
        if(exist){
            setCartItems(
                cartItems.map(ele=> ele._id ===product._id ? {...ele , quantity : exist.quantity + 1  }: ele)
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

    return (
        <div>
            <Container>
                <Grid style={{position:'relative' , top:"20" , textAlign :"center"}} >
                    <Typography variant = "h2">
                        Products
                    </Typography>
                </Grid>
                {id && <p> Hi <u><b>{customerName && customerName.name} </b>!</u>  welcome to Bills shopping slot </p> }
                <Grid container  spacing={3}>
                    <Grid item xs={8}>
                        <ShoppingProducts addItem={addItem}/>
                    </Grid>
                    <Grid style ={{position:"relative", top:"30",textAlign:"center"}} item xs={4}>
                        <Cart cartItems = {cartItems} addItem = {addItem} 
                        removeProduct = {removeProduct} CustomerId ={id}/>
                    </Grid>
                </Grid>
            </Container>      
        </div>
    )
}
