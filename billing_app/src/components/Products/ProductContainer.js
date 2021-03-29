import React,{useEffect} from 'react'
import ProductForm from './ProductForm'
import {useDispatch} from 'react-redux'
import { startGetProducts } from '../../Actions/productActions'
import ProductList from './ProductList'
import {Container, Grid, Typography} from '@material-ui/core'


export default function ProductContainer(){
    const dispatch = useDispatch()


    useEffect(()=>{
        dispatch(startGetProducts())
    },[dispatch])

    return(
        <div>
            <Container>
                <Grid style={{position:'relative' , top:"20" , textAlign :"center"}} >
                    <Typography variant = "h2">
                    Product Container
                    </Typography>
                </Grid>
                <Grid container direction="row">
                    <Grid item xs={12} sm={6}>
                        <ProductList/>
                    </Grid>
                    <Grid style ={{position:"relative", top:"30",textAlign:"center"}} item xs={12} sm={6}>
                        <ProductForm/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}