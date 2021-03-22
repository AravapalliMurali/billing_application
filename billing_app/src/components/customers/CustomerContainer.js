import React,{useEffect} from 'react'
import CustomerForm from './CustomerForm'
import {useSelector , useDispatch} from 'react-redux'
import { startGetCustomer } from '../../Actions/customerActions'
import CustomerList from './CustomerList'

export default function CustomerContainer(){
    const dispatch  = useDispatch()
    const data = useSelector((state) =>{
        return state.customer
    })

    useEffect(()=>{
        dispatch(startGetCustomer())
    } ,[dispatch])

    return(
        <div>
            <h2>Customer component</h2>
            <CustomerList/>
            <CustomerForm/>
        </div>
    )
}