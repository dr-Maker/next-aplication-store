import { useState } from 'react';

const intialState = {
  cart: [],
};

const useInitialState = () => {
  const [state, setState] = useState(intialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeToCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((item) => item.id !== payload.id),
    });
  };

  return {
    state,
    addToCart,
    removeToCart,
  };
};

export default useInitialState;
