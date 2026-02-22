import { Search, ShoppingBag, Heart, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/store/useAppStore";

export default function Navbar() {
    const { favorites, cart, setIsCartOpen, setIsFavoritesOpen, setIsSearchOpen } = useAppStore();
    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-xl">
            <div className="container flex h-20 items-center justify-between">
                <div className="flex items-center gap-8">
                    <a href="/" className="flex items-center space-x-2">
                        <span className="font-display font-black text-2xl italic tracking-tighter uppercase">
                            Romero<span className="text-primary italic">Labs</span>
                        </span>
                    </a>

                    <nav className="hidden md:flex items-center gap-6 text-sm font-bold tracking-widest uppercase">
                        <Link to="/" className="text-white hover:text-primary transition-colors">HOMBRE</Link>
                        <Link to="/mujer" className="text-white/60 hover:text-white transition-colors">MUJER</Link>
                        <Link to="/ninos" className="text-white/60 hover:text-white transition-colors">NIÑOS</Link>
                        <Link to="/contacto" className="text-white/60 hover:text-white transition-colors">CONTACTO</Link>
                    </nav>
                </div>

                <div className="flex items-center gap-2">
                    <Button
                        variant="ghost"
                        onClick={() => setIsSearchOpen(true)}
                        className="text-white/70 hover:text-white hover:bg-white/5 p-2"
                    >
                        <Search className="w-5 h-5" />
                    </Button>
                    <Button
                        variant="ghost"
                        onClick={() => setIsFavoritesOpen(true)}
                        className="text-white/70 hover:text-white hover:bg-white/5 p-2 relative"
                    >
                        <Heart className="w-5 h-5" />
                        {favorites.length > 0 && (
                            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full animate-pulse" />
                        )}
                    </Button>
                    <Button
                        variant="ghost"
                        onClick={() => setIsCartOpen(true)}
                        className="text-white/70 hover:text-white hover:bg-white/5 p-2 relative"
                    >
                        <ShoppingBag className="w-5 h-5" />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                                {cartCount}
                            </span>
                        )}
                    </Button>
                    <Button variant="ghost" className="md:hidden text-white/70 hover:text-white hover:bg-white/5 p-2">
                        <Menu className="w-5 h-5" />
                    </Button>
                </div>
            </div>
        </header>
    );
}
