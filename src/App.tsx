import { PrimeReactProvider } from 'primereact/api';
import { config } from './primeConfig';

function App() {
	return (
		<PrimeReactProvider value={config}>
			<div>123</div>
		</PrimeReactProvider>
	);
}

export default App;
