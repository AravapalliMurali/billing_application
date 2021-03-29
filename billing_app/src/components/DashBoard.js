import React from 'react'
import {useSelector} from 'react-redux'
import {Avatar, Card, CardContent, CardHeader, Container, Grid, IconButton, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import ListIcon from '@material-ui/icons/List'
import Graph from './Graph'
import {Link} from 'react-router-dom'


const useStyles = makeStyles((theme)=>({
    root :{
        width : '100vw',
        height : '100vh',
        paddingTop : theme.spacing(5)
    } ,
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
}))

export default function Dashboard(){
    const classes = useStyles()

    const customers = useSelector(state=>{
        return state.customer
    })
    //products

    const products = useSelector(state=>{
        return state.product
    })
    // bills
    const bills = useSelector(state=>{
        return state.bill
    })

    return(
        <div>
            <Container className ={classes.root}>
                <Grid>
                    <Typography variant ="h2" align ="center" >
                        dashboard
                    </Typography>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Card className={classes.paper}>
                        <CardHeader
                            avatar ={
                                <Avatar>P</Avatar>
                            }
                            action={
                                <IconButton component ={Link} to ="/products" >
                                    <ListIcon/>
                                </IconButton>
                            }
                            title="Products" variant ="h2"/>
                            <CardContent>
                                <Typography variant ="subtitle1" >Count :{products.length}</Typography>
                            </CardContent>
                        </Card>
                     </Grid>
                    <Grid item xs>
                        <Card className={classes.paper}>
                            <CardHeader
                            avatar ={
                                <Avatar>C</Avatar>
                            }
                            action={
                                <IconButton component ={Link} to ="/customers">
                                    <ListIcon/>
                                </IconButton>
                            }
                            title="Customers" variant ="h2"/>
                            <CardContent>
                                <Typography variant ="subtitle1" >Count :{customers.length}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs>
                    <Card className={classes.paper}>
                        <CardHeader
                            avatar ={
                                <Avatar>B</Avatar>
                            }
                            action={
                                <IconButton component ={Link} to ="/bills">
                                    <ListIcon/>
                                </IconButton>
                            }
                            title="Bill count" variant ="h2"/>
                            <CardContent>
                                <Typography variant ="subtitle1" >Count : {bills.length}</Typography>
                        </CardContent>
                    </Card>
                    </Grid>
                </Grid>
                <Grid className = {classes.root} spacing ={4}>
                    <Graph customers ={customers} products ={products} bills ={bills}/>
                </Grid>
            </Container>
        </div>
    )
}