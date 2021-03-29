import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { startRemoveCustomer } from '../../Actions/customerActions'
import EditCustomer from './EditCustomer'
import {Link} from 'react-router-dom'
import {Avatar, Button, Card, CardActions, CardContent, CardHeader, Container, Grid, IconButton, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import ReceiptIcon from '@material-ui/icons/Receipt';

const useStyles = makeStyles((theme)=>({
    root : {
        width : '100vw',
        height : '35vh',
        //backgroundColor : theme.palette.grey[200]
        paddingTop: theme.spacing(5)
    }
}))

export default function CustomerItem({_id , name , email , mobile}){
    const classes = useStyles()

    const dispatch = useDispatch()
    const [toggle , setToggle] = useState(false)

    const handleRemove = () =>{
        const conformation = window.confirm(`Are you sure to remove the ${name} from the list `)
        if(conformation){
            dispatch(startRemoveCustomer(_id))
        }
    }

    const handleToggle = () =>{
        setToggle(!toggle)
    }


    return (
        <div>
            {toggle ? (
                <div>
                    <EditCustomer id ={_id} name = {name} email = {email} mobile = {mobile} handleToggle = {handleToggle}/>
                    <button onClick = {handleToggle}>cancel</button>
                </div>
        ) : (
            <div className ={classes.root} >
                <Grid container spacing ={2}>
                    <Grid item xs ={6} sm={3}>
                        <Card>
                            <CardHeader avatar = {<Avatar >C</Avatar>} title = {name} 
                            action={
                                <IconButton component ={Link} to ={`/cart/${_id}`}>
                                    <ReceiptIcon/>
                                </IconButton>
                            }/>
                            <CardContent>
                                <Typography variant ="h5" >{name}</Typography>
                                <Typography variant ="subtitle1" >email:{email}</Typography>
                                <Typography variant ="subtitle1" >mobile : {mobile}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button onClick ={handleRemove}>Remove</Button>
                                <Button onClick = {handleToggle}>Edit</Button>
                                {/* <Button  component={Link} to={`/cart/${_id}`}>BuyItems</Button> */}
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        ) }
        </div>)
}