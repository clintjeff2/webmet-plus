import React from 'react';
import { NavMain, NavSearch } from '../../components/headers';
import HeaderMain from '../../components/headers/HeaderMain';
import HeaderSimple from '../../components/HeaderSimple';
import Footer from '../../components/Footer';

function Shop() {
	return (
		<React.Fragment>
			<NavMain />
			<br />
			<br />
			<br />
			<NavSearch />
			<HeaderSimple title={'Shop'} />

			<main className="main">
				<img src="" alt="" />
				<div className="content"></div>
			</main>
			<Footer />
		</React.Fragment>
	);
}

export default Shop;
