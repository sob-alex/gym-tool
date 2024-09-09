import { PrimeReactProvider } from 'primereact/api';
import { config } from './primeConfig';
import { Header } from './components/Header';
import { Container } from './components/Container';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
	return (
		<PrimeReactProvider value={config}>
			<div>
				<Header />
				<Container>
					<Dashboard />
				</Container>
			</div>
		</PrimeReactProvider>
	);
}

export default App;
