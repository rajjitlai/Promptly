import { Link, useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { Button } from "../ui/button";

const Topbar = () => {
    const navigate = useNavigate();

    return (
        <section className="sticky top-0 z-50 md:hidden bg-zinc-950 border-b border-zinc-900 w-full">
            <div className="flex-between py-4 px-5">
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

                <div className="flex gap-4 items-center">
                    <Button 
                        variant="ghost" 
                        className="shad-button_ghost"
                        onClick={() => navigate('/login')}
                    >
                        <LogOut className="text-primary" size={24} />
                    </Button>
                    <Link to="/profile" className="flex-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary flex-center text-white text-xs font-bold">
                            JD
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Topbar;
