const productInitialValue = []

export default function productReducer(state = productInitialValue , action){
    switch(action.type) {

        default :{
            return [...state]
        }
    }
}