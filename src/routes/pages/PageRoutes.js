import { Routes, Route } from 'react-router-dom';
import { Home } from '../../screens/pages';
import Shop from '../../screens/pages/Shop';
import Favorites from '../../screens/pages/Favorites';
import CartDetails from '../../screens/pages/CartDetails';

function PageRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/home" element={<Home />} />
			<Route path="/shop/:id" element={<Shop />} />
			<Route path="/favorites" element={<Favorites />} />
			<Route path="/cart" element={<CartDetails />} />
		</Routes>
	);
}

export default PageRoutes;
