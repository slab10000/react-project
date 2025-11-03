import React, { type ReactNode } from "react";
import "../App.css";

interface Props {
	children: ReactNode;
	onClick: () => void;
}

const Button = ({ children, onClick }: Props) => {
	return (
		<button type="button" className="btn btn-primary" onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
