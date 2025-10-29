import { useState } from "react";

interface Props {
	items: string[];
	heading: string;
	// (item: string) => void
	onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
	const [selectedIndex, setSelectedIndex] = useState(-1); // Use state for selectedIndex

	// Hook
	useState;

	return (
		<>
			<h1>{heading}</h1>
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
							onSelectItem(item);
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
