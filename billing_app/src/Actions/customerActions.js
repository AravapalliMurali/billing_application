import axios from 'axios'
import swal from 'sweetalert'

// get customer 
export const startGetCustomer =()=>{
    return (dispatch)=>{
        axios.get('http://dct-billing-app.herokuapp.com/api/customers' , {
            headers : {
                "Authorization":`Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const result = response.data
            if(Object.keys(result).includes('errors')){
                alert(result.message)
            } else {
                dispatch(getCustomers(result))
            }
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
}

export const getCustomers=(data)=>{
    return {
        type : "GET_CUSTOMER" ,
        payload : data
    }
}

// Add customers

export const startAddCustomers= (formData) =>{
    return(dispatch)=>{
        axios.post('http://dct-billing-app.herokuapp.com/api/customers', formData , {
                headers:{
                    "Authorization":`Bearer ${localStorage.getItem('token')}`
                } })
                .then((response)=>{
                    const result = response.data
                    if(Object.keys(result).includes('error')){
                        alert(result.message)
                    } else {
                        swal('successfully added customer ')
                        dispatch(addCustomer(result))
                    }
                })
                .catch((err)=>{
                    console.log(err.message)
                })
    }
}

export const addCustomer = (data)=>{
    return {
        type : "ADD_CUSTOMER" ,
        payload : data
    }
}

//remove functionality 

export const startRemoveCustomer =(id) =>{
    return (dispatch)=>{
        axios.delete(`http://dct-billing-app.herokuapp.com/api/customers/${id}`,  {
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

export const startEditCustomer=(formData ,id)=>{
    return (dispatch)=>{
        axios.put(`http://dct-billing-app.herokuapp.com/api/customers/${id}`, formData ,{
            headers:{
                "Authorization":`Bearer ${localStorage.getItem('token')}`
            } })
            .then((response)=>{
                const result = response.data
                if(Object.keys(result).includes('errors')){
                    alert(result.message)
                } else {
                    swal("successfully Edit the customer information")
                    dispatch(editCustomer(result))
                }
            })
            .catch((err)=>{
                console.log(err.message)
            })
    }
}

export const editCustomer =(data)=>{
    return {
        type : "EDIT" ,
        payload : data
    }
}