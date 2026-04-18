import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";

const Home = () => {
    // Placeholder posts data
    const posts = [
        {
            id: 1,
            author: "Alex Rivera",
            username: "@arivera",
            location: "San Francisco, CA",
            caption: "Golden hour in the city! 🌇 #sf #goldenhour #photography",
            imageUrl: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2000&auto=format&fit=crop",
            likes: "1.2k",
            comments: "42",
        },
        {
            id: 2,
            author: "Sarah Chen",
            username: "@schen_photos",
            location: "Tokyo, Japan",
            caption: "Exploring the neon streets of Shibuya. 🏮✨ #tokyo #travel #explore",
            imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2000&auto=format&fit=crop",
            likes: "856",
            comments: "28",
        }
    ];

    return (
        <div className="flex flex-1">
            <div className="common-container">
                <div className="max-w-screen-sm flex-col flex-1 gap-9 w-full">
                    <h2 className="h3-bold md:h2-bold text-left w-full text-white">Home Feed</h2>
                    
                    <ul className="flex flex-col flex-1 gap-9 w-full">
                        {posts.map((post) => (
                            <li key={post.id} className="bg-zinc-900 rounded-3xl border border-zinc-800 p-5 lg:p-7 w-full">
                                <div className="flex-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-primary flex-center text-white font-bold text-lg">
                                            {post.author[0]}
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="base-medium lg:body-bold text-white">
                                                {post.author}
                                            </p>
                                            <div className="flex-center gap-2 text-zinc-500">
                                                <p className="subtle-semibold lg:small-regular">
                                                    {post.location}
                                                </p>
                                                <span>•</span>
                                                <p className="subtle-semibold lg:small-regular">
                                                    2 hours ago
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="text-zinc-500 hover:text-white transition-colors">
                                        <MoreHorizontal size={24} />
                                    </button>
                                </div>

                                <div className="small-medium lg:base-medium py-5">
                                    <p className="text-white">
                                        {post.caption}
                                    </p>
                                </div>

                                <img
                                    src={post.imageUrl}
                                    alt="post"
                                    className="h-64 xs:h-[400px] lg:h-[450px] w-full rounded-[24px] object-cover mb-5"
                                />

                                <div className="flex-between z-20">
                                    <div className="flex gap-4">
                                        <div className="flex-center gap-2 cursor-pointer group">
                                            <Heart size={20} className="text-primary group-hover:scale-110 transition-transform" />
                                            <p className="small-medium lg:base-medium text-zinc-400 group-hover:text-white">
                                                {post.likes}
                                            </p>
                                        </div>
                                        <div className="flex-center gap-2 cursor-pointer group">
                                            <MessageCircle size={20} className="text-primary group-hover:scale-110 transition-transform" />
                                            <p className="small-medium lg:base-medium text-zinc-400 group-hover:text-white">
                                                {post.comments}
                                            </p>
                                        </div>
                                    </div>
                                    <button className="text-primary hover:text-white transition-colors">
                                        <Share2 size={20} />
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="hidden xl:flex flex-col w-72 2xl:w-465 px-6 py-10 overflow-scroll custom-scrollbar border-l border-zinc-900 bg-zinc-950">
                <h3 className="h3-bold text-white">Top Creators</h3>
                <div className="flex flex-col gap-6 mt-10">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="flex-between w-full">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary flex-center text-white text-xs font-bold">
                                    C{i}
                                </div>
                                <div className="flex flex-col">
                                    <p className="base-medium text-white">Creator {i}</p>
                                    <p className="small-regular text-zinc-500">@creator{i}</p>
                                </div>
                            </div>
                            <button className="text-primary text-small-semibold hover:text-white transition-colors">
                                Follow
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
