import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { BsCartPlus } from 'react-icons/bs';
import { FaHeart } from "react-icons/fa";

function ProductCard({ product }) {
	const ratingChanged = (newRating, os) => {
		console.log(newRating, os);
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
					<span className="name">{product.productName}</span>
					<span className="price">$ {product.price}</span>
				</div>
				<span className="shop-cart">
					<BsCartPlus />
				</span>
			</div>
			<span className="fav flex-align-center"><FaHeart /></span>
		</div>
	);
}

export default ProductCard;
