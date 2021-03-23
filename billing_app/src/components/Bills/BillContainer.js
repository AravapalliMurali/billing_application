import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { startGetBills } from '../../Actions/billActions'
//import BillForm from './BillForm'


export default function BillContainer(){
    const dispatch  = useDispatch()

    useEffect(()=>{
        dispatch(startGetBills())
    } , [dispatch])

    return(
        <div>
            <h2>Bill component</h2>
            {/* <BillForm/> */}
        </div>
    )
}