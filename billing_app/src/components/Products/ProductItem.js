import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {startRemoveCustomer} from '../../Actions/productActions'

export default function ProductItem({_id , name , price}){
    const dispatch = useDispatch()
    const [toggle , setToggle] = useState(false)

    const handleRemove = () =>{
        const conformation = window.confirm(`Are you sure to remove the ${name} from the list `)
        if(conformation){
            dispatch(startRemoveCustomer(_id))
        }
    }

    const handleToggle = ()=>{
        setToggle(!toggle)
    }
    

    return (
        <div>
            {toggle ? (<div>

            </div>) : (<div>
                <blockquote>
                    Name : {name} |
                    price : {price} |
                    <button onClick ={handleRemove} >Remove</button> | <button onClick = {handleToggle}>Edit</button>
            </blockquote>
            </div>)}
        </div>
    )
}