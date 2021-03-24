import React,{useEffect} from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { startGetBills } from '../../Actions/billActions'
import BillForm from './BillForm'
import BillList from './BillList'


export default function BillContainer(){
    const dispatch  = useDispatch()
    const cartItems = useSelector((state)=>{
        return state.cart
    })

    useEffect(()=>{
        dispatch(startGetBills())
    } , [dispatch])

    return(
        <div>
            <h2>Bill component</h2>
            {cartItems.map((ele,i)=>{
                console.log(ele.line)
                return <BillForm key ={i} {...ele}/>
            })}
            <BillList/>
        </div>
    )
}