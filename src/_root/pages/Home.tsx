import { Heart, MessageCircle, Share2, MoreHorizontal, Copy, Zap } from "lucide-react";

const Home = () => {
    // AI Prompt specific placeholder data
    const posts = [
        {
            id: 1,
            author: "CyberArtist",
            model: "Midjourney v6",
            aspectRatio: "16:9",
            caption: "Futuristic neon city with flying cars and holographic advertisements. Cinematic lighting, ultra-detailed. 🌃✨",
            imageUrl: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2000&auto=format&fit=crop",
            likes: "2.4k",
            comments: "85",
            isPremium: true
        },
        {
            id: 2,
            author: "ArtGenie",
            model: "DALL-E 3",
            aspectRatio: "1:1",
            caption: "A mystical forest with glowing mushrooms and a tiny cottage. Ethereal atmosphere, studio Ghibli style. 🍄🏡",
            imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000&auto=format&fit=crop",
            likes: "1.8k",
            comments: "54",
            isPremium: false
        }
    ];

    return (
        <div className="flex flex-1">
            <div className="common-container">
                <div className="max-w-screen-sm flex flex-col flex-1 gap-9 w-full">
                    <div className="flex justify-between items-center w-full">
                        <h2 className="h3-bold md:h2-bold text-left text-white">Featured Prompts</h2>
                        <div className="flex gap-2">
                            <button className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-lg text-white text-sm font-medium hover:bg-zinc-800 transition-colors">
                                Trending
                            </button>
                            <button className="bg-primary px-4 py-2 rounded-lg text-white text-sm font-medium hover:bg-primary/90 transition-colors">
                                Newest
                            </button>
                        </div>
                    </div>
                    
                    <ul className="flex flex-col flex-1 gap-9 w-full">
                        {posts.map((post) => (
                            <li key={post.id} className="bg-zinc-900 rounded-3xl border border-zinc-800 p-5 lg:p-7 w-full group transition-all hover:border-primary/30">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="min-w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold text-lg">
                                            {post.author[0]}
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="flex items-center gap-2">
                                                <p className="base-medium lg:body-bold text-white">
                                                    {post.author}
                                                </p>
                                                {post.isPremium && (
                                                    <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded-full border border-primary/20 flex items-center gap-1">
                                                        <Zap size={10} /> PRO
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-2 text-zinc-500">
                                                <p className="text-xs lg:text-sm font-normal">
                                                    {post.model}
                                                </p>
                                                <span>•</span>
                                                <p className="text-xs lg:text-sm font-normal">
                                                    AR {post.aspectRatio}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="text-zinc-500 hover:text-white transition-colors">
                                        <MoreHorizontal size={24} />
                                    </button>
                                </div>

                                <div className="text-sm lg:text-base font-normal py-5">
                                    <div className="bg-zinc-950/50 rounded-xl p-4 border border-zinc-800/50 relative overflow-hidden group/prompt">
                                        <p className="text-zinc-300 italic pr-8 leading-relaxed">
                                            "{post.caption}"
                                        </p>
                                        <button className="absolute right-3 top-3 text-zinc-500 hover:text-primary transition-colors cursor-pointer">
                                            <Copy size={18} />
                                        </button>
                                    </div>
                                </div>

                                <div className="relative overflow-hidden rounded-[24px] mb-5">
                                    <img
                                        src={post.imageUrl}
                                        alt="ai-art"
                                        className="h-64 xs:h-[400px] lg:h-[450px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                        <button className="bg-primary text-white w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
                                            <Zap size={18} /> Run this Prompt
                                        </button>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center z-20">
                                    <div className="flex gap-4">
                                        <div className="flex items-center justify-center gap-2 cursor-pointer group/stat">
                                            <Heart size={20} className="text-zinc-500 group-hover/stat:text-primary transition-colors" />
                                            <p className="text-sm lg:text-base font-medium text-zinc-400 group-hover/stat:text-white">
                                                {post.likes}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-center gap-2 cursor-pointer group/stat">
                                            <MessageCircle size={20} className="text-zinc-500 group-hover/stat:text-primary transition-colors" />
                                            <p className="text-sm lg:text-base font-medium text-zinc-400 group-hover/stat:text-white">
                                                {post.comments}
                                            </p>
                                        </div>
                                    </div>
                                    <button className="text-zinc-500 hover:text-primary transition-colors">
                                        <Share2 size={20} />
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="hidden xl:flex flex-col w-72 2xl:w-465 px-6 py-10 overflow-scroll custom-scrollbar border-l border-zinc-900 bg-zinc-950">
                <h3 className="h3-bold text-white">Top Prompt Engineers</h3>
                <div className="flex flex-col gap-6 mt-10">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="flex justify-between items-center w-full p-2 rounded-xl hover:bg-zinc-900 transition-colors group cursor-pointer">
                            <div className="flex items-center gap-3">
                                <div className="min-w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-xs font-bold">
                                    A{i}
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-base font-medium text-white group-hover:text-primary transition-colors">AI Explorer {i}</p>
                                    <p className="text-sm font-normal text-zinc-500">2.4k sales</p>
                                </div>
                            </div>
                            <button className="bg-primary/10 text-primary px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-primary hover:text-white transition-all">
                                Follow
                            </button>
                        </div>
                    ))}
                </div>
                
                <div className="mt-12 bg-primary/10 rounded-2xl p-6 border border-primary/20">
                    <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                        <Zap size={18} className="text-primary" /> Get Premium
                    </h4>
                    <p className="text-sm font-normal text-zinc-400 mb-4 leading-relaxed">
                        Unlock unlimited prompt generation and private masterpieces.
                    </p>
                    <button className="bg-primary text-white w-full py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">
                        Upgrade Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
