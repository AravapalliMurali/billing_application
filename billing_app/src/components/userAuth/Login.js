import React,{useState} from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import validator from 'validator'
import {TextField, Container, Link, Button, Grid, Typography, Avatar ,Paper ,Box} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const useStyles = makeStyles((theme) => ({
    avatar: {
        margin: theme.spacing(2),
        backgroundColor: theme.palette.secondary.main,
        //paddingTop : theme.spacing(2),
        },

    root :{
        width :'75vw',
        height : "150vh",
        //backgroundColor : theme.palette.grey[300],
        paddingTop : theme.spacing(5)
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
                        swal(result.errors)
                    } else{
                        swal('successfully loggedin')
                        localStorage.setItem('token',result.token)
                        history.push('/')
                        handleToggle()
                    }
                })
                .catch((err)=>{
                    swal(err.message)
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
        <div style ={{backgroundImage:  'url(https://u.a7.org/pictures/831/831477.jpg)',backgroundSize: 'cover' , height : "700px"}}>
        <Container className = {classes.root} maxWidth="md" component="main"  style={{textAlign : "center"}}>
            <Paper component ={Box} width ="40%" mx= "auto" p={4}>
                <Avatar  className={classes.avatar} >
                    <LockOutlinedIcon />
               </Avatar>
               <Typography component="h1" variant="h5">Login</Typography>
               <form onSubmit={handleSubmit}>
                    <TextField fullWidth placeholder ="Enter your Email" margin ="normal" variant ="outlined" color ="secondary" label ="Email"
                        value ={email} name ="email" onChange = {handleInput}/>
                        {formError.email && <span style={{color : 'red'}}>{formError.email}</span>}
   
                    <TextField fullWidth placeholder ="Enter Password" margin ="normal" variant ="outlined" color ="secondary" label ="Password"
                        type = "password" value ={password} name ="password" onChange ={handleInput}/>
                        { formError.password && <span style={{color : 'red'}}> {formError.password} </span> }
   
                   <Button type="submit" variant="contained" color="primary"> Sign in </Button>

                   <Grid container justify="flex-end" margin ="left" p={4}>
                        <Grid item>
                            <Link href="/registration" variant="body2">
                                Don't have an account? Sign up
                            </Link>
                        </Grid>
                    </Grid>
               </form>
            </Paper>
        </Container>
        </div>
    )
}