import React,{useState} from 'react'
import {useDispatch} from "react-redux"
import { startAddBill } from '../../Actions/billActions'

export default function BillForm({customer , line }){
    const dispatch = useDispatch()
    const [date , setDate] = useState('')
    const [customerId , setCustomerId] = useState(customer ? customer : '')

    const handleInput =(e)=>{
        const input = e.target.name
        if(input === "date"){
            setDate(e.target.value)
        } else if(input === "id"){
            setCustomerId(e.target.value)
        }
    }

    const handleSubmit =(e)=>{
        e.preventDefault()

        const formData = {
            date : date,
            customer : customerId ,
            lineItems : line.map(ele=>{
                return {...ele}
            })
        }

        dispatch(startAddBill(formData))
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