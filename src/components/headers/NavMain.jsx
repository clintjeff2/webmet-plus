import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function NavMain() {
	return (
		<nav className="main-nav flex-align">
			<Link to={'/home'} className="logo">
				webmat+
			</Link>
			<NavLink to={'/'} className="home">
				Home
			</NavLink>
			<NavLink to={'/cart'} className="shop">
				Cart
			</NavLink>
			<NavLink to={'/favorites'} className="track">
				Favorites
			</NavLink>
			<NavLink to={'/login'} className="track">
				Login
			</NavLink>
			<span>Call us at (+237) 645389117</span>
		</nav>
	);
}

export default NavMain;
