import { SignUp } from "@clerk/nextjs";

const SignupPage = () => {
	return (
		<div className="flex items-center justify-center h-screen">
			<SignUp
				appearance={{
					elements: {
						formFieldInput: "py-4",
						formButtonPrimary: "bg-rose-400 py-5",
					},
				}}
			/>
		</div>
	);
};

export default SignupPage;
