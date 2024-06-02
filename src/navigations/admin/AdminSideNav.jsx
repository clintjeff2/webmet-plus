import React from 'react';
import { NavLink } from 'react-router-dom';
import './admin.scss';

function AdminSideNav() {
	const user = JSON.parse(localStorage.getItem('user'));
	return (
		<div className="admin">
			<div className="sth">
				<header>
					<img
						src={require('./../../assets/logos/logo.png')}
						alt="The logo we have"
					/>
				</header>
				<p>Welcome {user ? user.email.split('@')[0] : ''}</p>
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
					<li>
						<NavLink to={'/home'}>Log Out</NavLink>
					</li>
				</nav>
			</div>
		</div>
	);
}

export default AdminSideNav;
