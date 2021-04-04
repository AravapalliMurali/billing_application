import React,{useEffect} from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { startGetBills } from '../../Actions/billActions'
import BillForm from './BillForm'
import BillList from './BillList'
import {Container, Grid, Typography} from '@material-ui/core'



export default function BillContainer(props){
    const {Customerid } = props.location
    const dispatch  = useDispatch()
    const Items = useSelector((state)=>{
        return state.cartItems
    })
    useEffect(()=>{
        dispatch(startGetBills())
    }, [dispatch])

    return(
        <div>
            <Container>
                <Grid style={{position:'relative' , top:"20" , textAlign :"center"}} >
                    <Typography variant = "h2">
                        Bill component
                    </Typography>
                </Grid>
                <Grid container  spacing={3}>
                    <Grid item xs={9}>
                        <BillList/>
                    </Grid>
                    <Grid style ={{position:"relative", top:"30",textAlign:"center"}} item xs={3}>
                        <BillForm Items = {Items} Customerid ={Customerid}/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}