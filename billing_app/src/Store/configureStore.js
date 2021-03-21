import {createStore, combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../Reducers/userReducers'
import customerReducer from '../Reducers/customerReducers'

const  configureStore =()=>{
    const store = createStore(combineReducers({
        user : userReducer ,
        customer : customerReducer
    }),applyMiddleware(thunk))

    return store
}

export default configureStore