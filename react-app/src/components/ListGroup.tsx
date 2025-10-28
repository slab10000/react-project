function ListGroup() {
	const items = ["Madrid", "Paris", "Rome", "Tokyo"];

	return (
		<>
			<h1>This is my title</h1>
			<ul className="list-group">
				{items.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
