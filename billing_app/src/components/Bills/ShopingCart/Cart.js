import React from 'react'
import swal from 'sweetalert'
import {useDispatch} from 'react-redux'
import {withRouter} from "react-router-dom"
import {Container, Grid, Paper,Box, Typography, Button} from '@material-ui/core'
import {addItems} from '../../../Actions/cartAction'


const  Cart=(props) =>{
    const {cartItems , removeProduct , addItem, CustomerId, history} = props
    const dispatch = useDispatch()
    const totalProductsPrice = cartItems.reduce((a,c)=>a+c.quantity * c.price,0)
    const gstPrice = parseInt(totalProductsPrice * 0.18)
    const shippingCharges  = totalProductsPrice < 1500 ? 0 : 50
    const totalAmount = totalProductsPrice + gstPrice + shippingCharges

    const handleCheckOut = () => {
        swal({
            title: "Are you sure?",
            text: "Are you to checkOut and process for Generating  bill",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Thank u for shopping!", " Have a Great Day!", "Successfully send the cart products to Genrate the bill", {
                icon: "success",
              });
              dispatch(addItems(cartItems))
              history.push({
                pathname:'/billcontainer',
                Customerid : CustomerId  ,
              })
            }
          });
    }

    return (
        <div>
            <Container display ="flex">
                <Grid>
                <Paper component ={Box} width ="60%" mx = "auto"  p={6}>
                    <Typography variant ="h5"> Cart Items - {cartItems.length}</Typography>
                    <Typography variant ="h6">{cartItems.length === 0 && 'cart is empty'}</Typography>
                    <Grid>
                    {cartItems.map(ele=>{
                    return (
                        <blockquote key={ele._id}>
                            <h4>Product name : {ele.name}</h4>
                            <h4>Product price : {ele.price}</h4>
                            <button onClick={()=>{addItem(ele)}}>+</button>|<button onClick={()=>{removeProduct(ele)}}>-</button>
                            <h4>Quantity :{ele.quantity} X Rs.{ele.price.toFixed(2)}</h4>
                            <hr/>
                        </blockquote>
                )})}
                    </Grid>

            {totalProductsPrice ? (<div>
            <h4>SubTotal : {totalProductsPrice}</h4>
            <h4>Gst: {gstPrice}</h4>
            <h4>shippingCharges : {shippingCharges}</h4>
            <h4>Total Price : {totalAmount}</h4>
            <Button color ="secondary" onClick ={handleCheckOut}> Check Out</Button>
            </div>): ('Add the products')}
            </Paper>
                </Grid>
            </Container>
        </div>
    )
}
export default withRouter(Cart)
