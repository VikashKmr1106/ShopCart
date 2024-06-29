import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [] ,
	statusTab : false
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productId, quantity } = action.payload;
      const indexProductId = state.items.findIndex(item => item.productId === productId);
      if (indexProductId >= 0) {
        state.items[indexProductId].quantity += quantity;
      } else {
        state.items.push({ productId, quantity });
      }
			localStorage.setItem('carts' , JSON.stringify(state.items))
    },
    changeQuantity(state, action) {
      const { productId, quantity } = action.payload;
      const indexProductId = state.items.findIndex(item => item.productId === productId);
      if (quantity > 0) {
        state.items[indexProductId].quantity = quantity;
      } else {
        state.items = state.items.filter(item => item.productId !== productId);
      }
			localStorage.setItem('carts' , JSON.stringify(state.items))
    },
    // toggleStatusTab(state,){
		// 	if(state.statusTab === false){
		// 		state.statusTab = true;
		// 	}else{
		// 		state.statusTab = false;
		// 	}
		// }
		toggleStatusTab(state) {
      state.statusTab = !state.statusTab;
    }
  }
});

export const { addToCart, changeQuantity , toggleStatusTab } = CartSlice.actions;
export default CartSlice.reducer;


// import { createSlice } from '@reduxjs/toolkit';
// const initialState = {
// 	items :[] 
// }

// const CartSlice = createSlice({
// 	name : 'cart',
// 	initialState,
// 	reducers : {
//     addToCart(state , action){
// 			const {productId , quantity} = action.payload;
// 			const indexproductId = (state.items).findIndex(item => item.productId === productId);
// 			if(indexproductId >= 0){
// 				state.items[indexproductId].quantity += quantity;
// 			}
// 			else{
// 				state.items.push({productId , quantity})
// 			}
// 		},
// 		changeQuantity(state, action){
// 			const {productId , quantity} = action.payload;
// 			const indexproductId = (state.items).findIndex(item => item.productId === productId);
// 			if(quantity > 0){
// 				state.items[indexproductId].quantity =quantity;
// 			}else{
// 				delete state.items[indexproductId]
// 			}
// 		}
// 	}
// })
// export const {addToCart , changeQuantity} = CartSlice.actions;
// export default CartSlice.reducer;