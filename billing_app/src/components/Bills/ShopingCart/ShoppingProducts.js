import React from 'react'
import ProductItems from './ProductItems'
import {useSelector} from 'react-redux'

export default function ShoppingProducts({addItem}) {
    const products = useSelector(state=> state.products)
    return (
        <div>
            <h2>Shopping products -{products.length} </h2>
            {products.map(ele =>{
                return <ProductItems key={ele._id} product={ele} addItem ={addItem}/>
            })}
        </div>
    )
}
