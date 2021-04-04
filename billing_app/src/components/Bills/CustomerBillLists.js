import React from 'react'
import { useSelector} from 'react-redux'
import {Avatar, Card, CardContent, CardHeader, Container, Grid, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme)=>({
    root : {
        width : '100vw',
        height : '60vh',
        //backgroundColor : theme.palette.grey[200]
        paddingTop: theme.spacing(5)
    } ,
    paper: {
        padding: theme.spacing(1) }
}))

export default function CustomerBillLists({_id,date,customer ,lineItems}) {

        // billing amount part 
        const totalProductsPrice = lineItems.reduce((a,c)=>a+c.quantity * c.price,0)
        const GstPrice = parseInt(totalProductsPrice * 0.18)
        const shippingCharges  = totalProductsPrice < 1500 ? 0 : 50
        const TotalPrice = totalProductsPrice + GstPrice + shippingCharges
    
        const classes = useStyles()
    
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

    return (
        <div>
            <Container elevation ={4} className ={classes.root}>
                <Grid container spacing={2}>
                    <Grid item >
                        <Card className = {classes.paper}>
                            <CardHeader avatar = {<Avatar >B</Avatar>} title = 'Total Bill'/>
                            <CardContent>
                                <Typography variant ="h5">Customer : {CustomerName && CustomerName.name}</Typography>
                                <Typography variant ='subtitle1'>Date : {date}</Typography>
                                <Typography variant ="subtitle2" style={{overflow:"scroll" , maxHeight:'200px'}}>lineItems : {ProductName.map((ele)=>{
                                        return <ul key = {ele._id}>
                                            <li>product :{ele.name}</li>
                                            <li>Quantity : {ele.quantity}</li>
                                            <li> SubTotal:{ele.subTotal}</li>
                                        </ul>
                                    })}</Typography>
                                <Typography variant ="subtitle2">Total: {totalProductsPrice}</Typography>
                                <Typography variant ="subtitle2">GST: {GstPrice}</Typography>
                                <Typography variant ="subtitle2">Shipping Charges: {shippingCharges}</Typography>
                                <Typography variant ="subtitle2">Total: {TotalPrice}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid> 
            </Container >
        </div>
    )
}
