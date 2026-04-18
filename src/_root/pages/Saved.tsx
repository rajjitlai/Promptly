import { Bookmark } from "lucide-react";

const Saved = () => {
    // Placeholder saved prompts data
    const savedPrompts = [
        { id: 1, img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop", author: "ArtGenie", model: "MJ v6" },
        { id: 2, img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop", author: "CyberArtist", model: "DALL-E 3" },
        { id: 3, img: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1000&auto=format&fit=crop", author: "PromptKing", model: "MJ v5.2" },
    ];

    return (
        <div className="common-container">
            <div className="saved-container max-w-5xl w-full flex flex-col gap-9">
                <div className="flex flex-col gap-2 w-full">
                    <div className="flex items-center gap-3">
                        <Bookmark size={32} className="text-primary" />
                        <h2 className="h3-bold md:h2-bold text-white">Saved Prompts</h2>
                    </div>
                    <p className="text-zinc-500 small-medium md:base-regular mt-2">
                        Your personal collection of high-quality AI prompts and artistic inspiration.
                    </p>
                </div>

                {savedPrompts.length === 0 ? (
                    <div className="flex-center flex-col h-[400px] w-full bg-zinc-900 border border-dashed border-zinc-800 rounded-3xl gap-4">
                        <Bookmark size={48} className="text-zinc-700" />
                        <p className="text-zinc-500 base-medium">No prompts saved yet.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                        {savedPrompts.map((prompt) => (
                            <div key={prompt.id} className="relative group overflow-hidden rounded-3xl aspect-square cursor-pointer border border-zinc-900 bg-zinc-900">
                                <img 
                                    src={prompt.img} 
                                    alt="art" 
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-6 h-6 rounded-full bg-primary flex-center text-white text-[10px] font-bold">
                                            {prompt.author[0]}
                                        </div>
                                        <p className="small-medium text-white">{prompt.author}</p>
                                    </div>
                                    <div className="flex-between">
                                        <p className="subtle-semibold text-zinc-400">{prompt.model}</p>
                                        <button className="bg-primary/20 text-primary p-2 rounded-lg hover:bg-primary hover:text-white transition-all">
                                            <Bookmark size={16} fill="currentColor" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Saved;
