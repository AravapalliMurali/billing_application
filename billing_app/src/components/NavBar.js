import React from 'react'
import swal from 'sweetalert'
import {Link , Route, withRouter} from 'react-router-dom'
import BillContainer from './Bills/BillContainer'
import CustomerContainer from './customers/CustomerContainer'
import Dashboard from './DashBoard'
import MyAccount from './MyAccount'
import productContainer from './Products/ProductContainer'
import Home from './userAuth/Home'
import Login from './userAuth/Login'
import Registration from './userAuth/Registration'
import {clear} from "../Actions/userActions"
import {useDispatch} from 'react-redux'
import Cart from './Cart/Cart'

 const NavBar=({toggle , handleToggle , history})=>{
     const dispatch = useDispatch()
    
    return(
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                {toggle ? (
                    <React.Fragment>
                        <li><Link to ="/account">MyAccount</Link></li>
                        <li><Link to ="/customers">Customers</Link></li>
                        <li><Link to ="/products">Products</Link></li>
                        <li><Link to="/bills">Bills Generator</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to='' onClick = {()=>{
                            swal('successfully logout')
                            dispatch(clear())
                            localStorage.removeItem('token')
                            history.push('/')
                            handleToggle()
                        }}>Logout</Link></li>
                    </React.Fragment>
                ): (
                    <React.Fragment>
                        <li><Link to="/registration">Registration</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </React.Fragment>
                )}
            </ul>

            <Route path ="/" component ={Home} exact ={true}/>
            <Route path ="/account" component ={MyAccount} />
            <Route path ="/customers" component ={CustomerContainer} />
            <Route path ="/products" component ={productContainer} />
            <Route path ="/bills" component ={BillContainer} />
            <Route path ="/dashboard" component ={Dashboard} />
            <Route path ="/registration" component ={Registration} />
            <Route path ="/login" render ={(props)=>{
                return <Login {...props} handleToggle ={handleToggle}/>
            }} />
            <Route path = "/cart/:id" component ={Cart}/>

        </div>
    )
}

export default withRouter(NavBar)