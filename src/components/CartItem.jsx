import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { products } from '../products';
import { changeQuantity } from '../store/cart';

const CartItem = (props) => {
  const { productId, quantity } = props.data;
  const [detail, setDetail] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const findDetail = products.find(product => product.id === productId);
    if (findDetail) {
      setDetail(findDetail);
    }
  }, [productId]);

  const handleMinusQuantity = () => {
    if (quantity > 1) {
      dispatch(changeQuantity({
        productId: productId,
        quantity: quantity - 1
      }));
    } else {
      dispatch(changeQuantity({
        productId: productId,
        quantity: 0
      }));
    }
  };

  const handlePlusQuantity = () => {
    dispatch(changeQuantity({
      productId: productId,
      quantity: quantity + 1
    }));
  };

  return (
    <div className="flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-sm ">
      {detail.image && <img src={detail.image} alt={detail.name} className='w-12' />}
      <h3>{detail.name}</h3>
      <p>${detail.price * quantity}</p>
      <div className='w-14 flex items-center justify-between gap-1'>
        <button className='bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-cyan-600' onClick={handleMinusQuantity}>-</button>
        <span>{quantity}</span>
        <button className='bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-cyan-600' onClick={handlePlusQuantity}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
