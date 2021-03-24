const cartId = []

export default function cartReducer(state = cartId , action){

    switch(action.type){
        case "BUY" : {
            return [...action.payload]
        }
        default : {
            return [...state]
        }
    }
}