import React,{ Fragment , useState } from 'react'
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
import {AppBar, Button, Toolbar, Typography , IconButton , Menu , MenuItem} from '@material-ui/core'
import { makeStyles} from "@material-ui/core/styles"
import MoreIcon from '@material-ui/icons/MoreVert'
import ShoppingCartContainer from './Bills/ShopingCart/ShoppingCartContainer'

const useStyles = makeStyles((theme)=>({
    sectionDesktop : {
        display : "none" ,
    [theme.breakpoints.up('md')] : {
        display : "flex" ,
    },
}}))

 const NavBar=({toggle , handleToggle , history})=>{
     const [mobileMenuAchor , setMobileMenuAchor] = useState(null)
     const isMobilemenuOpen = Boolean(mobileMenuAchor)

     const openMobileMenu  = (e)=>{
         setMobileMenuAchor(e.currentTarget)
     }
     const closeMobileMenu =()=>{
         setMobileMenuAchor(null)
     }

     const dispatch = useDispatch()
     
     const classes = useStyles()
     const mobileMenu = (
         <Menu anchorEl = {mobileMenuAchor} id ="mobile-menu" keepMounted open={isMobilemenuOpen}>
             <MenuItem component ={Link}  onClick={closeMobileMenu} to ="/">Home</MenuItem>
              { toggle ? (
                  <div>
                     <MenuItem component ={Link} onClick={closeMobileMenu}  to = "/account">MyAccount</MenuItem>
                     <MenuItem component ={Link} onClick={closeMobileMenu} to ="/customers" >Customers</MenuItem>
                     <MenuItem component ={Link} onClick={closeMobileMenu} to ="/products" >Products</MenuItem>
                     <MenuItem component ={Link} onClick={closeMobileMenu} to ="/bills" >Bills Generator</MenuItem>
                     <MenuItem component ={Link} onClick={closeMobileMenu} to ="/dashboard" >Dashboard</MenuItem>
                     <MenuItem component ={Link} onClick={closeMobileMenu} to ="" onClick = {()=>{
                    swal('successfully logout')
                    dispatch(clear())
                    localStorage.removeItem('token')
                    history.push('/')
                    handleToggle()
                    }}>SignOut</MenuItem>

                  </div> )
              : (
                  <div>
                    <MenuItem component ={Link} onClick={closeMobileMenu} to="/registration">signUp</MenuItem>
                    <MenuItem component ={Link} onClick={closeMobileMenu} to="/login" >SignIn</MenuItem> 
                  </div>)}
         </Menu>
     )
    
    return(
        <Fragment>
            <AppBar color = "inherit" position ="static">
                <Toolbar>
                    <Typography variant = "h4" style ={{ flexGrow : 1}}>
                        Bills
                    </Typography>
                    <div className ={classes.sectionDesktop} >
                        <Button color = "secondary" component ={Link} to ="/">Home</Button>
                        {toggle ? (
                            <React.Fragment>
                                <Button color ="secondary" component={Link} to = "/account">MyAccount</Button>
                                <Button color ="secondary" component ={Link} to ="/customers" >Customers</Button>
                                <Button color ="secondary" component ={Link} to ="/products" >Products</Button>
                                <Button color ="secondary" component ={Link} to ="/bills" >Bills Generator</Button>
                                <Button color ="secondary" component ={Link} to ="/dashboard" >Dashboard</Button>
                                <Button color ="secondary" component ={Link} to ="" onClick = {()=>{
                                    swal('successfully logout')
                                    dispatch(clear())
                                    localStorage.removeItem('token')
                                    history.push('/')
                                    handleToggle()
                                }}>SignOut</Button>
                            </React.Fragment>
                        ): (
                            <React.Fragment>
                                <Button color = "secondary" component ={Link} to="/registration">signUp</Button>
                                <Button color = "secondary" component ={Link} to="/login" >SignIn</Button>
                            </React.Fragment>
                        )}
                    </div>
                    <IconButton  onClick ={openMobileMenu}>
                        <MoreIcon color= "secondary"/>
                    </IconButton>
                </Toolbar>
            </AppBar>

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

            <Route path = "/shopingcartcontainer/:id" component ={ShoppingCartContainer}/>
            <Route path ="/billcontainer" component = {BillContainer}/>
            {mobileMenu}
        </Fragment>
    )
}

export default withRouter(NavBar)