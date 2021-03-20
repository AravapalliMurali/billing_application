import React,{useState} from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import validator from 'validator'

export default function Login({history , handleToggle}){
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [formError , setFormError] = useState({})
    const error = {}

    const handleInput = (e)=>{
        const input = e.target.name
        if(input === 'email'){
            setEmail(e.target.value)
        } else if(input ==="password"){
            setPassword(e.target.value)
        }
    }

    const runValidation=()=>{
        // for email
        if(email.trim().length === 0){
            error.email = "email cannot be empty"
        } else if(!(validator.isEmail(email))){
            error.email = "invalid email format"
        }

        // for password
        if(password.trim().length === 0){
            error.password = "password cannot be empty"
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        //for validation 
        runValidation()

        if(Object.keys(error).length === 0){
            setFormError({})

            const formData = {
                email : email,
                password : password
            }
    
            axios.post(' http://dct-billing-app.herokuapp.com/api/users/login' , formData)
                .then((responce)=>{
                    const result = responce.data
                    if(Object.keys(result).includes('errors')){
                        swal(result.message)
                    } else{
                        swal('successfully loggedin')
                        localStorage.setItem('token',result.token)
                        history.push('/')
                        handleToggle()
                    }
                })
                .catch((err)=>{
                    console.log(err.message)
                })
    
    
                //reset form
                setPassword('')
                setEmail('')
        } else {
            setFormError(error)
        }
        
    }

    return (
        <div>
            <form onSubmit ={handleSubmit}>
                <input type = "text" value ={email} onChange = {handleInput} placeholder ="Emali" name ="email" />
                {formError.email && <span>{formError.email}</span>} <br/>

                <input type = "password" value ={password} onChange ={handleInput} placeholder ="password" name ="password"/>
                {formError.password &&<span>{formError.password}</span>}
                <br/>

                <input type = "submit" value ="Login"/>
            </form>
        </div>
    )
}