import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { GrFavorite } from 'react-icons/gr';
import { TiShoppingCart } from 'react-icons/ti';

function NavSearch() {
	return (
		<React.Fragment>
			<div className="search">
				<div className="search-container flex-align-center">
					<form action="" className="search-form">
						<select name="category">
							<option value="">All category</option>
							<option value="computer">computers</option>
							<option value="laptops">laptops</option>
							<option value="camera">cameras</option>
							<option value="headphones">headphones</option>
							<option value="phones">phones</option>
						</select>
						<input type="text" name="search" />
						<button type="submit">
							<FaSearch />
						</button>
					</form>
					<div className="reactions flex-align-center">
						<span className="section-icon">
							<GrFavorite className="icons" />
							<span className="number flex-align-center">0</span>
						</span>
						<span className="section-icon">
							<TiShoppingCart className="icons" />
							<span className="number flex-align-center">0</span>
						</span>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default NavSearch;
