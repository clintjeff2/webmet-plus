import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllOrders, storeOrder } from '../store/shopSlice';

//initialize default information
const defaultInfo = {
	name: '',
	address: '',
	email: '',
	tel: '',
};

function OrderForm({ styles, type = '' }) {
	const navigation = useNavigate();
	//create dispatch to dispatch actions and useSelect for getting out information
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.shop.cart);

	//initialize the main hooks
	const [stateData, setStateData] = useState(defaultInfo);
	// const [submitted, setSubmitted] = useState(false);

	const handleSubmitOrder = (e) => {
		e.preventDefault();

		//Update All Orders in Local storage
		dispatch(getAllOrders());

		const order = { ...stateData, cart, time: Date.now() };
		dispatch(storeOrder(order));

		//Update All Orders in Local storage
		dispatch(getAllOrders());

		navigation('/payment');
	};

	return (
		<form
			action=""
			name="form"
			id="student"
			className={`${styles ? styles : ''}`}
			onSubmit={handleSubmitOrder}
		>
			<div className="form">
				<div className="form-item">
					<span className="desc">
						Name <em>*</em>
					</span>
					<input
						type="text"
						placeholder="Enter name"
						required
						name="name"
						value={stateData.name}
						onChange={(e) =>
							setStateData((prev) => {
								return { ...prev, name: e.target.value };
							})
						}
						autoComplete="name"
					/>
				</div>
				<div className="form-item">
					<span className="desc">
						Address <em>*</em>
					</span>
					<input
						type="text"
						placeholder="Enter address"
						name="address"
						required
						value={stateData.address}
						onChange={(e) =>
							setStateData((prev) => {
								return { ...prev, address: e.target.value };
							})
						}
						autoComplete="address"
					/>
				</div>
				<div className="form-item">
					<span className="desc">
						Email <em>*</em>
					</span>
					<input
						type="email"
						placeholder="Enter email"
						name="email"
						required
						value={stateData.email}
						onChange={(e) =>
							setStateData((prev) => {
								return { ...prev, email: e.target.value };
							})
						}
						autoComplete="email"
					/>
				</div>
				<div className="form-item">
					<span className="desc">
						Telephone <em>*</em>
					</span>
					<input
						type="number"
						placeholder="Enter tel"
						required
						name="student-tel"
						value={stateData.tel}
						onChange={(e) =>
							setStateData((prev) => {
								return { ...prev, tel: e.target.value };
							})
						}
						autoComplete="first-name"
					/>
				</div>
			</div>
			<button
				onClick={handleSubmitOrder}
				className="button-main button-main-medium mg-top-md"
			>
				Make Your Order
			</button>
		</form>
	);
}

export default OrderForm;
