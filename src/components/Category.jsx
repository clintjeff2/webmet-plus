import React from 'react';
import { Link } from 'react-router-dom';

function Category({ name, photo, linkID }) {
	return (
		<div className="category flex-align">
			<div className="category-text flex-align">
				<span className="text">{name}</span>
				<Link to={`#`}>Shop Now</Link>
			</div>
			<img src={photo} className="cat-pic" alt="A description of the phones" />
		</div>
	);
}

export default Category;
