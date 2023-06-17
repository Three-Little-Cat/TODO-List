import { RouteObject, useRoutes } from 'react-router-dom';
import { ROUTES } from './constants/navigation';
import Landing from './pages/Landing';
import Login from './pages/Login';

export default function AppRoutes() {
	return useRoutes(ROUTE_CONFIGS);
}

const ROUTE_CONFIGS: RouteObject[] = [
	{ path: '/', element: <Landing /> },
	{
		path: ROUTES.login,
		element: <Login />
	}
];
