import React from 'react'
import {Avatar, Button, Card, CardActions, CardContent, CardHeader, Grid, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme)=>({
    root : {
        width : '100vw',
        height : '35vh',
        //backgroundColor : theme.palette.grey[200]
        paddingTop: theme.spacing(5)
    },
    roots: {
        flexGrow:1,
    },
    paper: {
        padding: theme.spacing(2),
        //textAlign: 'center',
        //color: theme.palette.text.secondary,
    },
}))

export default function ProductItems({product ,addItem}) {
    const classes = useStyles()

    return (
        <div elevation={4} className ={classes.root} >
        <Grid container spacing ={2}>
            <Grid item>
                <Card className={classes.paper} >
                    <CardHeader avatar = {<Avatar >P</Avatar>} title = {product.name} />
                    <CardContent>
                        <Typography variant ="h5" >{product.name}</Typography>
                        <Typography variant ="subtitle1" >Price :${product.price} rs/.</Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={()=>{addItem(product)}} color ="secondary" >Add to Cart</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    </div>
    )
}
