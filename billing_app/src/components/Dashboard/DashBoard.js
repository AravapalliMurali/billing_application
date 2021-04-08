import React from 'react'
import {useSelector} from 'react-redux'
import {Avatar, Card, CardContent,Divider, CardHeader, Container, Grid, IconButton, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import ListIcon from '@material-ui/icons/List'
import Graph from './Graph'
import {Link} from 'react-router-dom'
import LatestBills from './LatestBills'


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
    divider: {
        margin: theme.spacing(2, 0),
    },
    
}))

export default function Dashboard(){
    const classes = useStyles()

    const customersCount = useSelector(state=>{
        return state.customers
    })
    //products

    const productsCount = useSelector(state=>{
        return state.products
    })
    // bills
    const billsCount = useSelector(state=>{
        return state.bills
    })

    const latestBills = billsCount.slice(Math.max(billsCount.length -4 , 0))
    //console.log('bwbwwhc:',latestBills)

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
                                <Typography variant ="subtitle1" >Count :{productsCount.length}</Typography>
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
                                <Typography variant ="subtitle1" >Count :{customersCount.length}</Typography>
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
                                <Typography variant ="subtitle1" >Count : {billsCount.length}</Typography>
                        </CardContent>
                    </Card>
                    </Grid>
                </Grid>
                <Divider className={classes.divider} />
                <Grid>
                     <Typography variant ="h5"> Latest Bills </Typography>
                </Grid>
                <Grid container  spacing={2} className ={classes.root}>
                    <Grid container spacing={2} item xs={7}  >
                        {latestBills.map(ele =>{
                            return (
                            <Grid item xs={5} key={ele._id}>
                                <LatestBills {...ele} />
                            </Grid> )
                        })}
                    </Grid>
                    <Grid  item xs> 
                        <Graph customers ={customersCount} products ={productsCount} bills ={billsCount}/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}