import React from 'react'
import CustomerItem from './CustomerItem'

export default function CustomerList({data}){

    return (
        <div>
            <h3>Customer List - {data.length}</h3>
            {
                data.map(ele =>{
                    return <CustomerItem  key = {ele._id} {...ele}/>
                })
            }
        </div>
    )
}