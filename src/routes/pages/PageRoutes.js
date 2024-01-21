import { Routes, Route } from 'react-router-dom';
import { Home } from '../../screens/pages';

function PageRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	);
}

export default PageRoutes;
