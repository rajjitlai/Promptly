import { Search, Grid, ListFilter } from "lucide-react";

const Explore = () => {
    // Placeholder art grid data
    const artGrid = [
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop"
    ];

    return (
        <div className="common-container">
            <div className="explore-container max-w-5xl w-full flex flex-col gap-9">
                <div className="flex flex-col gap-2 w-full">
                    <h2 className="h3-bold md:h2-bold text-white">Explore Prompts</h2>
                    <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2 w-full mt-4 focus-within:border-primary transition-all">
                        <Search size={20} className="text-zinc-500" />
                        <input 
                            type="text" 
                            placeholder="Search by keywords, models, or tags..."
                            className="bg-transparent border-none outline-none text-white w-full h-10 placeholder:text-zinc-600"
                        />
                    </div>
                </div>

                <div className="flex-between w-full mt-4">
                    <h3 className="body-bold md:h3-bold text-white">Popular Masterpieces</h3>
                    <div className="flex-center gap-3 bg-zinc-900 rounded-lg px-4 py-2 border border-zinc-800 cursor-pointer hover:bg-zinc-800 transition-colors">
                        <ListFilter size={20} className="text-primary" />
                        <p className="small-medium md:base-medium text-white">Filter</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6 w-full">
                    {artGrid.map((img, i) => (
                        <div key={i} className="relative group overflow-hidden rounded-2xl aspect-square cursor-pointer border border-zinc-900">
                            <img 
                                src={img} 
                                alt={`art-${i}`} 
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex-center p-4">
                                <div className="bg-primary/90 text-white px-4 py-2 rounded-lg text-xs font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                    View Details
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Explore;
