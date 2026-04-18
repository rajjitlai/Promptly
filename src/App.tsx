import { Routes, Route } from "react-router-dom"

import "./globals.css"
import LoginForm from "./_auth/forms/LoginForm"
import SignupForm from "./_auth/forms/SignupForm"
import { Home } from "./_root/pages"
import AuthLayout from "./_auth/AuthLayout"
import RootLayout from "./_root/RootLayout"

const App = () => {
    return (
        <main className="flex h-screen dark">
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/signup" element={<SignupForm />} />
                </Route>

                <Route element={<RootLayout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </main>
    )
}

export default App