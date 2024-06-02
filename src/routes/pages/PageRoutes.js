import { Routes, Route } from 'react-router-dom';
import { Home } from '../../screens/pages';
import Shop from '../../screens/pages/Shop';
import Favorites from '../../screens/pages/Favorites';
import CartDetails from '../../screens/pages/CartDetails';
import Login from '../../screens/pages/Login';
import Dashboard from '../../screens/pages/Dashboard';
import Listing from '../../screens/pages/Listing';
import Orders from '../../screens/pages/Orders';
import Finances from '../../screens/pages/Finances';
import NewProduct from '../../screens/pages/NewProduct';
import CustomerOrder from '../../screens/pages/CustomerOrder';
import Success from '../../screens/pages/Success';
import Payment from '../../screens/pages/Payments';
import DeleteProduct from '../../screens/pages/DeleteProduct';

function PageRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/home" element={<Home />} />
			<Route path="/shop/:id" element={<Shop />} />
			<Route path="/favorites" element={<Favorites />} />
			<Route path="/cart" element={<CartDetails />} />
			<Route path="/login" element={<Login />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/listing" element={<Listing />} />
			<Route path="/order" element={<Orders />} />
			<Route path="/finance" element={<Finances />} />
			<Route path="/add-product" element={<NewProduct />} />
			<Route path="/remove-product" element={<DeleteProduct />} />
			<Route path="/make-order" element={<CustomerOrder />} />
			<Route path="/success" element={<Success />} />
			<Route path="/payment" element={<Payment />} />
		</Routes>
	);
}

export default PageRoutes;
