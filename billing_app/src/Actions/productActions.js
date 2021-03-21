import axios from 'axios'
import swal from 'sweetalert'


export const startGetProducts=()=>{
    return(dispatch)=>{
        axios.get('http://dct-billing-app.herokuapp.com/api/products', {
            headers :{
                "Authorization":`Bearer ${localStorage.getItem('token')}`
            }})
        .then((response)=>{
            const result = response.data
            if(Object.keys(result).includes('errors')){
                alert(result.message)
            } else{
                dispatch(getProduct(result))
            }
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
}

export const getProduct= (data)=>{
    return{
        type : "GET_PRODUCT" , 
        payload : data
    }
}

// add product 

export const startAddProduct=(formData)=>{
    return (dispatch)=>{
        axios.post('http://dct-billing-app.herokuapp.com/api/products', formData , {
            headers :{
                "Authorization":`Bearer ${localStorage.getItem('token')}`
            }})
        .then((response)=>{
            const result = response.data
            if(Object.keys(result).includes("errors")){
                alert(result.message)
            } else{
                swal("successfully added the product ")
                dispatch(addProduct(result))
            }
        })
    }
} 

export const addProduct = (data)=>{
    return {
        type : "ADD_PRODUCT" ,
        payload : data
    }
}

//remove functionality 

export const startRemoveCustomer =(id) =>{
    return (dispatch)=>{
        axios.delete(`http://dct-billing-app.herokuapp.com/api/products/${id}`,  {
            headers:{
                "Authorization":`Bearer ${localStorage.getItem('token')}`
            } })
        .then((response)=>{
            const result  = response.data
            if(Object.keys(result).includes('errors')){
                alert(result.message)
            } else{
                swal("successfully removed the customer ")
                dispatch(remove(result))
            }
        })
    }
}

export const remove =(data) =>{
    return {
        type : "REMOVE" ,
        payload : data
    }
}