import { Search, X } from "lucide-react";
import { useAppStore } from "@/store/useAppStore";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SearchOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
    const { searchQuery, setSearchQuery } = useAppStore();

    return (
        <div
            className={cn(
                "fixed inset-0 bg-black/95 backdrop-blur-md z-[1000] transition-all duration-500 flex flex-col items-center justify-start pt-32 px-6",
                isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
            )}
        >
            <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="absolute top-8 right-8 rounded-full text-white/50 hover:text-white hover:bg-white/10"
            >
                <X className="w-8 h-8" />
            </Button>

            <div className="w-full max-w-3xl space-y-8 text-center">
                <h2 className="text-5xl md:text-7xl font-display font-black uppercase italic tracking-tighter text-white">
                    ¿Qué estás <span className="text-primary">buscando?</span>
                </h2>

                <div className="relative group">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-8 h-8 text-white/30 group-focus-within:text-primary transition-colors" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Buscar por nombre, categoría o marca..."
                        className="w-full bg-white/5 border-b-2 border-white/10 py-8 pl-20 pr-10 text-2xl md:text-3xl font-bold text-white placeholder:text-white/20 focus:outline-none focus:border-primary transition-all"
                        autoFocus={isOpen}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                onClose();
                                const el = document.getElementById('productos');
                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    />
                </div>

                <div className="flex flex-wrap justify-center gap-4 pt-4">
                    <span className="text-xs text-white/30 uppercase tracking-widest font-bold w-full mb-2">Búsquedas sugeridas</span>
                    {['Nike', 'Adidas', 'Running', 'Niños', 'Campera'].map((term) => (
                        <button
                            key={term}
                            onClick={() => setSearchQuery(term)}
                            className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-bold uppercase hover:bg-primary/20 hover:border-primary transition-all"
                        >
                            {term}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
