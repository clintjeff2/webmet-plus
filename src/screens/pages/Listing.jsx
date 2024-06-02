import React, { useEffect } from 'react';
import AdminSideNav from '../../navigations/admin/AdminSideNav';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStoreProduct } from '../../store/shopSlice';

function Listing() {
	const dispatch = useDispatch();
	const storeProducts = useSelector((state) => state.shop.storeProducts);

	useEffect(() => {
		dispatch(getAllStoreProduct());
	}, [dispatch]);

	let products = [];
	storeProducts.map((store) => {
		products.push(...store.products);
		return store;
	});
	return (
		<div className="listing">
			<AdminSideNav />
			<div className="main">
				<div className="main-1">
					<h2>Your Listings</h2>
					<header>
						<div></div>
						<li>
							<NavLink to={'/add-product'}>Add New Property</NavLink>
						</li>
					</header>
					<div className="table">
						<div className="head-title">
							<p>Image</p>
							<p>Name</p>
							<p>Price</p>
						</div>
						{products?.map((product, index) => (
							<div className="head" key={index}>
								<p>
									<img src={product.image} alt="" />
								</p>
								<p>{product.productName}</p>
								<p>{product.price} XAF</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Listing;
