import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Provider } from 'react-redux'
import configureStore from './Store/configureStore'
import {BrowserRouter} from 'react-router-dom'
import {startGetBills} from './Actions/billActions'
import {startGetCustomer} from './Actions/customerActions'
import {startGetProducts} from './Actions/productActions'
import {startgetUser} from './Actions/userActions'


const store = configureStore()
console.log(store.getState())

store.subscribe(()=>{
  //localStorage.setItem("billapplication" , JSON.stringify(store.getState()))
  console.log("updated store:", store.getState())
})
if(localStorage.getItem('token')){
  store.dispatch(startGetBills())
  store.dispatch(startGetCustomer())
  store.dispatch(startGetProducts())
  store.dispatch(startgetUser())
}
ReactDOM.render(<Provider store = {store}><BrowserRouter>
<App/>
</BrowserRouter>
</Provider> , document.getElementById('root'))