import React,{useState , useEffect} from 'react'
import NavBar from './components/NavBar'

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
      <h2> Billing Application</h2>
      <NavBar handleToggle ={handleToggle} toggle ={toggle}/>
    </div>
  )
}