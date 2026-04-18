import { ImagePlus, PlusSquare } from "lucide-react";

const CreatePost = () => {
    return (
        <div className="common-container">
            <div className="max-w-5xl w-full flex flex-col gap-9">
                <div className="flex flex-col gap-2 w-full">
                    <div className="flex items-center gap-3">
                        <PlusSquare size={32} className="text-primary" />
                        <h2 className="h3-bold md:h2-bold text-white">Create a Prompt Post</h2>
                    </div>
                    <p className="text-zinc-500 small-medium md:base-regular mt-2">
                        Share your AI masterpieces and help others discover great prompts.
                    </p>
                </div>

                <form className="flex flex-col gap-7 w-full mt-4 max-w-2xl bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800">
                    <div className="flex flex-col gap-2">
                        <label className="text-white small-medium">Caption / Title</label>
                        <input 
                            type="text" 
                            className="h-12 bg-zinc-950 border border-zinc-800 placeholder:text-zinc-600 text-white rounded-xl px-4 focus:ring-1 focus:ring-primary outline-none transition-all"
                            placeholder="Enter a catchy title for your artwork"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-white small-medium">AI Prompt (The Magic Sauce)</label>
                        <textarea 
                            className="h-32 bg-zinc-950 border border-zinc-800 placeholder:text-zinc-600 text-white rounded-xl p-4 focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                            placeholder="Paste your exact prompt here..."
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-white small-medium">Model Used</label>
                        <select className="h-12 bg-zinc-950 border border-zinc-800 text-white rounded-xl px-4 focus:ring-1 focus:ring-primary outline-none transition-all cursor-pointer appearance-none">
                            <option value="midjourney-v6">Midjourney v6</option>
                            <option value="dalle-3">DALL-E 3</option>
                            <option value="stable-diffusion">Stable Diffusion XL</option>
                            <option value="leonardo-ai">Leonardo.ai</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-white small-medium">Upload Masterpiece</label>
                        <div className="flex-center flex-col h-64 bg-zinc-950 border-2 border-dashed border-zinc-800 rounded-2xl cursor-pointer hover:border-primary/50 transition-all group">
                            <ImagePlus size={48} className="text-zinc-700 group-hover:text-primary transition-colors" />
                            <p className="text-zinc-500 small-regular mt-4 group-hover:text-zinc-300">Drag and drop or click to upload</p>
                            <p className="text-zinc-600 tiny-medium">SVG, PNG, JPG (max 800x400px)</p>
                        </div>
                    </div>

                    <div className="flex gap-4 justify-end mt-4">
                        <button type="button" className="text-zinc-400 small-medium px-6 py-2 rounded-xl hover:text-white transition-colors">
                            Cancel
                        </button>
                        <button type="submit" className="shad-button_primary px-8 py-3 rounded-xl font-bold hover:scale-[1.02] transition-transform">
                            Share Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreatePost;
