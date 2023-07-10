import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Aldrich } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Aldrich({ subsets: ["latin"], weight: "400" });

export const metadata = {
	title: "Clerk Next Auth",
	description: "Clerk Next Auth",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<ClerkProvider>
				<body className={inter.className}>
					<Navbar />
					{children}
				</body>
			</ClerkProvider>
		</html>
	);
}
