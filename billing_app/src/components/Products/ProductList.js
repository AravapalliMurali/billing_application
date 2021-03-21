import React from 'react'
import ProductItem from './ProductItem'

export default function ProductList({data}){

    return(
        <div>
            {data.map(ele=>{
                return <ProductItem key ={ele._id} {...ele}/>
            })}
        </div>
    )
}