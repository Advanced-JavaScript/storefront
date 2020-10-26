/* eslint-disable no-unused-vars */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Simplecart from './storefront/Simplecart';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


export default () => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <AppBar position="static" color="white">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          Our Store
          </Typography>
          <Simplecart />
        </Toolbar>
      </AppBar>
    </div>
  );
};

