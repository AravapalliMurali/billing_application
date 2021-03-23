import React,{useState} from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import validator from 'validator'
import {TextField, Container, Link, Button, Grid, Typography, Avatar} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const useStyles = makeStyles((theme) => ({
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
      marginLeft : theme.spacing(32)
    }
  }))

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
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="sm" style={{textAlign : "center"}}>
           <div>
               <Avatar  className={classes.avatar}>
                 <LockOutlinedIcon />
               </Avatar>
               <Typography component="h1" variant="h5">Login</Typography>
               <form onSubmit={handleSubmit}>
                   <TextField  variant="outlined" type="text" style={{marginBottom : '10px'}} placeholder="enter email" value={email} onChange={handleInput} name="email" />
                   { formError.email && <span style={{color : 'red'}}> {formError.email} </span> }
                   <br />
   
                   <TextField  variant="outlined" type="password" style={{marginBottom : '10px'}} placeholder="enter password" value={password} onChange={handleInput} name="password" />
                   { formError.password && <span style={{color : 'red'}}> {formError.password} </span> }
                   <br /> 
   
                   <Button type="submit" variant="contained" color="primary"> Sign in </Button>

                   <Grid container justify="flex-end">
               <Grid item>
                 <Link href="/register" variant="body2">
                   Don't have an account? Sign up
                 </Link>
               </Grid>
             </Grid>
               </form>
           </div>
        </Container>
        // <div>
        //     <form onSubmit ={handleSubmit}>
        //         <input type = "text" value ={email} onChange = {handleInput} placeholder ="Emali" name ="email" />
        //         {formError.email && <span>{formError.email}</span>} <br/>

        //         <input type = "password" value ={password} onChange ={handleInput} placeholder ="password" name ="password"/>
        //         {formError.password &&<span>{formError.password}</span>}
        //         <br/>

        //         <input type = "submit" value ="Login"/>
        //     </form>
        // </div>
    )
}