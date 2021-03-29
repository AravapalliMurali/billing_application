const carts = []

export default function cartReducer(state = carts , action){

    switch(action.type){
        case "ADDITEMS" : {
            return [...action.payload]
        }
        default : {
            return [...state]
        }
    }
}