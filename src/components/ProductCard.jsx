import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { BsCartPlus } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {
	addFavorite,
	addToCart,
	updateFavorite,
	updateProduct,
} from '../store/shopSlice';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
	const products = useSelector((state) => state.shop.products);
	const favs = useSelector((state) => state.shop.fav);
	const dispatch = useDispatch();

	const ratingChanged = (newRating, os) => {
		console.log(newRating, os);
	};

	const handleRemoveFavorite = (id, fav) => {
		let obj = { isFavorite: false };

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

		const newFavs = favs.filter((el) => el.id !== id);

		dispatch(updateFavorite(newFavs));
	};
	const handleAddFavorite = (id, fav) => {
		let obj = { isFavorite: true };

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

		if (fav !== true) {
			dispatch(addFavorite(obj));
			dispatch(updateProduct(prod));
		}

		// console.log(fav);
		if (fav === true) {
			handleRemoveFavorite(id, fav);
		}
	};

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
		<div className="product-card">
			<img
				src={product.image}
				alt={product.productName}
				className="product-card--image"
			/>
			<div className="product-card--details flex-align">
				<div className="product-card--info flex-center">
					<span className="rating">
						<ReactStars
							count={5}
							value={product.rating}
							edit={false}
							isHalf={true}
							size={24}
							onChange={(e) => ratingChanged(e, product.id)}
							activeColor="#ffd700"
						/>
					</span>
					<Link to={`/shop/${product.id}`} className="name">{product.productName}</Link>
					<span className="price" style={{fontWeight: 'bold', color: 'blue'}}>XAF {product.price}</span>
				</div>
				<span
					className="shop-cart"
					onClick={() => handleAddToCart(product.id, product?.inCart)}
				>
					<BsCartPlus />
				</span>
			</div>
			<span
				className="fav flex-align-center"
				onClick={() => handleAddFavorite(product.id, product?.isFavorite)}
			>
				<FaHeart className={`${product?.isFavorite ? 'red' : ''}`} />
			</span>
		</div>
	);
}

export default ProductCard;
