/* eslint-disable no-unused-vars */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Simplecart from './storefront/Simplecart';
import HomeIcon from '@material-ui/icons/HomeSharp';

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
          <Typography variant="h4" className={classes.title}>
            <Link to={`/`} activeClassName="current"> <HomeIcon style={{ fontSize: 40 }} />
            </Link>
           Our Store
          </Typography>
          <Simplecart />
        </Toolbar>
      </AppBar>
    </div>
  );
};

