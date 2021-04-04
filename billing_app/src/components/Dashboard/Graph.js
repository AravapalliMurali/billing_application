import React from 'react'
import {Container, Grid} from '@material-ui/core'
import Chart from "react-google-charts"


export default function Graph({customers , bills , products}){
    const customer = customers.length
    const product = products.length
    const bill = bills.length

    return (
        <Container>
            <Grid item xm ={6}>
                <Chart
                    width={'500px'}
                    height={'300px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Title', 'activity'],
                        ['Customers', customer],
                        ['Products', product],
                        ['bills',bill],
                    ]}
                    options={{
                        title: 'Bills site Activities',
                    }}
                    rootProps={{ 'data-testid': '1' }}
                    />
                </Grid>
        </Container>
    )
}