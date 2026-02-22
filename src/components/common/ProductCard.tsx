import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useAppStore } from "@/store/useAppStore";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    image: string;
}

export default function ProductCard({ product }: { product: Product }) {
    const { favorites, toggleFavorite, addToCart } = useAppStore();
    const isFavorite = favorites.includes(product.id);

    const handleToggleFavorite = () => {
        toggleFavorite(product.id);
        if (!isFavorite) {
            toast.success(`${product.name} añadido a favoritos`);
        } else {
            toast.info(`${product.name} eliminado de favoritos`);
        }
    };

    const handleAddToCart = () => {
        addToCart(product);
        toast.success(`${product.name} añadido al carrito`, {
            description: "Puedes ver tu pedido en el ícono del carrito.",
            action: {
                label: "Ver Carrito",
                onClick: () => {
                    useAppStore.getState().setIsCartOpen(true);
                }
            }
        });
    };

    return (
        <Card className="group overflow-hidden border-none bg-card hover:bg-card/80 transition-all duration-500">
            <CardContent className="p-0 relative aspect-square overflow-hidden bg-[#1a1a1a]">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleToggleFavorite}
                    className={cn(
                        "absolute top-4 right-4 rounded-full backdrop-blur-md z-10 transition-all",
                        "md:opacity-0 md:group-hover:opacity-100", // Hidden by default only on desktop
                        isFavorite ? "bg-primary text-white opacity-100" : "bg-black/20 text-white opacity-100"
                    )}
                >
                    <Heart className={cn("w-5 h-5", isFavorite && "fill-current")} />
                </Button>
                <div className={cn(
                    "absolute bottom-0 left-0 w-full p-4 md:p-6 transition-all duration-500 bg-gradient-to-t from-black/80 to-transparent",
                    "md:translate-y-full md:group-hover:translate-y-0", // Slide effect only on desktop
                    "translate-y-0" // Always visible on mobile
                )}>
                    <Button
                        onClick={handleAddToCart}
                        className="w-full rounded-full bg-primary hover:bg-primary/90 text-white font-bold h-10 md:h-12 text-xs md:text-sm"
                    >
                        AÑADIR AL CARRITO
                    </Button>
                </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start p-6 space-y-2">
                <p className="text-xs font-bold text-primary tracking-widest uppercase">{(product as any).category}</p>
                <h3 className="text-xl font-bold font-display uppercase leading-tight">{product.name}</h3>
                <p className="text-2xl font-black text-white">${product.price.toFixed(2)}</p>
            </CardFooter>
        </Card>
    );
}
