//rafce <- to create the file automatically

import type { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const Alert = ({ children }: Props) => {
	return <div className="alert alert-success">{children}</div>;
};

export default Alert;
