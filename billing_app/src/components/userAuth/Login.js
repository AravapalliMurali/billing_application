import React,{useState} from 'react'
import axios from 'axios'
import swal from 'sweetalert'

export default function Login({history , handleToggle}){
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const handleInput = (e)=>{
        const input = e.target.name
        if(input === 'email'){
            setEmail(e.target.value)
        } else if(input ==="password"){
            setPassword(e.target.value)
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

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
                    localStorage.setItem('token',result.token)
                    swal('successfully loggedin')
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
    }

    return (
        <div>
            <form onSubmit ={handleSubmit}>
                <input type = "email" value ={email} onChange = {handleInput} placeholder ="Emali" name ="email" /> <br/>

                <input type = "password" value ={password} onChange ={handleInput} placeholder ="password" name ="password"/>
                <br/>

                <input type = "submit" value ="Login"/>
            </form>
        </div>
    )
}