import React, { useEffect } from 'react';
import AdminSideNav from '../../navigations/admin/AdminSideNav';
import { FaArrowUp } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders } from '../../store/shopSlice';

function Dashboard() {
	const dispatch = useDispatch();
	const orders = useSelector((state) => state.shop.orders);

	useEffect(() => {
		dispatch(getAllOrders());
	}, [dispatch]);

	let revenueTotal = 0;
	orders.map((order) => {
		revenueTotal =
			order.cart
				.map((cart) => cart.price)
				.reduce((sum, val, index, arr) => sum + val, 0) + revenueTotal;

		return order;
	});
	return (
		<div className="dashboard">
			<AdminSideNav />
			<div className="main">
				<div className="main-1">
					<h2>Dashboard</h2>
					<div className="abbrev">
						<div className="bar">
							<span className="title">Orders</span>
							<span className="value">{orders.length}</span>
							<FaArrowUp />
						</div>
						<div className="bar">
							<span className="title">Revenue</span>
							<span className="value">{revenueTotal}</span>
							<FaArrowUp />
						</div>
					</div>
					<h2>Most Ordered Items</h2>
					<div className="all-products">
						<div className="item-container">
							{orders[Math.floor(Math.random() * orders.length)]?.cart.map(
								(cart, index) => (
									<div className="item" key={index}>
										<img src={cart.image} alt="A radom logo" />
										<span className="amount">{cart.price} XAF</span>
										<span className="name">{cart.productName}</span>
									</div>
								)
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
