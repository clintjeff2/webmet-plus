import { createSlice } from '@reduxjs/toolkit';
import { product } from '../assets/data/productDetails';

const initialState = {
	cart: [],
	fav: [],
	products: product,
	orders: [],
	storeProducts: [],
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
		getAllOrders: (state) => {
			let orders = JSON.parse(localStorage.getItem('orders')) || [];

			if (orders === null || orders === undefined) {
				orders = [];
			}

			state.orders = [...orders];
		},
		storeOrder: (state, action) => {
			state.orders = [...state.orders, action.payload];

			localStorage.setItem('orders', JSON.stringify(state.orders));
		},
		addStoreProduct: (state, action) => {
			let store = product.find((prod) => prod.id === action.payload);
			state.storeProducts = [...state.storeProducts, { ...store }];

			localStorage.setItem(
				'storeProducts',
				JSON.stringify(state.storeProducts)
			);
		},
		getAllStoreProduct(state) {
			let prods = JSON.parse(localStorage.getItem('storeProducts')) || [];

			if (prods === null || prods === undefined) {
				prods = [];
			}

			state.storeProducts = [...prods];
		},
		removeStoreProduct: (state, action) => {
			let store = state.storeProducts?.filter((p) => p.id !== action.payload);

			state.storeProducts = [...store];

			localStorage.setItem(
				'storeProducts',
				JSON.stringify(state.storeProducts)
			);
		},
	},
});

export const {
	addFavorite,
	addStoreProduct,
	getAllStoreProduct,
	updateCart,
	addToCart,
	updateFavorite,
	updateProduct,
	getAllOrders,
	storeOrder,
	removeStoreProduct,
} = shopSlice.actions;

export default shopSlice.reducer;
