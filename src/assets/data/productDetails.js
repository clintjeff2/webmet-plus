import {
	phoneCover,
	computerCover,
	laptopCover,
	cameraCover,
	headphoneCover,
	camera1,
	camera2,
	camera3,
	computer1,
	computer2,
	computer3,
	computer4,
	computerSale,
	headphone1,
	headphone2,
	headphone3,
	laptop1,
	laptop2,
	laptop3,
	phone1,
	phone2,
	phone3,
	phone4,
	phone5,
} from '../images';

export const product = [
	{
		category: 'phones',
		id: 'phone123',
		coverPhoto: phoneCover,
		products: [
			{
				id: 'lkk123',
				productName: 'Samsung Galaxy S8+ Black 64GB',
				price: 499,
				currency: '$',
				rating: 4.4,
				review: 'This was my best for 2023',
				image: phone1,
				description:
					'The Samsung Galaxy S21 boasts a stunning AMOLED display, versatile camera system, and 5G capabilities, providing a premium Android experience with powerful performance.',
			},
			{
				id: 'jdhe123',
				productName: 'Apple iPhone 5s 4.7-Inch Black 128GB',
				price: 299,
				currency: '$',
				rating: 3,
				review: '',
				image: phone2,
				description:
					"The iPhone 13 combines Apple's A15 Bionic chip, advanced camera features, and a sleek design, delivering a high-end iOS experience with impressive performance and photographic capabilities.",
			},
			{
				id: 'jdhe098',
				productName: 'Apple iPhone 6s 4.7-Inch Black 128GB',
				price: 449,
				currency: '$',
				rating: 1,
				review: '',
				image: phone3,
				description:
					"The iPhone 13 combines Apple's A15 Bionic chip, advanced camera features, and a sleek design, delivering a high-end iOS experience with impressive performance and photographic capabilities.",
			},
			{
				id: 'jdhe765',
				productName: 'Cubot Ones 4.7 Inch 1GB Android 4.2 GPS 3G',
				price: 379,
				currency: '$',
				rating: 1.46,
				review: '',
				image: phone4,
				description:
					'The Cubot X20 Pro offers budget-friendly sophistication with a triple-camera setup, large display, and decent performance, making it a practical choice for users seeking affordability and functionality.',
			},
		],
	},
	{
		category: 'computers',
		id: 'computer123',
		coverPhoto: computerCover,
		products: [
			{
				id: 'lkk123',
				productName: 'Asus | 8GB RAM | 1TB Internal Mem| 2GB Dedicated',
				price: 549,
				currency: '$',
				rating: 4,
				review: 'This was my best for 2023',
				image: computer1,
				description:
					'The ASUS ROG Strix GL12CX desktop delivers high-performance gaming with customizable RGB lighting, liquid cooling, and powerful components, catering to enthusiasts seeking top-tier gaming experiences.',
			},
			{
				id: 'jdhe123',
				productName: 'DELL | 16GB RAM | 1TB Internal Mem| 1GB Dedicated',
				price: 599,
				currency: '$',
				rating: 2,
				review: '',
				image: computer2,
				description:
					'The Dell XPS Desktop combines sleek design with powerful performance, featuring high-end processors and graphics for productivity and content creation in a compact form factor.',
			},
			{
				id: 'jdhe098',
				productName: 'Apple MAC | 64GB RAM | 4TB Internal Mem| 6GB Dedicated',
				price: 1299,
				currency: '$',
				rating: 2.3,
				review: '',
				image: computer3,
				description:
					'The Apple iMac 27-inch impresses with a 5K Retina display, powerful Intel processors, and elegant design, making it a premium choice for creative professionals and demanding tasks.',
			},
		],
	},
	{
		category: 'laptops',
		id: 'laptops123',
		coverPhoto: laptopCover,
		products: [
			{
				id: 'lkk123',
				productName:
					'Accer | 8GB RAM | 1TB Internal Mem| 2GB Dedicated| corei3',
				price: 399,
				currency: '$',
				rating: 4,
				review: 'This was my best for 2023',
				image: laptop1,
				description:
					'The Acer Swift 3 features a sleek aluminum design, a vibrant IPS display, and impressive battery life, offering a well-balanced and affordable option for everyday computing.',
			},
			{
				id: 'jdhe123',
				productName:
					'DELL | 16GB RAM | 1TB Internal Mem| 1GB Dedicated: corei7',
				price: 190,
				currency: 'FCFA',
				rating: 4,
				review: '',
				image: laptop2,
				description:
					'The Dell XPS 13 boasts a virtually borderless InfinityEdge display, powerful performance, and a compact design, making it an ideal ultrabook for on-the-go professionals.',
			},
			{
				id: 'jdhe098',
				productName:
					'Apple MAC | 64GB RAM | 4TB Internal Mem| 6GB Dedicated: corei7',
				price: 999,
				currency: '$',
				rating: 1,
				review: '',
				image: laptop3,
				description:
					"Apple's MacBook Pro 16-inch offers a stunning Retina display, high-end performance, and an immersive audio experience, catering to creative professionals and demanding tasks.",
			},
		],
	},
	{
		category: 'cameras',
		id: 'camera123',
		coverPhoto: cameraCover,
		products: [
			{
				id: 'lkk123',
				productName: '61MP Full-Frame Sensor, 10fps, 4K Video, 5-axis IBIS.',
				price: 3499,
				currency: '$',
				rating: 4,
				review: 'This was my best for 2023',
				image: camera1,
				description:
					'Offering a balanced 24.5MP full-frame sensor, 4K video, and in-body stabilization, the Nikon Z6 excels in low-light conditions and ensures steady shots in diverse shooting scenarios.',
			},
			{
				id: 'jdhe123',
				productName: '30.4MP Full-Frame, 7fps, 4K Video, Dual Pixel AF.',
				price: 2499,
				currency: '$',
				rating: 3,
				review: '',
				image: camera2,
				description:
					'Offering a balanced 24.5MP full-frame sensor, 4K video, and in-body stabilization, the Nikon Z6 excels in low-light conditions and ensures steady shots in diverse shooting scenarios.',
			},
			{
				id: 'jdhe098',
				productName:
					'24.5MP Full-Frame, 12fps, 4K Video, In-Body Stabilization.',
				price: 1290000,
				currency: 'FCFA',
				rating: 5,
				review: '',
				image: camera3,
				description:
					'Offering a balanced 24.5MP full-frame sensor, 4K video, and in-body stabilization, the Nikon Z6 excels in low-light conditions and ensures steady shots in diverse shooting scenarios.',
			},
		],
	},
	{
		category: 'headphones',
		id: 'headphone123',
		coverPhoto: headphoneCover,
		products: [
			{
				id: 'lkk123',
				productName: 'Sony WH-1000XM4',
				price: 349.99,
				currency: '$',
				rating: 4,
				review: 'This was my best for 2023',
				image: headphone1,
				description:
					'Sony WH-1000XM4 over-ear headphones feature industry-leading noise cancellation, exceptional sound quality, touch controls, and a comfortable design, making them ideal for immersive audio experiences.',
			},
			{
				id: 'jdhe123',
				productName: 'Bose QuietComfort 35 II',
				price: 299.95,
				currency: '$',
				rating: 3,
				review: '',
				image: headphone2,
				description:
					'Sennheiser HD 660 S open-back headphones deliver high-fidelity audio with a natural soundstage, providing an audiophile-grade listening experience for discerning music enthusiasts.',
			},
			{
				id: 'jdhe098',
				productName: 'Sennheiser HD 660 S',
				price: 499.95,
				currency: '$',
				rating: 4.2,
				review: '',
				image: headphone3,
				description:
					' The Bose QC35 II wireless headphones offer superb noise cancellation, balanced sound, and a lightweight design for long-lasting comfort, making them a top choice for travelers and audiophiles',
			},
		],
	},
];
