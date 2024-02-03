import React from 'react';
import { NavLink, Link} from 'react-router-dom';

function NavMain() {
	return (
		<nav className="main-nav flex-align">
			<Link to={'/shop'} className="logo">
				webmat+
			</Link>
			<NavLink to={'/'} className="home">
				Home
			</NavLink>
			<NavLink to={'/shop'} className="shop">
				Shop
			</NavLink>
			<NavLink to={'/favorites'} className="track">
				Favorites
			</NavLink>
			<span>Call us at (+237) 645389117</span>
		</nav>
	);
}

export default NavMain;
