/* eslint-disable no-case-declarations */
'use strict';

import axios from 'axios';

const initialState = {
  categories: {
  },
  activeCategory: {
  },
};

export default (state=initialState, action) => {
  const {type, payload} = action;

  switch(type){
  case 'change':
    return {...state, activeCategory: payload};
  case 'GetCategories':
    return {...state, categories: payload};
  
  default:
    return state;
  }
};
// Action creators
export const setActive = active => {
  return{
    type: 'change',
    payload: active,
  };
};

export const getCategories = () => {
  return async dispatch => {
    const res = await axios.get('https://ash-todolist.herokuapp.com/categories');
    dispatch({
      type: 'GetCategories',
      payload: res.data.results,
    });

  };
};

// categories: {
//   electronics: {
//     name: 'Electronics products',
//     displayName: 'Electronics',
//     description: 'Every device you can use',
//   },
//   food: {
//     name: 'Food products',
//     displayName: 'Food',
//     description: 'Everthing you can eat',
//   },
// },
// activeCategory: {
//   name: '',
//   displayName: '',
//   description: '',
// },