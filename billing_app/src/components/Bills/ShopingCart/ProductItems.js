import React from 'react'

export default function ProductItems({product ,addItem}) {
    return (
        <div>
            <blockquote>
                <h4>Product Name : {product.name}</h4>
                <h4>Product Price : {product.price}</h4>
                <button onClick={()=>{addItem(product)}}>Add to Cart</button>
            </blockquote>
        </div>
    )
}
