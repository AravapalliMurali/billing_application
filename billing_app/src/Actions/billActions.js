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