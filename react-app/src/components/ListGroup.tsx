function ListGroup() {
	var items = ["Madrid", "Paris", "Rome", "Tokyo"];
	//items = [];

	/* We can use this logic to render it dynamically but repeats code
    
    if (items.length === 0)
		return (
			<>
				<h1>Title</h1>
				<p>No items found</p>
			</>
		); 
    */

	/* Creating a variable: */
	const message = items.length === 0 ? <p>No items found</p> : null;

	/* Using a function if we can is better since we can use parameters */
	const getMessage = () => {
		return items.length === 0 ? <p>No items found</p> : null;
	};

	/* Remember, in js, the logic behind && is that if it is true it returns the second part of the comparation */
	true && "Blas"; // Returns Blas
	false && "Blas"; // Returns false
	{
		items.length === 0 && <p>No items found</p>;
	} // Returns false or the value of the paragraph

	return (
		<>
			<h1>This is my title</h1>
			{message}
			{getMessage()}
			{items.length === 0 ? <p>No items found</p> : null /* Example 1 */}
			{items.length === 0 && <p>No items found</p> /* Example 2 */}
			<ul className="list-group">
				{items.map((item) => (
					<li className="list-group-item" key={item}>
						{item}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
