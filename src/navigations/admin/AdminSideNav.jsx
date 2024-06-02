import React from 'react';
import { NavLink } from 'react-router-dom';
import './admin.scss';

function AdminSideNav() {
	return (
		<div className="admin">
			<div className="sth">
				<header>
					<img
						src={require('./../../assets/logos/logo.png')}
						alt="The logo we have"
					/>
				</header>
				<p>Welcome (Raisa)</p>
				<nav>
					<li>
						<NavLink to={'/dashboard'}>Dashboard</NavLink>
					</li>
					<li>
						<NavLink to={'/listing'}>Listing</NavLink>
					</li>
					<li>
						<NavLink to={'/order'}>Orders</NavLink>
					</li>
					<li>
						<NavLink to={'/finance'}>Finances</NavLink>
					</li>
					<li>
						<NavLink to={'/add-product'}>Add Product</NavLink>
					</li>
					<li>
						<NavLink to={'/remove-product'}>Remove Product</NavLink>
					</li>
				</nav>
			</div>
		</div>
	);
}

export default AdminSideNav;
