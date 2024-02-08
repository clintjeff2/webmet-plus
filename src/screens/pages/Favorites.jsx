import React from 'react';
import { NavMain, NavSearch } from '../../components/headers';
import HeaderMain from '../../components/headers/HeaderMain';
import Category from '../../components/Category';

import ProductCard from '../../components/ProductCard';
import Footer from '../../components/Footer';
import HeaderSimple from '../../components/HeaderSimple';
import { useSelector } from 'react-redux';

function Favorites() {
	const items = useSelector((state) => state.shop.fav);
	return (
		<React.Fragment>
			<NavMain />
			<br />
			<br />
			<br />
			<NavSearch />
			<HeaderSimple title={'Favorites'} />
			<div className="products flex-align-center">
				{items.map((products) => {
					return <ProductCard key={products.id} product={products} />;
				})}
			</div>
			<Footer />
		</React.Fragment>
	);
}

export default Favorites;
