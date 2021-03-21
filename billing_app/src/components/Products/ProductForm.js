import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { startAddProduct } from '../../Actions/productActions'

export default function ProductForm(){
    const dispatch = useDispatch()
    const [name , setName] = useState('')
    const [price , setPrice] = useState('')
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

        if(price.trim().length === 0){
            error.price = "price can not be empty"
        }
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

            dispatch(startAddProduct(formData))

            // reset the form 
            setName('')
            setPrice('')

        } else {
            setFormError(error)
        }
        
    }
    
    return (
        <div>
            <h2>Add Product</h2>
            <form onSubmit = {handleSubmit}>
                <input type = "text" name = "name" value = {name} onChange = {handleInput} placeholder ="Name of product" />
                {formError.name && <span>{formError.name}</span>}
                <br/>

                <input type = "text" name = "price" value = {price} onChange ={handleInput} placeholder ="price.."/>
                {formError.price && <span>{formError.price}</span>}
                <br/>

                <input type ="submit" name = "Add"/>
            </form>
        </div>
    )
}