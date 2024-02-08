import React from 'react';
import { Link } from 'react-router-dom';

function CartLink() {
	return (
		<div className="cart-link">
			<span className="cart">Twelve Items in your cart</span>
			<Link to={'/cart'} className="">
				<button className="button-main button-main-medium">View Cart</button>
			</Link>
		</div>
	);
}

export default CartLink;
