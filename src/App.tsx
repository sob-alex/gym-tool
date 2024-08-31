import { PrimeReactProvider } from 'primereact/api';
import { Button } from 'primereact/button';
import { config } from './primeConfig';
import { Header } from './components/Header';
import { Container } from './components/Container';

function App() {
	return (
		<PrimeReactProvider value={config}>
			<div>
				<Header />
				<Container>
					<Button label="Submit" />
				</Container>
			</div>
		</PrimeReactProvider>
	);
}

export default App;
