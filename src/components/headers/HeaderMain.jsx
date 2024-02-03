import React from 'react';
import { computerSale, picSale } from '../../assets/images';
function HeaderMain() {
	return (
		<header className="header flex-align mg-top">
			<div className="content">
				<h1 className="header-title">
					Cutting Edge{' '}
					<span>
						Technology <b>Store</b>
					</span>
				</h1>
				<span className="text">
					Discover the future at our cutting-edge technology store, where
					innovation meets elegance. Immerse yourself in a curated selection of
					the latest gadgets and breakthrough tech, offering a glimpse into the
					forefront of tomorrow's innovations.
				</span>
			</div>
			<div className="image">
				<img src={computerSale} alt="A description for computer sales" className='compu' />
				<img src={picSale} alt="Description for a sale" className="pic-sale" />
			</div>
		</header>
	);
}

export default HeaderMain;
