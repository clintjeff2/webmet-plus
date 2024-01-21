import { BrowserRouter } from 'react-router-dom';
import PageRoutes from './pages/PageRoutes';

function RouterApp() {
	return (
		<BrowserRouter>
			<PageRoutes />
		</BrowserRouter>
	);
}

export default RouterApp;
