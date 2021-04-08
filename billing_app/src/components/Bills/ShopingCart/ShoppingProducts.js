import React,{useState} from 'react'
import ProductItems from './ProductItems'
import {useSelector} from 'react-redux'
import { TextField ,InputAdornment, Grid, Typography } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'; 


export default function ShoppingProducts({addItem}) {
    const [search , setSearch] = useState('')
    
    const products = useSelector(state=> state.products)

    const handleInput = (e)=>{
        setSearch(e.target.value)
    }

    const handleSearch = ()=>{
        const result = products.filter(ele=>{
            return ele.name.toLowerCase().includes(search.toLowerCase())
        })
        return result
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
    }
    return (
        <div> 
                <form onSubmit = {handleSubmit}>
                <Grid container > 
                <Grid item xs ={12} sm ={6}>
                    <TextField type = "text" value = {search} onChange = {handleInput} placeholder ="search Customer" 
                    fullWidth variant = "outlined" color ="secondary" margin ="normal" InputProps={{
                        startAdornment :(
                            <InputAdornment position="start">
                                <SearchIcon/>
                            </InputAdornment>
                        )
                    }}/>
                </Grid>
                </Grid>
                </form>
                <Grid>
                    <Typography variant = "h4" align ="left">
                        Shopping products -{products.length}
                    </Typography>
                </Grid>
                <Grid container spacing={2} style={{overflowY : 'scroll', maxHeight : '600px'}} >
                {
                handleSearch().map(ele =>{
                    return (
                    <Grid item xs={4} key={ele._id}>
                        <ProductItems  product={ele} addItem ={addItem} />
                    </Grid> )
                })}
                </Grid>
        </div>
    )
}
