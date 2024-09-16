import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from 'styles/theme';
import "styles/global.scss";

export const metadata: Metadata = {
	title: "nuclecode",
	description: "The Future Of Your Website Secured"
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<AppRouterCacheProvider>
					<ThemeProvider theme={theme}>
						<main className="page-container">
							{children}
						</main>
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
