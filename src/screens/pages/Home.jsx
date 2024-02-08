import React from 'react';
import { NavMain, NavSearch } from '../../components/headers';
import HeaderMain from '../../components/headers/HeaderMain';
import Category from '../../components/Category';

import ProductCard from '../../components/ProductCard';
import Footer from '../../components/Footer';
import { useSelector } from 'react-redux';

function Home() {
	const products = useSelector((state) => state.shop.products);
	return (
		<React.Fragment>
			<NavMain />
			<br />
			<br />
			<br />
			<NavSearch />
			<HeaderMain />
			<h2 className="cat">Categories</h2>
			<div className="category-section flex-align mg-top-lg">
				{products.map((product) => {
					return (
						<Category
							name={product.category}
							photo={product.coverPhoto}
							linkID={product.id}
							key={product.id}
						/>
					);
				})}
			</div>
			<div className="products flex-align-center">
				{products.map((products) => {
					return products.products.map((product) => {
						return <ProductCard key={product.id} product={product} />;
					});
				})}
			</div>
			<Footer />
		</React.Fragment>
	);
}

export default Home;
