// We have to import our new component
import ListGroup from "./components/ListGroup";

function App() {
	let items = ["Madrid", "Paris", "Rome", "Tokyo"];

	return (
		<div>
			<ListGroup items={items} heading="Cities" />
		</div>
	);
}

export default App;
