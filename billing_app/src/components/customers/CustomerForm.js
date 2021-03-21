import React,{useState} from 'react'
import validator from 'validator'
import {useDispatch} from 'react-redux'
import { startAddCustomers, startEditCustomer } from '../../Actions/customerActions'


export default function CustomerForm({id , name : title , email : mail , phNumber:mobile , handleToggle }){
    const dispatch  = useDispatch()
    const [name , setName] = useState(title ? title : '')
    const [phNumber , setphNumber] = useState(mobile ? mobile : '')
    const [email , setEmail] = useState(mail ? mail :'')
    const [formError , setFormError] = useState({})
    const error = {}

    const handleInput = (e) =>{
        const input = e.target.name
        if(input === "name"){
            setName(e.target.value)
        } else if(input === "phNumber"){
            setphNumber(e.target.value)
        } else if(input === "email"){
            setEmail(e.target.value)
        }
    }

    const runValidation=()=>{
        //name
        if(name.trim().length === 0){
            error.name = "name cannot be empty"
        }
        //email
        if(email.trim().length === 0){
            error.email = 'email cannot be empty'
        } else if(!(validator.isEmail(email))){
            error.email ="invalid email format"
        }

        // phnumber
        if(phNumber.trim().length === 0 ){
            error.phNumber = "password lenght is more than 5 characters"
        }
    }


    const handleSubmit = (e)=>{
        e.preventDefault()

        //validation part 
        runValidation()

        if(Object.keys(error).length === 0 ){
            setFormError({})

            const formData = {
                name : name,
                mobile : Number(phNumber),
                email : email
            }

            if(handleToggle){
                dispatch(startEditCustomer(formData ,id))
                handleToggle()
            } else {
                dispatch(startAddCustomers(formData))
            }
    
            // reset form
    
            setName('')
            setphNumber('')
            setEmail('')

        } else {
            setFormError(error)
        }
        
    }

    return(
        <div>
            {title ? <h2>Edit Form</h2> : <h2>Add Customers Form</h2>}
            <form onSubmit = {handleSubmit}>
                <input type = "text" value = {name} onChange ={handleInput} name = "name" placeholder = "Enter customer Name"/>
                {formError.name && <span>{formError.name}</span>}<br/>
                
                <input type = "text" value = {phNumber} onChange ={handleInput} name = "phNumber" placeholder ="Enter PhNumber"/>
                {formError.phNumber && <span>{formError.phNumber}</span>}<br/>

                <input type = "text" value = {email} onChange = {handleInput} name = "email" placeholder = "Email"/>
                {formError.email && <span>{formError.email}</span>}<br/>

                <input type ="submit"  value = "Add"/>
            </form>
        </div>
    )
}