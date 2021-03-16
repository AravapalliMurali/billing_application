const userintialValue = []

export default function userReducer(state = userintialValue , action ){

    switch(action.type){

        default : {
            return [...state]
        }
    }
}