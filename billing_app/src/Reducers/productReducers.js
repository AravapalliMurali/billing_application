const productInitialValue = []

export default function productReducer(state = productInitialValue , action){
    switch(action.type) {
        case "GET_PRODUCT" :{
            return [...action.payload]
        }

        case "ADD_PRODUCT" :{
            return [...state , {...action.payload}]
        }
        
        default :{
            return [...state]
        }
    }
}