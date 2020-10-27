/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../../store/cart';
import {getProducts} from '../../store/products';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin:40,
  },
});


const Products = props => {
  const classes = useStyles();
  useEffect( () => {
    props.getProducts();
  }, []);

  return (
    <section className='product' >
      <Box display="flex" flexDirection="row">
        {console.log(props.products)}
        {props.products.displayed.map( product => {
          return (
            <Card className={classes.root} flexDirection="row" flexWrap="wrap">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {product.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button onClick={()=>props.addToCart(product)}size="small" color="primary">
          ADD TO CART
                </Button>
                <Button size="small" color="primary">
          VIEW DETAILS
                </Button>
              </CardActions>
            </Card>

          );
        })}
      </Box>
    </section>
  );
};

const mapStateToProps = state => ({
  products: state.products,
  content: state.cart.content,
});

const mapDispatchToProps = {addToCart, getProducts};
  
export default connect(mapStateToProps, mapDispatchToProps)(Products);