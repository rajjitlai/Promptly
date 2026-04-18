import { Link, useLocation } from "react-router-dom";
import { 
    Home, 
    Compass, 
    Users, 
    Bookmark, 
    ImagePlus 
} from "lucide-react";

const bottombarLinks = [
    {
        imgURL: <Home size={20} />,
        route: "/",
        label: "Home",
    },
    {
        imgURL: <Compass size={20} />,
        route: "/explore",
        label: "Explore",
    },
    {
        imgURL: <Bookmark size={20} />,
        route: "/saved",
        label: "Saved",
    },
    {
        imgURL: <ImagePlus size={20} />,
        route: "/create-post",
        label: "Create",
    },
];

const Bottombar = () => {
    const { pathname } = useLocation();

    return (
        <section className="z-50 flex-between w-full sticky bottom-0 rounded-t-[20px] bg-zinc-950 px-5 py-4 md:hidden border-t border-zinc-900">
            {bottombarLinks.map((link) => {
                const isActive = pathname === link.route;

                return (
                    <Link
                        key={link.label}
                        to={link.route}
                        className={`flex-center flex-col gap-1 p-2 transition-colors ${
                            isActive && "bg-primary rounded-[10px]"
                        }`}
                    >
                        <span className={`${isActive ? "text-white" : "text-primary"}`}>
                            {link.imgURL}
                        </span>
                        <p className={`tiny-medium ${isActive ? "text-white" : "text-zinc-400"}`}>
                            {link.label}
                        </p>
                    </Link>
                );
            })}
        </section>
    );
};

export default Bottombar;
