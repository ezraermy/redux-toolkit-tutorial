import { clearCart } from '../features/cart/cartSlice';
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux' 

export const CartContainer = () => {
  const dispatch = useDispatch();
  const {cartItems, total, amount} = useSelector((store) => store.cart);
  if(amount < 1){
    return (
      <section className="cart">
        <header>
          <h1>Your bag</h1>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    )
  };
  return (
    <section className="cart">
      <header>
        <h1>You bag</h1>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item } />
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => 
          dispatch(clearCart())}>Clear Cart</button>
      </footer>
    </section>
  )
}
