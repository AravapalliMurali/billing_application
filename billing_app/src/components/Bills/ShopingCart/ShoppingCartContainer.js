import React,{useState,useEffect} from 'react'
import swal from 'sweetalert'
import Cart from './Cart'
import {useDispatch} from 'react-redux'
import{startGetProducts} from '../../../Actions/productActions'
import ShoppingProducts from './ShoppingProducts'
import {addItems} from '../../../Actions/cartAction'
import {Container , Typography ,Grid } from '@material-ui/core'

export default function ShoppingCartContainer(props) {
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
    const handleCheckOut = () => {
        swal({
            title:'Are you to checkOut and process for Generating  bill',
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((conformation) => {
            if(conformation){
                //swal("Good job!", "You clicked the button!", "success");
                swal("Thank u for shopping!", " Have a Great Day!", "Successfully send the cart products to Genrate the bill");
                dispatch(addItems(cartItems))
            }
          })
    }

    return (
        <div>
            <Container>
                <Grid style={{position:'relative' , top:"20" , textAlign :"center"}} >
                    <Typography variant = "h2">
                        Products
                    </Typography>
                </Grid>
                <Grid container  spacing={3}>
                    <Grid item xs={8}>
                        <ShoppingProducts addItem={addItem}/>
                    </Grid>
                    <Grid style ={{position:"relative", top:"30",textAlign:"center"}} item xs={4}>
                        <Cart cartItems = {cartItems} addItem = {addItem} handleCheckOut ={handleCheckOut} 
                        removeProduct = {removeProduct} CustomerId ={id}/>
                    </Grid>
                </Grid>
            </Container>      
        </div>
    )
}
