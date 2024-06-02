import React from 'react';
import { NavMain, NavSearch } from '../../components/headers';

import Footer from '../../components/Footer';
import HeaderSimple from '../../components/HeaderSimple';
import { useNavigate } from 'react-router-dom';

function Payment() {
	// const items = useSelector((state) => state.shop.fav);
	const navigation = useNavigate();

	const handleBuy = () => {
		navigation('/success');
	};
	return (
		<React.Fragment>
			<NavMain />
			<br />
			<br />
			<br />
			<NavSearch />
			<HeaderSimple title={'Select Payment Method'} />
			<div className="products flex-align-center">
				<div
					style={{
						display: 'flex',
						gap: '20px',
						alignItems: 'center',
						width: '100%',
					}}
				>
					<div
						style={{ maxWidth: '30%', overflow: 'hidden' }}
						className="item"
						onClick={handleBuy}
					>
						<img
							style={{ width: '100%', borderRadius: '5px', cursor: 'pointer' }}
							src={require('./../../assets/images/momo mtn.jpeg')}
							alt=""
						/>
					</div>
					<div
						style={{ maxWidth: '30%', overflow: 'hidden' }}
						className="item"
						onClick={handleBuy}
					>
						<img
							style={{ width: '100%', borderRadius: '5px', cursor: 'pointer' }}
							src={require('./../../assets/images/orange momo.png')}
							alt=""
						/>
					</div>
					<div
						style={{ maxWidth: '30%', overflow: 'hidden' }}
						className="item"
						onClick={handleBuy}
					>
						<img
							style={{ width: '100%', borderRadius: '5px', cursor: 'pointer' }}
							src={require('./../../assets/images/visa card.jpg')}
							alt=""
						/>
					</div>
				</div>
			</div>
			<Footer />
		</React.Fragment>
	);
}

export default Payment;
