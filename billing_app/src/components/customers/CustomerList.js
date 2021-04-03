import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import CustomerItem from './CustomerItem'
import { TextField ,InputAdornment, Grid, Typography } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

export default function CustomerList(){
    const [search , setSearch] = useState('')
    const data  = useSelector((state)=>{
        return state.customers
    })

    const handleInput = (e)=>{
        setSearch(e.target.value)
    }

    const handleSearch = ()=>{
        const result = data.filter(ele=>{
            return ele.name.toLowerCase().includes(search.toLowerCase()) || ele.mobile.includes(Number(search))
        })
        return result
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
    }
    return (
        <div>
                <form onSubmit = {handleSubmit}>
                    <TextField type = "text" value = {search} onChange = {handleInput} placeholder ="search Customer" 
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
                        Customer List - {data.length}
                    </Typography>
                </Grid>
                <Grid container spacing={2} style={{overflowY : 'scroll', maxHeight : '600px'}} >
                {
                handleSearch().map(ele =>{
                    return (
                    <Grid item xs={4} key={ele._id}>
                        <CustomerItem  {...ele} />
                    </Grid> )
                })}
                </Grid>
        </div>
    )
}