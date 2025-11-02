// We have to import our new component

import Alert from "./components/Alert";

function App() {
	return (
		<div>
			<Alert>
				hello world as children <span>HTML content</span>
			</Alert>
		</div>
	);
}

export default App;
