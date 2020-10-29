/* eslint-disable no-duplicate-case */
/* eslint-disable no-case-declarations */
'use strict';

const initialState = {
  content :[],
  total: 0,
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch(type){
  case 'addToCart':
    let update = state.content.push(payload);
    let total = state.total + 10;
    return {...state, update, total};
  case 'removeFromCart':
    state.content.splice(state.content.indexOf(payload),1);
    return {...state};
  default: 
    return state;
  }
};

export const addToCart = product => {
  return {
    type: 'addToCart',
    payload: product,
  };
};

export const removeFromCart = product => {
  return {
    type: 'removeFromCart',
    payload: product,
  };
};