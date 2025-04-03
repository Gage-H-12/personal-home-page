export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<nav style={{ padding: "1rem", background: "#f0f0f0" }}>
					<a href="/" style={{ marginRight: "1rem" }}>
						Home
					</a>
					<a href="/about">About</a>
				</nav>
				{children}
			</body>
		</html>
	);
}
