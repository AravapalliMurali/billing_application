import React from 'react'
import { useSelector } from 'react-redux'
import CustomerItem from './CustomerItem'

export default function CustomerList(){
    const data  = useSelector((state)=>{
        return state.customer
    })
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