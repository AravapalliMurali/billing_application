import React,{useState} from 'react'
import axios from 'axios'
import swal from 'sweetalert'

export default function Registration({history}){
    const [userName, steUserName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [businessName , setBusinessName] = useState('')
    const [address , setAddress] = useState('')

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

    const handleSubmit = (e)=>{
        e.preventDefault()

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

    return(
        <div>
            <form onSubmit ={handleSubmit}>
            <input type="text" value ={userName} name ="username" onChange ={handleInput} placeholder ="Enter username"/> <br/>

            <input type = "text" value ={email} name ="email" onChange = {handleInput} placeholder ="Enter Email"/> <br/>

            <input type = "password" value ={password} name ="password" onChange ={handleInput} placeholder ="Password"/> <br/>

            <input type ="text" value= {businessName} name = "businessName" onChange ={handleInput} placeholder = "business name"/> <br/>

            <textarea type ="text" value ={address} name ="address" onChange ={handleInput} placeholder ="Address"/>
            <br/>

            <input type = "submit" value="register"/>
            </form>
        </div>
    )
}