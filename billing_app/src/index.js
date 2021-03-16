import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Provider } from 'react-redux'
import configureStore from './Store/configureStore'
import {BrowserRouter} from 'react-router-dom'

const store = configureStore()
console.log(store.getState())

store.subscribe(()=>{
  console.log("updated store:", store.getState())
})

ReactDOM.render(<Provider store = {store}><BrowserRouter>
<App/>
</BrowserRouter>
</Provider> , document.getElementById('root'))