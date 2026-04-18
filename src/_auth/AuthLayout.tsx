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
                                <img 
                                    src="/assets/images/logo.svg" 
                                    alt="logo" 
                                    className="w-8 h-8"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://raw.githubusercontent.com/adrianhajdin/social_media_app/main/public/assets/images/logo.svg';
                                    }}
                                />
                                <h2 className="h3-bold md:h2-bold text-primary">iSeen</h2>
                            </div>
                            <Outlet />
                        </div>
                    </section>

                    <img
                        src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop"
                        alt="side-img"
                        className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
                    />
                </div>
            )}
        </>
    )
}

export default AuthLayout