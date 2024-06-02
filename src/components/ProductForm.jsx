import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addStoreProduct, removeStoreProduct } from '../store/shopSlice';
import { product } from '../assets/data/productDetails';

//initialize default information
const defaultInfo = {
	name: '',
	price: 0,
	description: '',
};

function ProductForm({ styles, add, type = '' }) {
	const navigation = useNavigate();
	const productRef = useRef();
	//create dispatch to dispatch actions and useSelect for getting out information
	const dispatch = useDispatch();

	//initialize the main hooks
	const setStateData = useState(defaultInfo)[1];
	// const [submitted, setSubmitted] = useState(false);

	const handleAddProduct = (e) => {
		e.preventDefault();

		dispatch(addStoreProduct(productRef.current.value));

		navigation('/listing');
	};

	const handleRemoveProduct = (e) => {
		e.preventDefault();

		dispatch(removeStoreProduct(productRef.current.value));

		navigation('/listing');
	};

	return (
		<form
			action=""
			name="form"
			id="student"
			className={`${styles ? styles : ''}`}
		>
			<div className="form">
				<div className="form-item">
					<span className="desc">
						Product Category <em>*</em>
					</span>
					<select
						name="level"
						id=""
						ref={productRef}
						onChange={(e) =>
							setStateData((prev) => {
								return { ...prev, type: e.target.value };
							})
						}
					>
						{product.map((prod, index) => (
							<option key={index} value={prod.id}>
								{prod.category.toUpperCase()}
							</option>
						))}
					</select>
				</div>
				{/* <div className="form-item">
					<span className="desc">
						Price <em>*</em>
					</span>
					<input
						type="number"
						placeholder="Enter address"
						name="price"
						required
						value={stateData.price}
						onChange={(e) =>
							setStateData((prev) => {
								return { ...prev, price: e.target.value };
							})
						}
						autoComplete="price"
					/>
				</div> */}
				{/* <div className="form-item">
					<span className="desc">
						Description <em>*</em>
					</span>
					<textarea
						placeholder="Enter description"
						required
						name="product-description"
						value={stateData.description}
						rows={4}
						style={{ resize: 'none' }}
						onChange={(e) =>
							setStateData((prev) => {
								return { ...prev, description: e.target.value };
							})
						}
					></textarea>
				</div> */}
			</div>
			<button
				onClick={add ? handleAddProduct : handleRemoveProduct}
				className="button-main button-main-medium mg-top-md"
			>
				{add ? 'Add Product' : 'Remove Product'}
			</button>
		</form>
	);
}

export default ProductForm;
