/* eslint-disable no-case-declarations */
'use strict';

const initialState = {
  categories: {
    electronics: {
      name: 'Electronics products',
      displayName: 'Electronics',
      description: 'Every device you can use',
    },
    food: {
      name: 'Food products',
      displayName: 'Food',
      description: 'Everthing you can eat',
    },
  },
  activeCategory: {
    name: 'Electronics products',
    displayName: 'Electronics',
    description: 'Every device you can use',
  },
};

export default (state=initialState, action) => {
  const {type, payload} = action;

  switch(type){
  case 'change':
    let categories = state.categories;
    let activeCategory = categories[payload];
    return { activeCategory, categories};

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