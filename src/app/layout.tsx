import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/component/navbar';
import Footer from '@/component/footer';
import { constructMetadata } from '@/lib/utils';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
	weight: [
		'100', // Thin
		'200', // Extra Light
		'300', // Light
		'400', // Regular
		'500', // Medium
		'600', // Semi Bold
		'700', // Bold
		'800', // Extra Bold
		'900', // Black
	],
});

export const metadata = constructMetadata;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.variable} ${inter.className} antialiased`}>
				<NavBar />

				<main className="flex flex-col min-h-[calc(100vh-3.5rem-1px)]">
					<div className="flex flex-col">{children}</div>
				</main>

				<Footer />
			</body>
		</html>
	);
}
