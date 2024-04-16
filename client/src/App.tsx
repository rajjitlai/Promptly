import { Routes, Route } from "react-router-dom"

import "./globals.css"

const App = () => {
    return (
        <main className="flex h-screen">
            <Routes>
                <Route path="/login" element={<LoginForm />} />

                <Route index element={<Home />} />
            </Routes>
        </main>
    )
}

export default App