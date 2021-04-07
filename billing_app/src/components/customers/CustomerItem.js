import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { startRemoveCustomer } from '../../Actions/customerActions'
import EditCustomer from './EditCustomer'
import {Link} from 'react-router-dom'
import {Avatar, Button, Card, CardActions, CardContent, CardHeader, Grid, IconButton, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import ReceiptIcon from '@material-ui/icons/Receipt';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


const useStyles = makeStyles((theme)=>({
    root : {
        width : '100vw',
        height : '35vh',
        //backgroundColor : theme.palette.grey[200]
        paddingTop: theme.spacing(5)
    },
    paper: {
        padding: theme.spacing(2),
        //textAlign: 'center',
        //color: theme.palette.text.secondary,
      },
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
                </div>
        ) : (
            <div elevation={4} className ={classes.root} >
                <Grid container spacing ={2}>
                    <Grid item >
                        <Card className ={classes.paper}>
                            <CardHeader avatar = {<Avatar >C</Avatar>} title = {name} 
                            action={
                                <IconButton component ={Link} to ={`/customerbills/${_id}`}>
                                    <ReceiptIcon/>
                                </IconButton> 
                            }/>
                            <CardContent>
                                <Typography variant ="h5" >{name}</Typography>
                                <Typography variant ="subtitle1" >Email:{email}</Typography>
                                <Typography variant ="subtitle1" >Mobile : {mobile}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button onClick ={handleRemove}><DeleteIcon/></Button>
                                <Button onClick = {handleToggle}><EditIcon/></Button>
                                <Button  component={Link} to={`/shopingcartcontainer/${_id}`}><ShoppingBasketIcon/>BuyItems</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        ) }
        </div>)
}