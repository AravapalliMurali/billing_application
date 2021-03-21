import axios from 'axios'
import swal from 'sweetalert'


export const startGetProducts=()=>{
    return(dispatch)=>{
        axios.get(' http://dct-billing-app.herokuapp.com/api/products' , {
            headers :{
                "Authorization":`Bearer ${localStorage.getItem('token')}`
            }})
        .then((response)=>{
            const result = result.data
            if(Object.keys(result).includes('errors')){
                alert(result.message)   
            } else {
                swal("successfully added the product ")   
            }
        })
    }
}