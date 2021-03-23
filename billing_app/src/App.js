import React,{useState , useEffect} from 'react'
import NavBar from './components/NavBar'
import {Typography} from '@material-ui/core'

export default function App(){
  const [toggle , setToggle] = useState(false)

  const handleToggle = ()=>{
    setToggle(!toggle)
  }

  useEffect(()=>{
    if(localStorage.getItem('token')){
      handleToggle()
    }
  },[])

  return (
    <div>
      <Typography 
        variant="h2"
        align = "center"
      >
         Billing Application
      </Typography>
      <NavBar handleToggle ={handleToggle} toggle ={toggle}/>
    </div>
  )
}