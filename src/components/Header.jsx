import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import carticon from '../assets/images/iconCart.png';
import { useSelector , useDispatch } from 'react-redux';
import {toggleStatusTab} from '../store/cart';
const Header = () => {
  const dispatch = useDispatch()
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector(state => state.cart.items);
  console.log('header', carts);

  useEffect(() => {
    let total = 0;  // Change 'const' to 'let' to properly update the value
    carts.forEach(item => {
      total += item.quantity;
    });
    setTotalQuantity(total);
  }, [carts]);

  const handleCartToggle = () => {
    dispatch(toggleStatusTab())
  }

  return (
    <>
      <header className='flex items-center justify-between mb-5'>
        <Link to='/' className='text-xl font-semibold'>Home.</Link>
        <div className='w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center relative'>
          <img src={carticon} alt="cart icon" className='w-6' onClick={handleCartToggle}/>
          <span className='absolute top-2/3 right-1/2 text-white text-sm bg-red-500 w-5 h-5 rounded-full flex items-center justify-center'>
            {totalQuantity}
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;
