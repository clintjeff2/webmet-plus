import React from 'react';
import AdminSideNav from '../../navigations/admin/AdminSideNav';
import ProductForm from '../../components/ProductForm';

function NewProduct() {
	return (
		<div className="product">
			<AdminSideNav />
			<div className="main">
				<div className="main-1">
					<h2>Add New Product</h2>
					<ProductForm add={true} />
				</div>
			</div>
		</div>
	);
}

export default NewProduct;
