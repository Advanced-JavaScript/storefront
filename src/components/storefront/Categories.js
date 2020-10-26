/* eslint-disable no-unused-vars */
import React from 'react';
import {connect} from 'react-redux';
import {setActive} from '../../store/categories';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },

}));


const Categories = props => {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <h2>{props.categories.activeCategory.displayName}</h2>

      <h2>Browse Our Categories</h2>
      <AppBar position="static" color="white">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          {Object.keys(props.categories.categories).map((category,i) => {
            return (
              <Tab label={props.categories.categories[category].displayName} {...a11yProps(i)} key={category} onClick={()=>props.setActive(category)}/>
            ); 
          })}
        </Tabs>
      </AppBar>
     
    </div>
    
  );
  
};

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = {setActive};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);