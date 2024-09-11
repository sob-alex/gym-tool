import { RouteObject } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { TrainingLog } from './pages/Dashboard/components/TrainingLog';
import { Layout } from './components/Layout';

export enum ROUTE_PATHS {
	DASHBOARD = '/',
	TRAINING_LOG = '/training-log',
}

export const routes: RouteObject[] = [
	{
		path: ROUTE_PATHS.DASHBOARD,
		element: <Layout/>,
		children: [
			{
				path: ROUTE_PATHS.DASHBOARD,
				element: <Dashboard />,
			},
			{
				path: ROUTE_PATHS.TRAINING_LOG,
				element: <TrainingLog />,
			},
		],
	},
];
