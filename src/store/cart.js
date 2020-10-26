/* eslint-disable no-duplicate-case */
/* eslint-disable no-case-declarations */
'use strict';

const initialState = {
  content :[],
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch(type){
  case 'addToCart':
    let update = state.content.push(payload);
    return {...state, update};
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