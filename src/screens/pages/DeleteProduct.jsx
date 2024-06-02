import React from 'react';
import AdminSideNav from '../../navigations/admin/AdminSideNav';
import ProductForm from '../../components/ProductForm';

function DeleteProduct() {
	return (
		<div className="product">
			<AdminSideNav />
			<div className="main">
				<div className="main-1">
					<h2>Remove Product</h2>
					<ProductForm add={false} />
				</div>
			</div>
		</div>
	);
}

export default DeleteProduct;
