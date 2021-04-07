import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { startRemoveProduct} from '../../Actions/productActions'
import EditProduct from './EditProduct'
import {Avatar, Button, Card, CardActions, CardContent, CardHeader, Grid,  Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


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
            </div>) : (
            <div elevation={4} className ={classes.root} >
                <Grid container spacing ={2}>
                    <Grid item>
                        <Card className={classes.paper} >
                            <CardHeader avatar = {<Avatar >P</Avatar>} title = {name} />
                            <CardContent>
                                <Typography variant ="h5" >{name}</Typography>
                                <Typography variant ="subtitle1" >Price :${price} rs/.</Typography>
                            </CardContent>
                            <CardActions>
                                <Button color ="secondary" onClick ={handleRemove}><DeleteIcon/></Button>
                                <Button onClick = {handleToggle}><EditIcon/></Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        ) }
        </div>)
}