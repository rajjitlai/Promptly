import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const LoginForm = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <h1 className="h3-bold md:h2-bold">Log in to your account</h1>
                <p className="text-muted-foreground small-medium md:base-regular">
                    Welcome back! Please enter your details.
                </p>
            </div>

            <form className="flex flex-col gap-5 w-full mt-4">
                <div className="flex flex-col gap-2">
                    <label className="text-white small-medium">Email</label>
                    <input 
                        type="email" 
                        className="h-12 bg-zinc-900 border-none placeholder:text-zinc-500 text-white rounded-lg px-4 focus:ring-1 focus:ring-primary outline-none"
                        placeholder="Email address"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-white small-medium">Password</label>
                    <input 
                        type="password" 
                        className="h-12 bg-zinc-900 border-none placeholder:text-zinc-500 text-white rounded-lg px-4 focus:ring-1 focus:ring-primary outline-none"
                        placeholder="••••••••"
                    />
                </div>

                <Button type="submit" className="shad-button_primary h-12">
                    Log in
                </Button>

                <p className="text-small-regular text-muted-foreground text-center mt-2">
                    Don't have an account? 
                    <Link to="/signup" className="text-primary font-semibold ml-1">Sign up</Link>
                </p>
            </form>
        </div>
    )
}

export default LoginForm