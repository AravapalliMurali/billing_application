import React,{useEffect} from 'react'
import {useSelector , useDispatch} from 'react-redux'
import {startgetUser} from '../Actions/userActions'

export default function MyAccount(){
    const dispatch = useDispatch()
    const data = useSelector((state)=>{
        return state.user
    })

    useEffect(()=>{
        dispatch(startgetUser())
    },[dispatch])

    return(
        <div>
            <h2>MyAccount</h2>
            <h4>Name : {data.username}</h4>
            <h4>Email : {data.email}</h4>
            <h4>businessName : {data.businessName}</h4>
            <h4>Address : {data.address}</h4>
        </div>
    )
}