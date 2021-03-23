const billInitialValue = []

export default function billReducer( state = billInitialValue , action){
    switch(action.type){
        case "GET_BILLS" :{
            return [...action.payload]
        }

        default : {
            return [...state]
        }
    }
}