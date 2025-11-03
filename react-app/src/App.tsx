// We have to import our new component

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/button";

function App() {
	const [showAlert, setShowAlert] = useState(false);
	return (
		<div>
			{showAlert && (
				<Alert>
					hello world as children <span>HTML content</span>
				</Alert>
			)}
			{/*<Alert>
				hello world as children <span>HTML content</span>
			</Alert>*/}
			<Button onClick={() => setShowAlert((v) => !v)}>Click me</Button>
		</div>
	);
}

export default App;
