import React,{useState} from 'react'
import {useDispatch} from "react-redux"
import { startAddBill } from '../../Actions/billActions'
import {Button, Container, Paper, TextField, Grid ,Typography ,Box} from '@material-ui/core'

export default function BillForm({Customerid ,Items}){


    const dispatch = useDispatch()

    const [date , setDate] = useState('')
    const [customerId , setCustomerId] = useState(Customerid ? Customerid :'')
    const [formError , setFormError ] = useState({})
    const error = {}

    const handleInput =(e)=>{
        const input = e.target.name
        if(input === "date"){
            setDate(e.target.value)
        } else if(input === "id"){
            setCustomerId(e.target.value)
        }
    }

    const runValidation = ()=>{

        if(customerId.trim().length === 0){
            error.customerid = 'customer can not be  empty ' 
        }
    }

    const line = ()=>{
        const result = Items.map(ele=>{
            return {product : ele._id , quantity:ele.quantity}
        })
        return result
        //console.log(result) 
    }

    const handleSubmit =(e)=>{
        e.preventDefault()

        //validation 
        runValidation()

        if(Object.keys(error).length === 0){
            setFormError({})

            const formData = {
                date : date ,//moment().format('MMMM Do YYYY, h:mm:ss a'),
                customer : customerId ,
                lineItems : line()
            }
    
            dispatch(startAddBill(formData))
    
            setDate('')
            setCustomerId('')
            
        } else {
            setFormError(error)
        }
        
    }
    return(
        <div>
            <Container>
            <Grid>
                <Paper component ={Box} width ="60%" mx= "auto" p={6}>
                <Typography variant ="h5">
                    Add Product Form
                </Typography>
                    <form onSubmit = {handleSubmit}>
                        <TextField fullWidth margin ="normal" variant ="outlined" color ="secondary"
                         type = "date" value = {date} onChange = {handleInput} name = "date"/>
                        {formError.date && <span>{formError.date}</span>}<br/>


                        <TextField fullWidth margin ="normal" variant ="outlined" color ="secondary"
                        label="Customer Id" type = "text" value = {customerId} onChange = {handleInput} name = "id" placeholder="customerid"/>
                        {formError.customerid && <span>{formError.customerid}</span>}<br/>


                        <Button type="submit" variant="contained" color="secondary" margin="left"> Generate </Button>

                    </form>
                </Paper>
                </Grid>
            </Container>
        </div>
    )
}