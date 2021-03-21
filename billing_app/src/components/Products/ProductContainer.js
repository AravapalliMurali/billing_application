import React,{useEffect} from 'react'
import ProductForm from './ProductForm'
import {useDispatch, useSelector} from 'react-redux'
import { startGetProducts } from '../../Actions/productActions'
import ProductList from './ProductList'

export default function ProductContainer(){
    const dispatch = useDispatch()

    const data = useSelector((state)=>{
        return state.product
    })


    useEffect(()=>{
        dispatch(startGetProducts())
    },[])

    return(
        <div>
            <h2>Product Container</h2>
            <ProductList data = {data}/>
            <ProductForm/>
        </div>
    )
}