import React from 'react'
import { useSelector } from 'react-redux'
import ProductItem from './ProductItem'

export default function ProductList(){
    const data = useSelector((state)=>{
        return state.product
    })

    return(
        <div>
            {data.map(ele=>{
                return <ProductItem key ={ele._id} {...ele}/>
            })}
        </div>
    )
}