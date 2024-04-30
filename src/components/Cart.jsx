import { useSelector,useDispatch } from 'react-redux';
import { removeFromCart } from './redux/Action';

const Cart = () => {

  const cart = useSelector(state=> state.cart);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item,index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove from Cart</button>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;