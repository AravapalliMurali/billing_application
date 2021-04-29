import React,{useState , useEffect} from 'react'
import NavBar from './components/NavBar' 
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme)=>({
  root : {
    width : "100vw" ,
    height : '100vh' ,
    backgroundcolor : "grey[300]" ,
    //paddingTop : theme.spacing()
  }}))

export default function App(){
  const classes = useStyles()
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
    <div className ={classes.root} >
        <NavBar handleToggle ={handleToggle} toggle ={toggle}/>
    </div>

  )
}