import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import { config } from './primeConfig';
import { Header } from './components/Header';
import { Container } from './components/Container';
import { routes } from './routes';

const router = createBrowserRouter(routes);

function App() {
	return (
		<PrimeReactProvider value={config}>
			<div>
				<Header />
				<Container>
					<RouterProvider router={router} />
				</Container>
			</div>
		</PrimeReactProvider>
	);
}

export default App;
