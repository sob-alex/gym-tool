import { PrimeReactProvider } from 'primereact/api';
import { Button } from 'primereact/button';
import { config } from './primeConfig';

function App() {
	return (
		<PrimeReactProvider value={config}>
			<div>
				<Button label="Submit" />
			</div>
		</PrimeReactProvider>
	);
}

export default App;
