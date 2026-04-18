import { Routes, Route } from "react-router-dom"
import { Github } from "lucide-react"

import "./globals.css"
import LoginForm from "./_auth/forms/LoginForm"
import SignupForm from "./_auth/forms/SignupForm"
import { 
    Home, 
    Explore, 
    Saved, 
    AllUsers, 
    CreatePost 
} from "./_root/pages"
import AuthLayout from "./_auth/AuthLayout"
import RootLayout from "./_root/RootLayout"

const App = () => {
    return (
        <main className="flex h-screen dark relative">
            {/* Global Template Ribbon */}
            <div className="fixed top-0 right-0 z-[100] pointer-events-none overflow-hidden w-40 h-40">
                <div className="absolute top-7 -right-12 w-48 py-1.5 bg-primary/90 backdrop-blur-md border-y border-white/20 shadow-2xl transform rotate-45 flex items-center justify-center gap-2 pointer-events-auto cursor-help" title="Promptly UI Template v1.0">
                    <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Template v1.0</span>
                </div>
            </div>

            {/* Subtle Cyber Grid Background */}
            <div className="fixed inset-0 z-[-1] opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

            <Routes>
                {/* Public routes */}
                <Route element={<AuthLayout />}>
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/signup" element={<SignupForm />} />
                </Route>

                {/* Private routes */}
                <Route element={<RootLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/saved" element={<Saved />} />
                    <Route path="/all-users" element={<AllUsers />} />
                    <Route path="/create-post" element={<CreatePost />} />
                </Route>
            </Routes>

            {/* Floating GitHub Link */}
            <a 
                href="https://github.com/rajjitlai/Promptly" 
                target="_blank" 
                rel="noreferrer"
                className="fixed bottom-6 right-6 z-[100] p-3 bg-zinc-900 border border-zinc-800 rounded-full text-white hover:text-primary hover:border-primary transition-all shadow-xl group"
            >
                <div className="absolute bottom-full right-0 mb-3 px-3 py-1 bg-primary text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Get the Code
                    <div className="absolute top-full right-4 border-4 border-transparent border-t-primary"></div>
                </div>
                <Github size={24} />
            </a>
        </main>
    )
}

export default App