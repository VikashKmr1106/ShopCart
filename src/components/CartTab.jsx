import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { toggleStatusTab } from '../store/cart'; // Ensure the correct path

const CartTab = () => {
  const cartsproduct = useSelector((state) => state.cart.items);
  const statusTab = useSelector((state) => state.cart.statusTab); // Corrected to match key name
  const dispatch = useDispatch();

  const handleToggleTab = () => {
    dispatch(toggleStatusTab());
  };

  return (
    <aside className={`fixed top-0 right-0 bg-gray-700 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px] transform transition-transform duration-300 ${statusTab === false ? 'translate-x-full' : ''}`}>
      <h2 className='p-5 text-white text-2xl'>Shopping Cart</h2>
      <div>
        {cartsproduct.map((item, key) => (
          <CartItem key={key} data={item} />
        ))}
      </div>
      <div className='grid grid-cols-2'>
        <button className='bg-black text-white' onClick={handleToggleTab}>CLOSE</button>
        <button className='bg-amber-600 text-white'>CHECKOUT</button>
      </div>
    </aside>
  );
};

export default CartTab;

