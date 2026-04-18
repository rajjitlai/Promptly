import { Button } from "@/components/ui/button"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

const LoginForm = () => {
    const navigate = useNavigate();
    const [email] = useState("demo@promptly.ai");
    const [password] = useState("password123");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would involve authentication
        // For the frontend demo, we just navigate to the home feed
        navigate("/");
    };

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <h1 className="h3-bold md:h2-bold text-white">Log in to your account</h1>
                <p className="text-zinc-500 small-medium md:base-regular">
                    Welcome back! Please enter your details.
                </p>
            </div>

            <form onSubmit={handleLogin} className="flex flex-col gap-5 w-full mt-4">
                <div className="flex flex-col gap-2">
                    <label className="text-zinc-300 small-medium">Email</label>
                    <input 
                        type="email" 
                        defaultValue={email}
                        className="h-12 bg-zinc-900/50 border border-zinc-800 placeholder:text-zinc-600 text-white rounded-lg px-4 focus:ring-1 focus:ring-primary outline-none transition-all"
                        placeholder="Email address"
                        readOnly
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-zinc-300 small-medium">Password</label>
                    <input 
                        type="password" 
                        defaultValue={password}
                        className="h-12 bg-zinc-900/50 border border-zinc-800 placeholder:text-zinc-600 text-white rounded-lg px-4 focus:ring-1 focus:ring-primary outline-none transition-all"
                        placeholder="••••••••"
                        readOnly
                    />
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
                    <p className="text-[10px] uppercase tracking-wider text-primary font-bold mb-1">Demo Credentials</p>
                    <p className="text-xs text-zinc-400">Email: <span className="text-zinc-200">demo@promptly.ai</span></p>
                    <p className="text-xs text-zinc-400">Password: <span className="text-zinc-200">password123</span></p>
                </div>

                <Button type="submit" className="shad-button_primary h-12">
                    Log in
                </Button>

                <p className="text-small-regular text-zinc-500 text-center mt-2">
                    Don't have an account? 
                    <Link to="/signup" className="text-primary font-semibold ml-1 hover:text-primary/80 transition-colors">Sign up</Link>
                </p>
            </form>
        </div>
    )
}

export default LoginForm