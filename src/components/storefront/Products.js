/* eslint-disable no-unused-vars */
import React from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});


const Products = props => {
  const classes = useStyles();

  return (
    <section className='product'>
      <ul>
        {props.products.displayed.map( product => {
          return (
            <Card className={classes.root}>
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
                <Button size="small" color="primary">
          ADD TO CART
                </Button>
                <Button size="small" color="primary">
          VIEW DETAILS
                </Button>
              </CardActions>
            </Card>

          );
          // <li key={product.name}>{product.name}</li>;
        })}

      </ul>
    </section>
  );
};

const mapStateToProps = state => ({
  products: state.products,
});
  
export default connect(mapStateToProps)(Products);