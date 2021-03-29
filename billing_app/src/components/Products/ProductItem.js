import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { startRemoveProduct} from '../../Actions/productActions'
import EditProduct from './EditProduct'
import {Avatar, Button, Card, CardActions, CardContent, CardHeader, Container, Grid, Paper, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme)=>({
    root : {
        width : '100vw',
        height : '35vh',
        //backgroundColor : theme.palette.grey[200]
        paddingTop: theme.spacing(5)
    },
    roots: {
        flexGrow:1,
    },
    paper: {
        padding: theme.spacing(2),
        //textAlign: 'center',
        //color: theme.palette.text.secondary,
    },
}))
export default function ProductItem({_id , name , price}){
    const classes = useStyles()

    const dispatch = useDispatch()
    const [toggle , setToggle] = useState(false)

    const handleRemove = () =>{
        const conformation = window.confirm(`Are you sure to remove the ${name} from the list `)
        if(conformation){
            dispatch(startRemoveProduct(_id))
        }
    }

    

    const handleToggle = ()=>{
        setToggle(!toggle)
    }
    

    return (
        <div>
            {toggle ? 
             (<div>
                <EditProduct id = {_id} name = {name} price = {price} handleToggle ={handleToggle}/>
                <button onClick ={handleToggle}>Cancel</button>
            </div>) : (
            <Container className ={classes.root} >
                <Grid container spacing ={1}>
                    <Grid item xs={3} className={classes.paper}>
                        <Card container >
                            <CardHeader avatar = {<Avatar >P</Avatar>} title = {name} />
                            <CardContent>
                                <Typography variant ="h5" >{name}</Typography>
                                <Typography variant ="subtitle1" >Price :{price} rs/.</Typography>
                            </CardContent>
                            <CardActions>
                                <Button onClick ={handleRemove}>Remove</Button>
                                <Button onClick = {handleToggle}>Edit</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        ) }
        </div>)
}