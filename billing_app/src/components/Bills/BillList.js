import React from 'react'
import { useSelector } from 'react-redux';
import BillItems from './BillItems'
import { Grid, Typography } from '@material-ui/core'


export default function BillList(){
    const data = useSelector((state)=>{
        return state.bills
    })

    return(
        <div>
            <Grid>
                    <Typography variant = "h4" align ="left">
                        Bills  - {data.length}
                    </Typography>
                </Grid>
                <Grid container spacing={2} style={{overflow : 'scroll', maxHeight : '600px'}} >
                {
                data.map(ele =>{
                    return (
                    <Grid item xs={4} key={ele._id}>
                        <BillItems {...ele} />
                    </Grid> )
                })}
                </Grid>
        </div>
    )
}