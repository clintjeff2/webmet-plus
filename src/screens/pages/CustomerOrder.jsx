import React from 'react';
import { NavMain, NavSearch } from '../../components/headers';

import Footer from '../../components/Footer';
import HeaderSimple from '../../components/HeaderSimple';
import OrderForm from '../../components/OrderForm';

function CustomerOrder() {
	// const items = useSelector((state) => state.shop.fav);
	return (
		<React.Fragment>
			<NavMain />
			<br />
			<br />
			<br />
			<NavSearch />
			<HeaderSimple title={'Order Now'} />
			<div className="products flex-align-center">
				<OrderForm />
			</div>
			<Footer />
		</React.Fragment>
	);
}

export default CustomerOrder;
