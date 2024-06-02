import React from 'react';
import { NavMain, NavSearch } from '../../components/headers';

import Footer from '../../components/Footer';
import HeaderSimple from '../../components/HeaderSimple';

function Success() {
	// const items = useSelector((state) => state.shop.fav);
	return (
		<React.Fragment>
			<NavMain />
			<br />
			<br />
			<br />
			<NavSearch />
			<br />
			<br />
			<HeaderSimple title={'Ordered With Success !'} />
			<br />
			<br />
			<br />
			<br />
			<Footer />
		</React.Fragment>
	);
}

export default Success;
