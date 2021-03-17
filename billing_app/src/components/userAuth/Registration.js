import React,{useState} from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import validator from 'validator'

export default function Registration({history}){
    const [userName, steUserName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [businessName , setBusinessName] = useState('')
    const [address , setAddress] = useState('')
    const [formErrors , setFormErrors] = useState({})
    const errors= {}

    const handleInput = (e)=>{
        const input  = e.target.name
        if(input === "username"){
            steUserName(e.target.value)
        } else if(input === "email"){
            setEmail(e.target.value)
        } else if (input === "password"){
            setPassword(e.target.value)
        } else if(input === "businessName"){
            setBusinessName(e.target.value)
        } else if(input === "address"){
            setAddress(e.target.value)
        }
    }
    
    const runValidation = ()=>{
        //name
        if(userName.trim().length === 0){
            errors.username = "name cannot be blank"
        }
        //for email
        if(email.trim().length === 0){
            errors.email = "email cannot be blank"
        } else if(!(validator.isEmail(email))){
            errors.email = "invalid email format"
        }

        // for password
        if(password.trim().length === 0){
            errors.password = "password cannot be blank"
        }
        // for businessname
        if(businessName.trim().length === 0){
            errors.businessName = "businessName cannot be blank"
        }

        // for address
        if(address.trim().length === 0){
            errors.address = "address cannot be blank"
        }

    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        // for validation 
        runValidation ()

        if(Object.keys(errors).length === 0){
            setFormErrors({})
            const formData = {
                username : userName,
                email    : email,
                password : password,
                businessName : businessName,
                address : address
    
            }

            axios.post('http://dct-billing-app.herokuapp.com/api/users/register' , formData)
            .then((responce)=>{
                const result = responce.data
                if(Object.keys(result).includes('errors')){
                    swal(result.message)
                } else {
                    swal('successfully created an account')
                    history.push('/login')
                }
            })

                // reset form 
                steUserName('')
                setEmail('')
                setPassword('')
                setBusinessName('')
                setAddress('')

        }

    }

    return(
        <div>
            <form onSubmit ={handleSubmit}>
            <input type="text" value ={userName} name ="username" onChange ={handleInput} placeholder ="Enter username"/> 
            {formErrors.username && <span>{formErrors.username}</span>}<br/>

            <input type = "text" value ={email} name ="email" onChange = {handleInput} placeholder ="Enter Email"/> 
            {formErrors.email && <span>{formErrors.email}</span>}<br/>

            <input type = "password" value ={password} name ="password" onChange ={handleInput} placeholder ="Password"/> 
            {formErrors.password && <span>{formErrors.password}</span>}<br/>

            <input type ="text" value= {businessName} name = "businessName" onChange ={handleInput} placeholder = "business name"/>
            {formErrors.businessName && <span>{formErrors.businessName}</span>} <br/>

            <textarea type ="text" value ={address} name ="address" onChange ={handleInput} placeholder ="Address"/>
            {formErrors.address && <span>{formErrors.address}</span>}
            <br/>

            <input type = "submit" value="register"/>
            </form>
        </div>
    )
}