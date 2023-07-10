import { SignIn } from "@clerk/nextjs"


const SigninPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
			<SignIn
				appearance={{
					elements: {
						formFieldInput: "py-4",
						formButtonPrimary: "bg-rose-400 py-5",
					},
				}}
			/>
		</div>
  )
}

export default SigninPage