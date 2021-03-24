import {createStore, combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../Reducers/userReducers'
import customerReducer from '../Reducers/customerReducers'
import productReducer from '../Reducers/productReducers'
import billReducer from '../Reducers/billReducers'
import cartReducer from '../Reducers/cartReducers'

//const result = JSON.parse(localStorage.getItem("billapplication"))
const  configureStore =()=>{
    const store = createStore(combineReducers({
        user : userReducer ,
        customer : customerReducer ,
        product : productReducer,
        bill : billReducer ,
        cart : cartReducer
    }),applyMiddleware(thunk))

    return store
}

export default configureStore