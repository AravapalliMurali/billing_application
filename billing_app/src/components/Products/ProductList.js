import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import ProductItem from './ProductItem'
import {Container, TextField ,InputAdornment, Grid, Typography } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

export default function ProductList(){
    const [search , setSearch] = useState('')
    const data = useSelector((state)=>{
        return state.products
    })

    const handleInput = (e) => {
        setSearch(e.target.value)
    }

    const handleSearch =()=>{
        const result = data.filter(ele=>{
            return ele.name.toLowerCase().includes(search.toLowerCase())
        })
        return result
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
    }
    return(
        <div> <Container>
        <form onSubmit = {handleSubmit}>
            <TextField type = "text" value ={search} onChange = {handleInput} placeholder = "search Products" 
            fullWidth variant = "outlined" color ="secondary" margin ="normal" InputProps={{
                startAdornment :(
                    <InputAdornment position="start">
                        <SearchIcon/>
                    </InputAdornment>
                )
            }}/>
        </form>
        <Grid>
            <Typography variant = "h4" align ="left">
                Product List - {data.length}
            </Typography>
        </Grid>
        {
        handleSearch().map(ele =>{
            return <ProductItem key ={ele._id} {...ele}/>
        })
        }
    </Container>
    </div>
    )
}