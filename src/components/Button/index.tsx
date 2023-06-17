export default function Button({
	variant = 'contained',
	children,
	styles
}: {
	variant?: 'contained' | 'outlined';
	children: React.ReactNode;
	styles?: React.CSSProperties;
}) {
	return (
		<button className={variant} style={styles}>
			{children}
		</button>
	);
}
