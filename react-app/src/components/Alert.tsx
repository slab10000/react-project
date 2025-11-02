//rafce <- to create the file automatically

interface Props {
	children: string;
}

const Alert = ({ children }: Props) => {
	return <div className="alert alert-success">{children}</div>;
};

export default Alert;
