import { Trash2, X, Heart } from "lucide-react";
import { useAppStore } from "@/store/useAppStore";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface FavoritesOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function FavoritesOverlay({ isOpen, onClose }: FavoritesOverlayProps) {
    const { favorites, toggleFavorite } = useAppStore();

    const favoriteProducts = PRODUCTS.filter(p => favorites.includes(p.id));

    return (
        <>
            {/* Backdrop */}
            <div
                className={cn(
                    "fixed inset-0 bg-black/60 backdrop-blur-sm z-[998] transition-opacity duration-500",
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
                onClick={onClose}
            />

            {/* Favorites Panel */}
            <aside
                className={cn(
                    "fixed right-0 top-0 h-full w-full max-w-md bg-zinc-950/90 backdrop-blur-xl border-l border-white/10 z-[999] transition-transform duration-500 ease-in-out flex flex-col shadow-2xl",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                {/* Header */}
                <div className="p-6 border-b border-white/10 flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-display font-black uppercase italic tracking-tighter">Favoritos</h2>
                        <p className="text-xs text-muted-foreground uppercase tracking-widest">{favoriteProducts.length} items guardados</p>
                    </div>
                    <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full hover:bg-white/10">
                        <X className="w-6 h-6" />
                    </Button>
                </div>

                {/* Items List */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
                    {favoriteProducts.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                                <Heart className="w-8 h-8 text-muted-foreground" />
                            </div>
                            <p className="text-muted-foreground font-medium">No tienes favoritos aún</p>
                            <Button onClick={onClose} variant="outline" className="rounded-full border-primary/50 text-primary hover:bg-primary/10">
                                Explorar Productos
                            </Button>
                        </div>
                    ) : (
                        favoriteProducts.map((item) => (
                            <div key={item.id} className="flex gap-4 group">
                                <div className="w-20 h-20 rounded-xl overflow-hidden bg-zinc-900 flex-shrink-0 border border-white/5">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="font-bold text-sm uppercase leading-tight">{item.name}</h4>
                                            <p className="text-xs text-primary font-bold tracking-widest uppercase italic mt-1">${item.price.toFixed(2)}</p>
                                        </div>
                                        <button
                                            onClick={() => toggleFavorite(item.id)}
                                            className="text-red-500 hover:text-red-600 transition-colors"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <Button
                                        onClick={() => {
                                            useAppStore.getState().addToCart(item);
                                            onClose();
                                        }}
                                        className="w-full mt-2 h-8 rounded-full bg-primary/20 text-primary hover:bg-primary text-[10px] font-bold uppercase tracking-widest transition-all"
                                    >
                                        Añadir al Carrito
                                    </Button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </aside>
        </>
    );
}
