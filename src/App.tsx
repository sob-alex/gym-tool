import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import { config } from './primeConfig';
import { Header } from './components/Header';
import { routes } from './routes';

const router = createBrowserRouter(routes);

function App() {
	return (
		<PrimeReactProvider value={config}>
			<div>
				<Header />
				<RouterProvider router={router} />
			</div>
		</PrimeReactProvider>
	);
}

export default App;
