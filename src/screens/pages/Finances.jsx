import React, { useEffect } from 'react';
import AdminSideNav from '../../navigations/admin/AdminSideNav';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders } from '../../store/shopSlice';

function Finances() {
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
		<div className="finances">
			<AdminSideNav />
			<div className="main">
				<div className="main-1">
					<h2>Finances and Overview</h2>

					<div className="section">
						<div className="item">
							<span>Average Customer Order Amount</span>
							<span>{(revenueTotal / orders.length).toFixed(2) || 0} XAF</span>
							<span>From {orders.length || 0} Customers</span>
						</div>
						<div className="item">
							<span>Total Number Of Orders</span>
							<span>{orders.length || 0}</span>
							<span>From {orders.length || 0} Customers</span>
						</div>
						<div className="item">
							<span>Total Revenue Made</span>
							<span>{revenueTotal} XAF</span>
							<span>From {orders.length || 0} Customers</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Finances;
