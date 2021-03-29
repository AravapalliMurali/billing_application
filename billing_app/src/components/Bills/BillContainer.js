import React,{useEffect} from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { startGetBills } from '../../Actions/billActions'
import BillForm from './BillForm'
import BillList from './BillList'


export default function BillContainer(props){
    const {Customerid} = props.location
    const dispatch  = useDispatch()
    const Items = useSelector((state)=>{
        return state.cartItems
    })
    useEffect(()=>{
        dispatch(startGetBills())
    }, [dispatch])

    return(
        <div>
            <h2>Bill component</h2>
            <BillForm Items = {Items} Customerid ={Customerid}/>
            <BillList/>
        </div>
    )
}