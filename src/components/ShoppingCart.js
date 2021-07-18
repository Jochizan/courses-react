import { useReducer } from 'react';

import ProductItem from './ProductItem';
import CartItem from './CartItem';

import { TYPES } from '../actions/shoppingActions';

import shoppingReducer, {
  shoppingInitialState
} from '../reducers/shoppingReducer';

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart } = state;

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const deleteFromCart = () => {};

  const clearCart = () => {};

  return (
    <div>
      <h2>Carrito de compras</h2>
      <h3>Productos</h3>
      <article className='box grid-responsive'>
        {products.map((product) => (
          <ProductItem key={product.id} data={product} addToCart={addToCart} />
        ))}
      </article>
      <h3>Carrito</h3>
      <article className='box'>
        <button onClick={clearCart}>Limpiar Carrito</button>
        {cart.map((item, idx) => (
          <CartItem key={idx} data={item} deleteFromCart={deleteFromCart} />
        ))}
      </article>
    </div>
  );
};

export default ShoppingCart;
