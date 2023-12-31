import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
	const { userId } = auth();

	return (
		<div className="bg-rose-400 text-white">
			<div className="container mx-aut px-4">
				<nav className="flex items-center justify-between h-20">
					<div className="logo text-2xl">Clerk Auth</div>
					{!userId ? (
						<ul className="links flex gap-5">
							<li>
								<Link href="/sign-in">Login</Link>
							</li>
							<li>
								<Link href="/sign-up">Sign Up</Link>
							</li>
						</ul>
					): (
						<UserButton afterSignOutUrl="/"/>
					)}
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
