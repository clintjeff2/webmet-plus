import React from 'react';
import { NavMain, NavSearch } from '../../components/headers';
import HeaderMain from '../../components/headers/HeaderMain';
import HeaderSimple from '../../components/HeaderSimple';
import Footer from '../../components/Footer';
import ReactStars from 'react-rating-stars-component';
import { product } from '../../assets/data/productDetails';
import { FaArrowLeft, FaArrowRight, FaHeart } from 'react-icons/fa';
import CartLink from '../../components/CartLink';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateProduct } from '../../store/shopSlice';

function Shop() {
	const products = useSelector((state) => state.shop.products);
	const dispatch = useDispatch();
	const ratingChanged = () => {};
	const params = useParams();
	// console.log(params);
	let ele = [];

	products.map((el) => {
		el.products.filter((item) => {
			if (item.id === params.id) {
				ele.push(item);
			}
			return item;
		});
		return { ...el, products: ele };
	});
	let prod = ele[0];

	const handleAddToCart = (id, inCart) => {
		let obj = { inCart: true };

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

		if (inCart !== true) {
			dispatch(addToCart(obj));
			dispatch(updateProduct(prod));
		}
	};
	return (
		<React.Fragment>
			<NavMain />
			<br />
			<br />
			<br />
			<NavSearch />
			<HeaderSimple title={'Shop'} />

			<CartLink />

			<main className="main">
				<img
					src={prod?.image}
					alt="A description of a pic"
					className="image-product"
				/>
				<div className="content">
					<span className="name">{prod.productName}</span>
					<span className="price">{`${prod.currency} ${prod.price}`}</span>
					<div className="line"></div>
					<ReactStars
						count={5}
						value={prod.rating}
						edit={false}
						isHalf={true}
						size={24}
						onChange={(e) => ratingChanged(e, product.id)}
						activeColor="#ffd700"
					/>
					<span className="description">{prod.description}</span>
					<div className="quantity">
						<button
							className="button-main button-main-medium"
							onClick={() => handleAddToCart(prod.id, prod?.inCart)}
						>
							Add to Cart
						</button>
					</div>
					<span className="like">
						<FaHeart /> <span>Add to WhishList</span>
					</span>
				</div>
			</main>
			<Footer />
		</React.Fragment>
	);
}

export default Shop;
