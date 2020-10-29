/* eslint-disable no-case-declarations */
'use strict';
import axios from 'axios';

const initialState = {
  products: [],
  displayed: [],
  productDetails:{},
};
//Reducer
export default (state = initialState, action) => {
  const {type, payload} = action;

  switch(type){
  case 'change':
    let displayed = state.products.filter(product => {
      return product.category === payload.name;
    });
    return {...state, displayed};

  case 'GetProducts':
    return {...state, products: payload};
  case 'GetProduct':
    let productDetails = state.products.filter(product => {
      return product._id === payload;
    });
    return {...state, productDetails};
  case 'putProduct':
    return {...state, products: payload};
  case 'deleteProduct':
    return {...state, products: payload};
  default: 
    return state;
  }

};

export const getProducts = () => {
  return async dispatch => {
    const res = await axios.get('https://ash-todolist.herokuapp.com/products');
    dispatch({
      type: 'GetProducts',
      payload: res.data.results,
    });
  };
};

export const productDetails = id => {
  return{
    type: 'GetProduct',
    payload: id,
  };
};

export const putProduct = (id, body) => {
  return async dispatch => {
    let res = await axios.put(`https://ash-todolist.herokuapp.com/products/${id}`, body);
    dispatch({
      type: 'PutProduct',
      payload: res.data.results,
    });
  };
};

export const deleteProduct = id => async dispatch => {
  return async dispatch => {
    let res = await axios.delete(`https://ash-todolist.herokuapp.com/products/${id}`);
    dispatch({
      type: 'DeleteProduct',
      payload: res.data.results,
    });
  };
};

// products: [
//   {
//     name: 'Laptop',
//     description: 'To do cool stuff',
//     price: '$2999',
//     inventory: 30,
//     image: 'https://cdn.mos.cms.futurecdn.net/ahevYTh9pWRzkNPF85MQhb.jpg',
//     category: 'electronics',
//   },
//   {
//     name: 'Phone',
//     description: 'To stay in touch',
//     price: '$999',
//     inventory: 50,
//     image: 'https://phongalaxy.com/wp-content/uploads/2020/04/Phongalaxy-best-cheap-phone-scaled.jpg',
//     category: 'electronics',
//   },
//   {
//     name: 'Carrots',
//     description: 'To be healthy',
//     price: '$1.99',
//     inventory: 100,
//     image:'https://www.jessicagavin.com/wp-content/uploads/2019/02/carrots-7-1200.jpg',
//     category: 'food',
//   },
//   {
//     name: 'Apples',
//     description: 'One apple a day keeps the doctor away',
//     price: '$2.99',
//     inventory: 110,
//     image:'https://www.treehugger.com/thmb/KNwO1-HkUVCvb3WaQ-QQHVHzBbQ=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1190181562-093c2ffdc85d4851918fe98ac4360398.jpg',
//     category: 'food',
//   },
//   {
//     name: 'Bananas',
//     description: 'Yum Yum!',
//     price: '$3.50',
//     inventory: 75,
//     image: 'https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2018/08/bananas-1354785_1920.jpg',
//     category: 'food',
//   },
// ],