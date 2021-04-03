import React from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { startRemoveBill } from '../../Actions/billActions'
import {Avatar, Button, Card, CardActions, CardContent, CardHeader, Container, Grid, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'


const useStyles = makeStyles((theme)=>({
    root : {
        width : '100vw',
        height : '100vh',
        //backgroundColor : theme.palette.grey[200]
        paddingTop: theme.spacing(5)
    } ,
    paper: {
        padding: theme.spacing(2) }
}))

export default function BillItems({_id,date,customer ,lineItems,TotalPrice ,subTotal ,GstPrice,shippingCharges}){

    const classes = useStyles()
    const dispatch = useDispatch()

    // customer Name

    const CustomerName = useSelector((state)=>{
        return state.customers.find(ele=>ele._id === customer)
    })

    // products Name

    const ProductName = useSelector((state)=>{
        const result = []
      for(const item of lineItems){
          const productItem = state.products.find(ele=>ele._id === item.product)
          //console.log("productItem:" , productItem)
          result.push({...productItem , ...item})
      }  
      return result
    })
    //console.log("products:",ProductName)
    // remove function 
    const handleRemove = ()=>{
        const conformation = window.confirm("Are you sure ")
        if(conformation){
            dispatch(startRemoveBill(_id))
        }
    }


    return(
        <div>
            <Container elevation ={4} className ={classes.root}>
                <Grid container spacing={2}>
                    <Grid item >
                        <Card className = {classes.paper}>
                            <CardHeader avatar = {<Avatar >B</Avatar>} title = 'Total Bill'/>
                            <CardContent>
                                <Typography variant ="h5">Customer : {CustomerName && CustomerName.name}</Typography>
                                <Typography variant ='subtitle1'>Date : {date}</Typography>
                                <Typography variant ="subtitle2">lineItems : {ProductName.map((ele)=>{
                                        return <ul key = {ele._id}>
                                            <li>product :{ele.name}</li>
                                            <li>Quantity : {ele.quantity}</li>
                                            <li> SubTotal:{ele.subTotal}</li>
                                        </ul>
                                    })}</Typography>
                                <Typography variant ="subtitle2">Total: {subTotal}</Typography>
                                <Typography variant ="subtitle2">GST: {GstPrice}</Typography>
                                <Typography variant ="subtitle2">Shipping Charges: {shippingCharges}</Typography>
                                <Typography variant ="subtitle2">Total: {TotalPrice}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button onClick={handleRemove}>Remove</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}