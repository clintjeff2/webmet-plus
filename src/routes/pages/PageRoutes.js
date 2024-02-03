import { Routes, Route } from 'react-router-dom';
import { Home } from '../../screens/pages';
import Shop from '../../screens/pages/Shop';

function PageRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/shop" element={<Shop />} />
		</Routes>
	);
}

export default PageRoutes;
