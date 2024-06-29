import React from 'react'
import { Link } from 'react-router-dom';
import iconCart from '../assets/images/iconCart.png'
import { useSelector , useDispatch } from 'react-redux';
import { addToCart } from '../store/cart';
const ProductCart = (props) => {
	const Carts = useSelector(state => state.cart.items);
	const dispatch = useDispatch()
	console.log(Carts);

	const handleAddToCart = (event) => { 
    dispatch(addToCart({
			productId : id,
			quantity : 1
		}));
	}

	const {id , name , price , image , slug} = props.data;
	return (
		<>
		  <div className='bg-white p-5 rounded-xl shadow-sm'>
				<Link to={slug}>
				   <img src={image} alt="" className='w-full h-80 object-cover object-top drop-shadow-[0_80px_30px_#0007]'/>
				</Link>
				<h3 className='text-2xl  py-3 text-center font-medium'>{name}</h3>
				<div className='flex items-center justify-between'>
					<p>
						 <span className='text-2xl'>${price}</span>
					</p>
					<button onClick={handleAddToCart} className='bg-gray-300 p-2 rounded-md cursor-pointer text-sm hover:bg-gray-200 flex gap-2'>
						<img src={iconCart} alt="" className='w-5 h-5'/>
						Add To Cart
						</button>
				</div>
			</div>
		</>
	)
}

export default ProductCart