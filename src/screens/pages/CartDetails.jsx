import React from 'react';
import { NavMain, NavSearch } from '../../components/headers';
import HeaderMain from '../../components/headers/HeaderMain';
import { product as items } from '../../assets/data/productDetails';
import Footer from '../../components/Footer';
import HeaderSimple from '../../components/HeaderSimple';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { updateCart, updateProduct } from '../../store/shopSlice';

function CartDetails() {
	const cart = useSelector((state) => state.shop.cart);
	const products = useSelector((state) => state.shop.products);
	const dispatch = useDispatch();
	const handleRemove = (id) => {
		let newCart = cart.filter((el) => el.id !== id);
		dispatch(updateCart(newCart));

		let obj = { inCart: false };

		let prod = products.map((el) => {
			let ele = [];
			el.products.filter((item) => {
				if (item.id === id) {
					obj = { ...item, ...obj };
					item = { ...obj };
				}
				ele.push(item);
				return item;
			});
			// console.log(ele);
			return { ...el, products: ele };
		});

		dispatch(updateProduct(prod));
	};

	const addQuantity = (id, quantity) => {
		// console.log(quantity, 1111);
		let obj = { quantity: quantity || 1 };
		// console.log(obj);

		let prod = products.map((el) => {
			let ele = [];
			el.products.filter((item) => {
				if (item.id === id) {
					obj = { ...item, quantity: Number(obj.quantity) + 1 };
					item = { ...obj };
				}
				ele.push(item);
				return item;
			});
			// console.log(ele);
			return { ...el, products: ele };
		});

		let objt = { quantity: quantity || 1 };

		let ele = [];
		cart.map((item) => {
			if (item.id === id) {
				objt = { ...item, quantity: Number(objt.quantity) + 1 };
				ele.push(objt);
			} else {
				ele.push(item);
			}
			return item;
		});

		dispatch(updateCart(ele));
		dispatch(updateProduct(prod));
	};

	const reduceQuantity = (id, quantity) => {
		// console.log(quantity, 1111);
		let obj = { quantity: quantity || 1 };
		// console.log(obj);

		let prod = products.map((el) => {
			let ele = [];
			el.products.filter((item) => {
				if (item.id === id && Number(obj.quantity) !== 1) {
					obj = { ...item, quantity: Number(obj.quantity) - 1 };
					item = { ...obj };
				}
				ele.push(item);
				return item;
			});
			// console.log(ele);
			return { ...el, products: ele };
		});

		let objt = { quantity: quantity || 1 };

		let ele = [];
		cart.map((item) => {
			if (item.id === id) {
				objt = { ...item, quantity: Number(objt.quantity) - 1 };
				ele.push(objt);
			} else {
				ele.push(item);
			}
			return item;
		});

		dispatch(updateCart(ele));
		dispatch(updateProduct(prod));
	};
	const handleTotalPrice = () => {
		let itemPrices = [0];
		cart.map((item) => {
			itemPrices.push(item.price * (item?.quantity || 1));
			return item;
		});

		// console.log(itemPrices);
		let price = itemPrices.reduce((a, b) => a + b);
		// console.log(price, 111, itemPrices);

		return price;
	};
	return (
		<React.Fragment>
			<NavMain />
			<br />
			<br />
			<br />
			<NavSearch />
			<HeaderSimple title={'Cart'} />
			<main className="cart">
				<div className="section">
					{cart?.map((item) => {
						return (
							<div className="cart-shop" key={item.id}>
								<FaTimes onClick={() => handleRemove(item.id)} />
								<img src={item.image} alt="A description of a cart item" />
								<span className="item-name">{item.name}</span>
								<span className="price">
									{item.currency} {item.price}
								</span>
								<div className="quantity">
									<span className="quan">Quantity</span>
									<FaArrowLeft
										onClick={() => reduceQuantity(item.id, item?.quantity)}
									/>
									<span className="value">{item?.quantity || 1}</span>
									<FaArrowRight
										onClick={() => addQuantity(item.id, item?.quantity)}
									/>
								</div>
								<span className="total">
									{item.currency} {item.price * (item?.quantity || 1)}
								</span>
							</div>
						);
					})}
				</div>

				<div className="cart-totals">
					<h4 className="totals">Cart Totals</h4>
					<span>Total: $ {handleTotalPrice()}</span>
					<button className="button-main button-main-medium">
						Proceed to Checkout
					</button>
				</div>
			</main>
			<Footer />
		</React.Fragment>
	);
}

export default CartDetails;
