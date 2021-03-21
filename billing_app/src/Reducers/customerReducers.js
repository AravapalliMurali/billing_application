const customerInitalValue = []

const customerReducer =(state = customerInitalValue , action)=>{

    switch(action.type){
        case "GET_CUSTOMER" : {
            return [...action.payload]
        }

        case "ADD_CUSTOMER" : {
            return [...state , {...action.payload}]
        }
        
        case "REMOVE" : {
            return state.filter(ele => ele._id !== action.payload._id)
        }
       
        default : {
            return [...state]
        }
    }
}

export default customerReducer