import React from 'react'
import {Box ,Typography,List,ListItem ,Grid} from '@material-ui/core'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
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
            <Box>
            <Grid item xs={6}  >
            <Typography variant ="subtitle2" textAlign ="left" color ="rgb(0 0 0 / 87%)">
                    * Bills is  pos billing web application 
            </Typography>
            <Typography variant = "subtitle2" textAlign = "left" color="rgb(0 0 0 / 87%)">
                *It can handle and manage the customer's, products and as well as  bills of the customer and printing it 
            </Typography>
            <Typography variant ="h6"> Follow these steps to operate the application</Typography>
                    <List component='ul'>
                        <ListItem><ChevronRightIcon/> Register the owner account .</ListItem>
                        <ListItem><ChevronRightIcon/> Login with your credentials.</ListItem>
                        <ListItem><ChevronRightIcon/> After login, a Home page will appear.</ListItem>
                        <ListItem><ChevronRightIcon/> Add new customers and products in the respective coloumns  .</ListItem>
                        <ListItem><ChevronRightIcon/> Click on BuyItems which is avaliable  on each customer profile. </ListItem>
                        <ListItem><ChevronRightIcon/> After clicking on buyitems button you are unable the add products items to cart.</ListItem>
                        <ListItem><ChevronRightIcon/> After that click on check Out and click on  bill generator button.</ListItem> 
                        <ListItem><ChevronRightIcon/> The bills are stored in bill generator option there you can able to print the bill respective customer.</ListItem> 
                    </List>
                </Grid>
            </Box>
        </div>
    )
}