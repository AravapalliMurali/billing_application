import React from 'react'

export default function Basket({basketItems}){

    return(
        <div>
            <h3>Basket - {basketItems.length}</h3>
            {basketItems.map(ele=>{
                return (<div key = {ele._id}>
                    <blockquote>
                        <h4>Name:{ele.name}</h4>
                        <h4>price :{ele.price}</h4>
                    </blockquote>
                </div>)
            })}
        </div>
    )
}