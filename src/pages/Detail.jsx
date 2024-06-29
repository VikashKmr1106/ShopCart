import React ,{useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../products';
import { useDispatch , useSelector } from 'react-redux';
import { addToCart } from '../store/cart';

const Detail = () => {
	const {slug} = useParams();
	const [detail , setDetail] = useState([]);
	const [quantity , setQuality] = useState(1);
	const dispatch = useDispatch()

	useEffect(() => {
    const finddetail = products.filter(product => product.slug === slug)
		if(finddetail.length > 0){
			setDetail(finddetail[0])
		}else{
			window.location.href = '/'
		}
 	}, [])

	const handleMinusQuantity = () => {
    setQuality(quantity - 1 < 1 ? 1 : quantity - 1)
	}
  
	const handlePlusQuantity = () => {
		setQuality(quantity + 1)
	}
	const handleAddToCartBtn = () => {
    dispatch(addToCart({
			productId : detail.id,
			quantity : quantity
		}))
	}

	return (
		<>
		<h1 className='text-3xl my-5'>Product Detail</h1>
		<div className="grid grid-cols-2 mt-5">
			<div>
				<img src={detail.image} alt=""/>
			</div>
			<div className="flex flex-col gap-5">
				<h1 className='text-4xl uppercase font-semibold'>{detail.name}</h1>
				<p className='font-medium text-3xl'>
					${detail.price}
				</p>
				<div className='flex gap-5'>
          <div className='flex gap-2 justify-center items-center'>
            <button  className='bg-gray-100 h-10 w-10 text-2xl font-bold rounded-xl flex justify-center items-center' onClick={handleMinusQuantity}>-</button>
						<span  className=' text-xl h-full w-10 font-bold rounded-xl flex justify-center items-center'>{quantity}</span>
						<button className='bg-gray-100 text-2xl h-full w-10 font-bold rounded-xl flex justify-center items-center' onClick={handlePlusQuantity}>+</button>
					</div>
					<button className='bg-slate-900 text-white px-3 rounded-xl' onClick={handleAddToCartBtn}>Add To Cart</button>
				</div>
				<p>{detail.description}</p>
			</div>
		</div> 
		</>
		
		
	)
}

export default Detail