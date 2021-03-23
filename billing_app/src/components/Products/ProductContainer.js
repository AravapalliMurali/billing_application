import React,{useEffect} from 'react'
import ProductForm from './ProductForm'
import {useDispatch} from 'react-redux'
import { startGetProducts } from '../../Actions/productActions'
import ProductList from './ProductList'

export default function ProductContainer(){
    const dispatch = useDispatch()


    useEffect(()=>{
        dispatch(startGetProducts())
    },[dispatch])

    return(
        <div>
            <h2>Product Container</h2>
            <ProductList/>
            <ProductForm/>
        </div>
    )
}