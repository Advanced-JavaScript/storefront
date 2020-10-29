/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { Typography, Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 700,
    margin: '5%',
    marginLeft: '20%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  Button: {
    marginLeft: '20%',
  },
}));

const ProductDetails = props => {
  useEffect(() => {
    props.product[0];
  }, []);

  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <CardHeader
        title={props.product[0].name}
        subheader={props.product[0].display_name}
      />
      <CardMedia
        className={classes.media}
        image={props.product[0].image}
        title={props.product[0].name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.product[0].description}
        </Typography>
      </CardContent>
      
      <Button color="primary" variant="contained">BUY THIS PRODUCT<FavoriteIcon /></Button>
      
    </Card>
  );
  
};

const mapStateToProps = state => ({
  product: state.products.productDetails,
});


export default connect(mapStateToProps)(ProductDetails);