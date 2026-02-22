import ProductCard from "./ProductCard";
import { PRODUCTS } from "@/lib/constants";
import { useAppStore } from "@/store/useAppStore";

interface ProductGridProps {
    title?: string;
    subtitle?: string;
    highlight?: string;
    categoryDefault?: string;
}

export default function ProductGrid({
    title = "PRODUCTOS DESTACADOS",
    subtitle = "Sube el",
    highlight = "Nivel",
    categoryDefault = "TODOS"
}: ProductGridProps) {
    const { searchQuery } = useAppStore();

    const filteredProducts = PRODUCTS.filter(p => {
        const matchesCategory = categoryDefault === 'TODOS' || p.category === categoryDefault;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <section className="container space-y-12" id="productos">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                <div className="space-y-2">
                    <h2 className="text-primary font-bold tracking-widest text-sm uppercase">{title}</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-black uppercase">
                        {subtitle} <span className="text-gradient">{highlight}</span>
                    </h3>
                </div>
                <div className="flex gap-4 border-b border-white/10 pb-2 overflow-x-auto w-full md:w-auto">
                    {['TODOS', 'MUJER', 'NINOS', 'RUNNING', 'LIFESTYLE'].map((cat) => (
                        <button
                            key={cat}
                            className={cat === categoryDefault ? "text-primary font-bold" : "text-muted-foreground hover:text-white transition-colors"}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="py-20 text-center space-y-4">
                    <p className="text-muted-foreground text-xl">No se encontraron productos que coincidan con tu búsqueda.</p>
                    <button
                        onClick={() => useAppStore.getState().setSearchQuery('')}
                        className="text-primary font-bold hover:underline"
                    >
                        Limpiar búsqueda
                    </button>
                </div>
            )}
        </section>
    );
}
