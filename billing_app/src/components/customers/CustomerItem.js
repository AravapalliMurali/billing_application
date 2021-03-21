import React from 'react'
import {useDispatch} from 'react-redux'
import { startRemoveCustomer } from '../../Actions/customerActions'

export default function CustomerItem({_id , name , email , mobile}){
    const dispatch = useDispatch()

    const handleRemove = () =>{
        const conformation = window.confirm(`Are you sure to remove the ${name} from the list `)
        if(conformation){
            dispatch(startRemoveCustomer(_id))
        }
    }

    const handleToggle = () =>{

    }

    return (
        <div>
            <blockquote>
                Name : {name} |
                mobile : {mobile} |
                email : {email}
                <button onClick ={handleRemove} >Remove</button> | <button onClick = {handleToggle}>Edit</button>
            </blockquote>
        </div>
    )
}