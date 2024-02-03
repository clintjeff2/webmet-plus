import React from 'react';
import { PiPhoneCallFill } from 'react-icons/pi';
import { FaGift } from 'react-icons/fa';
import { TbTruckDelivery } from 'react-icons/tb';

import { momoPic } from '../assets/images';

function Footer() {
	return (
		<footer className="footer">
			<div className="flex-center card-container">
				<div className="card flex-align-center">
					<span className="icon">
						<PiPhoneCallFill />
					</span>
					<div className="desc flex-center">
						<span className="title">Call Center</span>
						<span className="text-lg">(+237) 64538911</span>
					</div>
				</div>
				<div className="card flex-align-center">
					<span className="icon">
						<TbTruckDelivery />
					</span>
					<div className="desc flex-center">
						<span className="title">Free Delivery</span>
						<span className="text-sm">
							Free delivery on the territory of USA for all amounts over $100
						</span>
					</div>
				</div>
				<div className="card flex-align-center">
					<span className="icon">
						<FaGift />
					</span>
					<div className="desc flex-center">
						<span className="title">Gift Cards</span>
						<span className="text-lg">Save up to 20%</span>
					</div>
				</div>
			</div>
			<div className="line"></div>
			<div className="foot">
				<span>
					Copyright@Landmark Software Solution 2024. All Rights Reserved
				</span>
				<img src={momoPic} alt="descript of momo" />
			</div>
		</footer>
	);
}

export default Footer;
