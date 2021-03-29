import React,{useState} from 'react'
import {useDispatch} from "react-redux"
import { startAddBill } from '../../Actions/billActions'

export default function BillForm({Customerid ,Items}){


    const dispatch = useDispatch()

    const [date , setDate] = useState('')
    const [customerId , setCustomerId] = useState(Customerid ? Customerid :'')
    console.log("customerid:", Customerid)

    const handleInput =(e)=>{
        const input = e.target.name
        if(input === "date"){
            setDate(e.target.value)
        } else if(input === "id"){
            setCustomerId(e.target.value)
        }
    }

    const line = ()=>{
        const result = Items.map(ele=>{
            return {product : ele._id , quantity:ele.quantity}
        })
        return result
        console.log(result) 
    }

    const handleSubmit =(e)=>{
        e.preventDefault()

        const formData = {
            date : date,
            customer : customerId ,
            lineItems : line()
        }

        dispatch(startAddBill(formData))

        setDate('')
        setCustomerId('')
    }
    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <input type = "date" value = {date} onChange = {handleInput} name = "date"/><br/>

                <input type = "text" value = {customerId} onChange = {handleInput} name = "id" placeholder="customerid"/><br/>
                <br/>

                <input type = "submit" value = "Generate"/>
            </form>
        </div>
    )
}