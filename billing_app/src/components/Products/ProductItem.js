import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { startRemoveProduct} from '../../Actions/productActions'
import EditProduct from './EditProduct'

export default function ProductItem({_id , name , price}){
    const dispatch = useDispatch()
    const [toggle , setToggle] = useState(false)

    const handleRemove = () =>{
        const conformation = window.confirm(`Are you sure to remove the ${name} from the list `)
        if(conformation){
            dispatch(startRemoveProduct(_id))
        }
    }

    

    const handleToggle = ()=>{
        setToggle(!toggle)
    }
    

    return (
        <div>
            {toggle ? (<div>
                <EditProduct id = {_id} name = {name} price = {price} handleToggle ={handleToggle}/>
                <button onClick ={handleToggle}>Cancel</button>
            </div>) : (<div>
                <blockquote>
                    <h4>Name : {name}</h4>
                    <h4>Price :{price}</h4> 
                    <button onClick ={handleRemove} >Remove</button>|<button onClick = {handleToggle}>Edit</button>
            </blockquote>
            </div>)}
        </div>
    )
}