import React,{useState,useEffect} from 'react'
import Cart from './Cart'
import {useDispatch , useSelector} from 'react-redux'
import{startGetProducts} from '../../../Actions/productActions'
import ShoppingProducts from './ShoppingProducts'
import {Container , TextField, Typography ,Grid } from '@material-ui/core'
import {Autocomplete} from '@material-ui/lab';


export default function ShoppingCartContainer(props) {
    const {id} = props.match.params
    const dispatch = useDispatch()
    const [cartItems , setCartItems] = useState([])
    const [customerId , setCustomerId] = useState('')
    const [uniqueId , setUniqueId] = useState(id)

    useEffect(()=>{
        dispatch(startGetProducts())
    },[dispatch])

    const handleCustomerChange =(e, param) => { 
            //console.log(e.target.value) 
                if(param){ 
                    setCustomerId(param._id )
                    setUniqueId(param._id)
                    //console.log('details:',)
                }else{       
                setCustomerId('')
                setUniqueId(id)     
            }}


    // customers
    const customers = useSelector((state)=>{
        return state.customers
    })


    const handleName = ()=>{
        let result 
        return result = customers.find(ele=> ele._id === uniqueId)     
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        setCustomerId('')
    }

    const addItem =(product)=>{
        const exist = cartItems.find(ele=>ele._id === product._id)
        if(exist){
            setCartItems(
                cartItems.map(ele=> ele._id ===product._id ? {...ele , quantity : exist.quantity + 1  }: ele)
            )
        } else {
            setCartItems([...cartItems ,{...product ,quantity: 1}])
        }
    }

    const removeProduct=(product)=>{
        const exist  = cartItems.find(ele=>ele._id === product._id)
        if(exist.quantity === 1){
            setCartItems(
                cartItems.filter(ele=>ele._id !== product._id)
            )
        } else {
            setCartItems(
                cartItems.map(ele=>ele._id === product._id ? {...ele , quantity : exist.quantity - 1} : ele)
            )
        }
    }

    return (
        <div>
            <Container>
                <Grid style={{position:'relative' , top:"20" , textAlign :"center"}} >
                    <Typography variant = "h2">
                        Products
                    </Typography>
                </Grid>
                <Grid>
                    
                    <Grid>
                            <p> Hi <u><b>{handleName() && handleName().name} </b></u> !!  welcome to Bills shopping slot </p>
                    </Grid>
                <form onSubmit = {handleSubmit}>
                <Grid  item xs ={12} sm ={6} >
                    <Autocomplete
                        id="combo-box-demo"
                        options={customers}
                        onChange ={handleCustomerChange}
                        getOptionLabel={(customer) => customer.name}
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="customerName" variant="outlined" />}
                    />
                </Grid>
                </form>
                </Grid>
                <Grid container  spacing={3}>
                    <Grid item xs={8}>
                        <ShoppingProducts addItem={addItem}/>
                    </Grid>
                    <Grid style ={{position:"relative", top:"30",textAlign:"center"}} item xs={4}>
                        <Cart cartItems = {cartItems} addItem = {addItem} 
                        removeProduct = {removeProduct} CustomerId ={uniqueId}/>
                    </Grid>
                </Grid>
            </Container>      
        </div>
    )
}
