// We have to import our new component
import ListGroup from "./components/ListGroup";

function App() {
	let items = ["Madrid", "Paris", "Rome", "Tokyo"];

	const hanldeSelectItem = (item: string) => {
		console.log(item);
	};

	return (
		<div>
			<ListGroup
				items={items}
				heading="Cities"
				onSelectItem={hanldeSelectItem}
			/>
		</div>
	);
}

export default App;
