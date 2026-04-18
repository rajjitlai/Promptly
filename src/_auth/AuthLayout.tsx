import { Outlet, Navigate } from "react-router-dom"

const AuthLayout = () => {
    const isAuthenticated = false

    return (
        <>
            {isAuthenticated ? (
                <Navigate to="/" />
            ) : (
                <div className="flex flex-1 min-h-screen">
                    <section className="flex flex-1 justify-center items-center flex-col py-10 px-4 sm:px-6 lg:px-8">
                        <div className="w-full max-w-md">
                            <div className="flex items-center gap-2 mb-8">
                                <h2 className="h3-bold md:h2-bold text-primary">Promptly</h2>
                            </div>
                            <Outlet />
                        </div>
                    </section>

                    <img
                        src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000&auto=format&fit=crop"
                        alt="side-img"
                        className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
                    />
                </div>
            )}
        </>
    )
}

export default AuthLayout