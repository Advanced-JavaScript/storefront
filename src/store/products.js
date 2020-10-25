/* eslint-disable no-case-declarations */
'use strict';

const initialState = {
  products: [
    {
      name: 'Laptop',
      description: 'To do cool stuff',
      price: '$2999',
      inventory: 30,
      image: 'https://cdn.mos.cms.futurecdn.net/ahevYTh9pWRzkNPF85MQhb.jpg',
      category: 'electronics',
    },
    {
      name: 'Phone',
      description: 'To stay in touch',
      price: '$999',
      inventory: 50,
      image: 'https://phongalaxy.com/wp-content/uploads/2020/04/Phongalaxy-best-cheap-phone-scaled.jpg',
      category: 'electronics',
    },
    {
      name: 'Carrots',
      description: 'To look orangebe healthy',
      price: '$1.99',
      inventory: 100,
      image:'https://www.jessicagavin.com/wp-content/uploads/2019/02/carrots-7-1200.jpg',
      category: 'food',
    },
    {
      name: 'Apples',
      description: 'One apple a day keeps the doctor away',
      price: '$2.99',
      inventory: 110,
      image:'https://www.treehugger.com/thmb/KNwO1-HkUVCvb3WaQ-QQHVHzBbQ=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1190181562-093c2ffdc85d4851918fe98ac4360398.jpg',
      category: 'food',
    },
    {
      name: 'Bananas',
      description: 'Yum Yum!',
      price: '$3.50',
      inventory: 75,
      image: 'https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2018/08/bananas-1354785_1920.jpg',
      category: 'food',
    },
  ],
  displayed: [],
};
//Reducer
export default (state = initialState, action) => {
  const {type, payload} = action;

  switch(type){
  case 'change':
    let displayed = state.products.filter(product => {
      return product.category === payload;
    });
    return {...state, displayed};

  default: 
    return state;
  }

};