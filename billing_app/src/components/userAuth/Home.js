import React from 'react'
import {Box ,Typography} from '@material-ui/core'

export default function Home(){

    return(
        <div>
            <Box py ={20} textAlign = "center">
                <Typography 
                    variant="h2"
                    align = "center"
                >
                    Welcome to Bills 
                    Billing Application
                </Typography>
            </Box>
        </div>
    )
}