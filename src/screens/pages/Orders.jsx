import React, { useEffect } from 'react';
import AdminSideNav from '../../navigations/admin/AdminSideNav';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllOrders } from '../../store/shopSlice';

function Orders() {
	const dispatch = useDispatch();
	const orders = useSelector((state) => state.shop.orders);

	useEffect(() => {
		dispatch(getAllOrders());
	}, [dispatch]);
	return (
		<div className="listing">
			<AdminSideNav />
			<div className="main">
				<div className="main-1">
					<h2>Orders You Have To Deliver</h2>
					<header>
						<div></div>
						<li>
							<NavLink to={'/add-property'}>Add New Property</NavLink>
						</li>
					</header>
					<div className="table">
						<div className="head-title">
							<p>Email</p>
							<p>Items</p>
							<p>Amount</p>
							<p>Date</p>
							<p>Address</p>
						</div>
						{orders?.map((order, index) => {
							let priceArray = order.cart.map((item) => item.price);
							let price = priceArray.reduce(
								(sum, val, index, arr) => sum + val,
								0
							);
							console.log(price);
							return (
								<div className="head orders" key={index}>
									<p>{order.email}</p>
									<p>{order.cart.length}</p>
									<p>{price} XAF</p>
									<p>{new Date(order.time).toUTCString()}</p>
									<p>{order.address}</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Orders;
