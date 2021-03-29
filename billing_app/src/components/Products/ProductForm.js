import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { startAddProduct, startEditProduct } from '../../Actions/productActions'
import {Button, Container, Paper, TextField, Typography ,Box, Grid} from '@material-ui/core'


export default function ProductForm({id , name : title , price : cost , handleToggle}){
    const dispatch = useDispatch()
    const [name , setName] = useState( title ? title :'')
    const [price , setPrice] = useState(cost ? cost :'')
    const [formError ,setFormError]  = useState({})
    const error = {}

    const handleInput = (e)=>{
        const input = e.target.name
        if(input === "name"){
            setName(e.target.value)
        } else if(input === "price"){
            setPrice(e.target.value)
        }
    }

    const runValidation=()=>{
        //name
        if(name.trim().length === 0){
            error.name = "name can not be empty "
        }

        // for price

        // if(price.trim().length === 0){
        //     error.price = "price can not be empty"
        // }
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        //for validation 
        runValidation()
        
        if(Object.keys(error).length === 0){
            setFormError({})

            const formData = {
                name : name ,
                price : Number(price)
            }

            if(handleToggle){
                dispatch(startEditProduct(formData,id))
                handleToggle()
            } else{
                dispatch(startAddProduct(formData))
            }

            // reset the form 
            setName('')
            setPrice('')

        } else {
            setFormError(error)
        }
        
    }
    
    return (
        <div>
            <Container>
                <Grid>
                <Paper component ={Box} width ="60%" mx= "auto" p={6}>
                <Typography variant ="h5">
                    Add Product Form
                </Typography>

                <form onSubmit = {handleSubmit}>
                <TextField fullWidth margin ="normal" variant ="outlined" color ="secondary"
                label="Product Name" type = "text" name = "name" value = {name} onChange = {handleInput} placeholder ="Name of product"/>
                {formError.name && <span>{formError.name}</span>}<br/>
                
                <TextField fullWidth margin ="normal" variant ="outlined" color ="secondary"
                label="Price" type = "text" name = "price" value = {price} onChange ={handleInput} placeholder ="price.." />
                {formError.phNumber && <span>{formError.phNumber}</span>}<br/>

                <Button type="submit" variant="contained" color="secondary" margin="left"> ADD </Button>
            </form>
                </Paper>
                </Grid>
            </Container>
        </div>
    )
}