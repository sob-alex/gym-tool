import { RouteObject } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Layout } from './components/Layout';
import { TrainingLog } from './pages/TrainingLog';
import WorkoutFormPage from './pages/WorkoutFormPage/WorkoutFormPage';

export enum ROUTE_PATHS {
	DASHBOARD = '/',
	TRAINING_LOG = '/training-log',
	ADD_WORKOUT = '/add-workout',
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
			{
				path: ROUTE_PATHS.ADD_WORKOUT,
				element: <WorkoutFormPage />,
			},
		],
	},
];
