import axios from 'axios'
import swal from 'sweetalert'

// get bills

export const startGetBills=()=>{
    return (dispatch)=>{
        axios.get('http://dct-billing-app.herokuapp.com/api/bills' , {
            headers : {
                "Authorization":`Bearer ${localStorage.getItem('token')}`
            }})
        .then((response)=>{
            const result = response.data
            if(Object.keys(result).includes('errors')){
                alert(result.message)
            } else {
                dispatch(getBill(result))
            }
        })
    }
}

export const getBill =(data)=>{
    return {
        type : "GET_BILLS" ,
        payload : data
    }
}

export const startAddBill= (FormData)=>{
    return (dispatch)=>{
        axios.post('http://dct-billing-app.herokuapp.com/api/bills' ,FormData, {
            headers : {
                "Authorization":`Bearer ${localStorage.getItem('token')}`
            }})
        .then((response)=>{
            const result = response.data
            if(Object.keys(result).includes('errors')){
                alert(result.message)
            } else {
                swal("successfully create the bill ")
                dispatch(AddBill(result))
            }
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
}

export const AddBill=(data)=>{
    return {
        type : "ADD_BILL" ,
        payload : data
    }
}

export const startRemoveBill = (id)=>{
    return(dispatch)=>{
        axios.delete(`http://dct-billing-app.herokuapp.com/api/bills/${id}` , {
            headers : {
                "Authorization":`Bearer ${localStorage.getItem('token')}`
            }})
            .then((response)=>{
                const result = response.data
                if(Object.keys(result).includes('errors')){
                    alert(result.message)
                } else {
                    dispatch(Remove(result))
                    swal('successfully removed the bill')
                }
            })
            .catch((err)=>{
                console.log(err.message)
            })
    }
}

export const Remove =(data)=>{
    return {
        type : "REMOVE" ,
        payload : data
    }
}