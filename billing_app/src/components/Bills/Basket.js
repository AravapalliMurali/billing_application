import React,{useState} from 'react'

export default function Basket({_id , name , price , handleRemove , handleItem,handleAdd ,handleSub}){
    const [toggle , setToggle] = useState(false)
    const handleChanges =()=>{
        setToggle(!toggle)
    }
    return(
        <div>
            <h4>Cart Items - {}</h4>
            {toggle ? 
            (<div>
                <blockquote>
                    <h4>Name : {name}</h4>
                    <h4>Price :{price}</h4>
                </blockquote>
                <button onClick ={()=>{handleAdd(_id)}}>+</button>|<button onClick ={()=>{handleSub(_id)}}>-</button><button onClick = {()=>{
                    handleRemove(_id)
                    handleChanges()}}>remove</button>
            </div>) :(
            <div>
                <blockquote>
                    <h4>Name : {name}</h4>
                    <h4>Price :{price}</h4>
                </blockquote>
                <button onClick = {()=>{
                    handleItem(_id)
                    handleChanges()
                    }}>Add to cart</button>
            </div>
            ) } 
        </div>
    )
}