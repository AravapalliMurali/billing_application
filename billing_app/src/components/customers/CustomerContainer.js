import React,{useEffect} from 'react'
import CustomerForm from './CustomerForm'
import {useDispatch} from 'react-redux'
import { startGetCustomer } from '../../Actions/customerActions'
import CustomerList from './CustomerList'

export default function CustomerContainer(){
    const dispatch  = useDispatch()

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