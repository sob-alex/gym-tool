import { RouteObject } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { TrainingLog } from './pages/Dashboard/components/TrainingLog';

export enum PATHS {
	DASHBOARD = '/',
	TRAINING_LOG = '/training-log',
}

export const routes: RouteObject[] = [
	{
		path: PATHS.DASHBOARD,
		element: <Dashboard />,
	},
	{
		path: PATHS.TRAINING_LOG,
		element: <TrainingLog />,
	},
];
