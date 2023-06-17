import './Card.css';

export default function Card({
	styles,
	children
}: {
	styles?: React.CSSProperties | undefined;
	children?: React.ReactNode;
}) {
	return (
		<div className="card-container" style={styles}>
			{children}
		</div>
	);
}
