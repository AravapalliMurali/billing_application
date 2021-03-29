
import React,{useEffect} from 'react'
import CustomerForm from './CustomerForm'
import {useDispatch} from 'react-redux'
import { startGetCustomer } from '../../Actions/customerActions'
import CustomerList from './CustomerList'
import {Container, Grid, Typography} from '@material-ui/core'
export default function CustomerContainer(){
    const dispatch  = useDispatch()

    useEffect(()=>{
        dispatch(startGetCustomer())
    } ,[dispatch])

    return(
        <div>
            <Container>
                <Grid style={{position:'relative' , top:"20" , textAlign :"center"}} >
                    <Typography variant = "h2">
                        Customers
                    </Typography>
                </Grid>
                <Grid container direction="row">
                    <Grid item xs={12} sm={6}>
                        <CustomerList/>
                    </Grid>
                    <Grid style ={{position:"relative", top:"30",textAlign:"center"}} item xs={12} sm={6}>
                        <CustomerForm/>
                    </Grid>
                </Grid>
            </Container>
            
        </div>
    )
}