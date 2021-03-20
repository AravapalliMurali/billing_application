import axios from 'axios'


// getting user account details

export const startgetUser = ()=>{
    return (dispatch)=>{
        axios.get('http://dct-billing-app.herokuapp.com/api/users/account' , {
            headers:{
                "Authorization":`Bearer ${localStorage.getItem('token')}`
            } })

        .then((responce)=>{
            const result = responce.data
            dispatch(userInfo(result))
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
}

export const userInfo=(data)=>{
    return{
        type :"USERINFO",
        payload : data
    }
}

// clear the store of my account details 
export const clear = ()=>{
    return {
        type : "CLEAR"
    }
}