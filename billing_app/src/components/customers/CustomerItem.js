import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { startRemoveCustomer } from '../../Actions/customerActions'
import EditCustomer from './EditCustomer'

export default function CustomerItem({_id , name , email , mobile}){
    const dispatch = useDispatch()
    const [toggle , setToggle] = useState(false)

    const handleRemove = () =>{
        const conformation = window.confirm(`Are you sure to remove the ${name} from the list `)
        if(conformation){
            dispatch(startRemoveCustomer(_id))
        }
    }

    const handleToggle = () =>{
        setToggle(!toggle)
    }

    return (
        <div>
            {toggle ? (
                <div>
                    <EditCustomer id ={_id} name = {name} email = {email} mobile = {mobile} handleToggle = {handleToggle}/>
                    <button onClick = {handleToggle}>cancel</button>
                </div>
        ) : (
            <div>
            <blockquote>
                Name : {name} |
                mobile : {mobile} |
                email : {email}
                <button onClick ={handleRemove} >Remove</button> | <button onClick = {handleToggle}>Edit</button>
            </blockquote>
        </div>
        )}

        </div>)
}