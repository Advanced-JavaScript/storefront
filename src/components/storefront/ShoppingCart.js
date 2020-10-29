/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import StorefrontIcon from '@material-ui/icons/Storefront';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { Typography, Input, TextField, Grid , Button} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 700,
    margin: '5%',
    marginLeft: '20%',
  },
  Button: {
    marginLeft: theme.spacing(3),
  },
}));

const ShoppingCart = props => {
  const classes = useStyles();

  return (
    <>
      <Paper elevation={3} className={classes.root}>
        <Grid container spacing={1}>

          <Grid item xs={6} spacing={1}>
          
            <Typography>
              Order Summary
            </Typography>
            <MenuList>
              {props.content.map(product => {
                return (<MenuItem> {product.name}  </MenuItem>
                );})}
              <Divider light />
            </MenuList>
            <Typography>
              Total:
            </Typography>
            <Typography>
              Biling Address
            </Typography>
            <Input placeholder="Full Name" inputProps={{ 'aria-label': 'description' }} />
            <Divider light />
            <Input placeholder="Address" inputProps={{ 'aria-label': 'description' }} />
            <Divider light />
            <Input placeholder="City" inputProps={{ 'aria-label': 'description' }} />
            <Divider light />
            <Input placeholder="State" inputProps={{ 'aria-label': 'description' }} />
            <Divider light />
            <Input placeholder="Zip" inputProps={{ 'aria-label': 'description' }} />
            

          </Grid>

          <Grid item xs={6}  spacing={2}>
            <Typography>
              Payment Details
            </Typography>
            <MenuList>
              {props.content.map(product => {
                return (<MenuItem>  10$</MenuItem>
                );})}
              <Divider light />
            </MenuList>
            <Typography>
              {props.total} $
            </Typography>
            <Input placeholder="Credit Card" inputProps={{ 'aria-label': 'description' }} />
            <Divider light />
            <TextField
              id="date"
              label="Birthday"
              type="date"
              defaultValue="2020-10-29"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Divider light />
            <Input placeholder="CVV" inputProps={{ 'aria-label': 'description' }} />
            <Divider light />
          </Grid>

        </Grid>
        <Button color="primary" variant="contained" onClick={()=>{alert('Thank you for your purchase');}}>PLACE YOUR ORDER</Button>
      </Paper>
      
    </> 
  );
};

const mapStateToProps = state => ({
  content: state.cart.content,
  total: state.cart.total,
});


export default connect(mapStateToProps)(ShoppingCart);

