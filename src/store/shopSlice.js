import { createSlice } from '@reduxjs/toolkit';
import { product } from '../assets/data/productDetails';

const initialState = {
	cart: [],
	fav: [],
	products: product,
};

const shopSlice = createSlice({
	name: 'shop',
	initialState,
	reducers: {
		addFavorite(state, action) {
			state.fav = [...state.fav, action.payload];
		},
		updateFavorite(state, action) {
			state.fav = action.payload;
		},
		addToCart(state, action) {
			state.cart = [...state.cart, action.payload];
		},
		updateCart(state, action) {
			state.cart = action.payload;
		},
		updateProduct(state, action) {
			state.products = action.payload;
		},
	},
});

export const {
	addFavorite,
	updateCart,
	addToCart,
	updateFavorite,
	updateProduct,
} = shopSlice.actions;

export default shopSlice.reducer;
