import { Trash2, X, Plus, Minus, Send } from "lucide-react";
import { useAppStore } from "@/store/useAppStore";
import { Button } from "@/components/ui/button";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

interface CartProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Cart({ isOpen, onClose }: CartProps) {
    const { cart, removeFromCart, updateQuantity, clearCart } = useAppStore();

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleCheckout = () => {
        const link = generateWhatsAppLink(cart, total);
        window.open(link, "_blank");
    };

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

            {/* Cart Panel */}
            <aside
                className={cn(
                    "fixed right-0 top-0 h-full w-full max-w-md bg-zinc-950/90 backdrop-blur-xl border-l border-white/10 z-[999] transition-transform duration-500 ease-in-out flex flex-col shadow-2xl",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                {/* Header */}
                <div className="p-6 border-b border-white/10 flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-display font-black uppercase italic tracking-tighter">Mi Carrito</h2>
                        <p className="text-xs text-muted-foreground uppercase tracking-widest">{cart.length} productos añadidos</p>
                    </div>
                    <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full hover:bg-white/10">
                        <X className="w-6 h-6" />
                    </Button>
                </div>

                {/* Items List */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
                    {cart.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                                <Minus className="w-8 h-8 text-muted-foreground" />
                            </div>
                            <p className="text-muted-foreground font-medium">Tu carrito está vacío</p>
                            <Button onClick={onClose} variant="outline" className="rounded-full border-primary/50 text-primary hover:bg-primary/10">
                                Seguir Comprando
                            </Button>
                        </div>
                    ) : (
                        cart.map((item) => (
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
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-muted-foreground hover:text-red-500 transition-colors"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center border border-white/10 rounded-full bg-white/5 px-2 py-1">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="p-1 hover:text-primary transition-colors disabled:opacity-30"
                                                disabled={item.quantity <= 1}
                                            >
                                                <Minus className="w-3 h-3" />
                                            </button>
                                            <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="p-1 hover:text-primary transition-colors"
                                            >
                                                <Plus className="w-3 h-3" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer */}
                {cart.length > 0 && (
                    <div className="p-6 border-t border-white/10 bg-black/40 space-y-4">
                        <div className="flex justify-between items-center px-2">
                            <span className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Subtotal</span>
                            <span className="text-2xl font-black italic">${total.toFixed(2)}</span>
                        </div>
                        <Button
                            onClick={handleCheckout}
                            className="w-full py-7 rounded-2xl bg-primary hover:bg-primary/90 text-white font-black text-lg uppercase italic tracking-tighter group transition-all"
                        >
                            PEDIR POR WHATSAPP
                            <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Button>
                        <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest">
                            * Serás redirigido a WhatsApp para confirmar la compra
                        </p>
                    </div>
                )}
            </aside>
        </>
    );
}
