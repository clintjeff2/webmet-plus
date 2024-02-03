import React from 'react';
import { NavMain, NavSearch } from '../../components/headers';
import HeaderMain from '../../components/headers/HeaderMain';
import Category from '../../components/Category';

import { product as items } from '../../assets/data/productDetails';
import ProductCard from '../../components/ProductCard';
import Footer from '../../components/Footer';

function Home() {
	return (
		<React.Fragment>
			<NavMain />
			<br />
			<br />
			<br />
			<NavSearch />
			<HeaderMain />
			<h2 className='cat'>Categories</h2>
			<div className="category-section flex-align mg-top-lg">
				{items.map((product) => {
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
				{items.map((products) => {
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
