import React from 'react'
import { useSelector } from 'react-redux';
import BillItems from './BillItems'

export default function BillList(){
    const data = useSelector((state)=>{
        return state.bill
    })

    return(
        <div>
            {data.map(ele=>{
                return <BillItems key ={ele._id} {...ele}/>
            })}
        </div>
    )
}