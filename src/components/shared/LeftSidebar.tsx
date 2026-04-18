import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { 
    Home, 
    Compass, 
    Users, 
    Bookmark, 
    ImagePlus, 
    LogOut, 
    Settings 
} from "lucide-react";
import { Button } from "../ui/button";

const sidebarLinks = [
    {
        imgURL: <Home size={24} />,
        route: "/",
        label: "Home",
    },
    {
        imgURL: <Compass size={24} />,
        route: "/explore",
        label: "Explore",
    },
    {
        imgURL: <Users size={24} />,
        route: "/all-users",
        label: "People",
    },
    {
        imgURL: <Bookmark size={24} />,
        route: "/saved",
        label: "Saved",
    },
    {
        imgURL: <ImagePlus size={24} />,
        route: "/create-post",
        label: "Create Post",
    },
];

const LeftSidebar = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    return (
        <nav className="hidden md:flex px-6 py-10 flex-col justify-between min-w-[270px] bg-zinc-950 border-r border-zinc-900">
            <div className="flex flex-col gap-11">
                <Link to="/" className="flex gap-3 items-center">
                    <img 
                        src="/assets/images/logo.svg" 
                        alt="logo" 
                        className="w-8 h-8"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://raw.githubusercontent.com/adrianhajdin/social_media_app/main/public/assets/images/logo.svg';
                        }}
                    />
                    <h2 className="h3-bold text-primary">iSeen</h2>
                </Link>

                <div className="flex flex-col gap-1">
                    {sidebarLinks.map((link) => {
                        const isActive = pathname === link.route;

                        return (
                            <NavLink
                                key={link.label}
                                to={link.route}
                                className={`flex gap-4 items-center p-4 rounded-lg transition-colors hover:bg-primary/10 group ${
                                    isActive && "bg-primary text-white"
                                }`}
                            >
                                <span className={`${isActive ? "text-white" : "text-primary"} group-hover:text-primary transition-colors`}>
                                    {link.imgURL}
                                </span>
                                <span className={`base-medium ${!isActive && "text-zinc-400"} group-hover:text-white transition-colors`}>
                                    {link.label}
                                </span>
                            </NavLink>
                        );
                    })}
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 px-4 py-2 border-t border-zinc-900 pt-8">
                    <div className="w-10 h-10 rounded-full bg-primary flex-center text-white font-bold">
                        JD
                    </div>
                    <div className="flex flex-col">
                        <p className="body-bold text-white">John Doe</p>
                        <p className="small-regular text-zinc-500">@johndoe</p>
                    </div>
                </div>

                <Button 
                    variant="ghost" 
                    className="shad-button_ghost justify-start px-4 hover:bg-zinc-900/50"
                    onClick={() => navigate('/login')}
                >
                    <LogOut className="text-primary mr-4" size={24} />
                    <p className="small-medium lg:base-medium text-zinc-400">Logout</p>
                </Button>
            </div>
        </nav>
    );
};

export default LeftSidebar;
