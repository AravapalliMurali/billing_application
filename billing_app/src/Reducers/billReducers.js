const billInitialValue = []

export default function billReducer( state = billInitialValue , action){
    switch(action.type){
        case "GET_BILLS" :{
            return [...action.payload]
        }

        case "ADD_BILL" : {
            return [...state , {...action.payload}]
        }

        case "REMOVE" :{
            return state.filter(ele=>ele._id !== action.payload._id)
        }

        default : {
            return [...state]
        }
    }
}