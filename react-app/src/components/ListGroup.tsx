import { useState } from "react";

function ListGroup() {
	var items = ["Madrid", "Paris", "Rome", "Tokyo"];

	const [selectedIndex, setSelectedIndex] = useState(-1); // Use state for selectedIndex

	return (
		<>
			<h1>This is my title</h1>
			{items.length === 0 ? <p>No items found</p> : null /* Example 1 */}
			{items.length === 0 && <p>No items found</p> /* Example 2 */}
			<ul className="list-group">
				{items.map((item, index) => (
					<li
						className={
							selectedIndex === index
								? "list-group-item active"
								: "list-group-item"
						}
						key={item}
						onClick={() => {
							setSelectedIndex(index);
						}}
					>
						{item}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
