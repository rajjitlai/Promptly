import { Users } from "lucide-react";

const AllUsers = () => {
    // Placeholder users data
    const users = [
        { id: 1, name: "Alex Rivera", username: "@arivera", followers: "12k", sales: "1.2k" },
        { id: 2, name: "Sarah Chen", username: "@schen_photos", followers: "8k", sales: "856" },
        { id: 3, name: "ArtGenie", username: "@artgenie", followers: "15k", sales: "2.4k" },
        { id: 4, name: "CyberArtist", username: "@cyberartist", followers: "20k", sales: "3.1k" },
        { id: 5, name: "PromptKing", username: "@pking", followers: "5k", sales: "420" },
        { id: 6, name: "DesignPro", username: "@designpro", followers: "9k", sales: "932" },
    ];

    return (
        <div className="common-container">
            <div className="user-container max-w-5xl w-full flex flex-col gap-9">
                <div className="flex flex-col gap-2 w-full">
                    <div className="flex items-center gap-3">
                        <Users size={32} className="text-primary" />
                        <h2 className="h3-bold md:h2-bold text-white">All Prompt Engineers</h2>
                    </div>
                    <p className="text-zinc-500 small-medium md:base-regular mt-2">
                        Connect with the world's best AI artists and discover their creative workflows.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {users.map((user) => (
                        <div key={user.id} className="flex flex-col items-center justify-between gap-4 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-primary/30 transition-all cursor-pointer group h-full">
                            <div className="flex flex-col items-center gap-4 w-full">
                                <div className="min-w-20 h-20 rounded-full bg-primary/20 border-2 border-primary/30 flex items-center justify-center text-primary font-bold text-2xl group-hover:scale-105 transition-transform">
                                    {user.name[0]}
                                </div>
                                <div className="flex flex-col items-center gap-1 overflow-hidden w-full">
                                    <p className="text-lg lg:text-xl font-bold text-white text-center truncate w-full">
                                        {user.name}
                                    </p>
                                    <p className="text-sm font-normal text-zinc-500 text-center truncate w-full">
                                        {user.username}
                                    </p>
                                </div>
                            </div>
                            
                            <div className="w-full flex flex-col gap-5 mt-2">
                                <div className="flex items-center justify-around w-full border-t border-zinc-800 pt-5">
                                    <div className="flex flex-col items-center">
                                        <p className="text-sm font-bold text-primary">{user.followers}</p>
                                        <p className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">Followers</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <p className="text-sm font-bold text-primary">{user.sales}</p>
                                        <p className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">Sales</p>
                                    </div>
                                </div>
                                <button className="bg-primary text-white w-full py-2.5 rounded-xl font-bold hover:bg-primary/90 transition-all active:scale-[0.98]">
                                    Follow
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllUsers;
