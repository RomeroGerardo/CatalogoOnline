import ProductCard from "./ProductCard";

const PRODUCTS = [
    {
        id: '1',
        name: 'Alphafly Next% 3',
        category: 'RUNNING',
        price: 285.00,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600',
        brand: 'NIKE'
    },
    {
        id: '2',
        name: 'Top Deportivo Tech',
        category: 'MUJER',
        price: 45.00,
        image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=600',
        brand: 'ADIDAS'
    },
    {
        id: '3',
        name: 'Sudadera Juvenil',
        category: 'NINOS',
        price: 55.00,
        image: 'https://images.unsplash.com/photo-1519457431-75739545d825?auto=format&fit=crop&q=80&w=600',
        brand: 'PUMA'
    },
    {
        id: '4',
        name: 'Leggings Pro High',
        category: 'MUJER',
        price: 65.00,
        image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&q=80&w=600',
        brand: 'NIKE'
    },
    {
        id: '5',
        name: 'Conjunto Training Kids',
        category: 'NINOS',
        price: 85.00,
        image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&q=80&w=600',
        brand: 'NIKE'
    },
    {
        id: '6',
        name: 'Campera Rompeviento',
        category: 'LIFESTYLE',
        price: 120.00,
        image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&q=80&w=600',
        brand: 'THE NORTH FACE'
    }
];

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
    const filteredProducts = categoryDefault === 'TODOS'
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === categoryDefault);

    return (
        <section className="container space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                <div className="space-y-2">
                    <h2 className="text-primary font-bold tracking-widest text-sm uppercase">{title}</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-black uppercase">
                        {subtitle} <span className="text-gradient">{highlight}</span>
                    </h3>
                </div>
                <div className="flex gap-4 border-b border-white/10 pb-2 overflow-x-auto w-full md:w-auto">
                    {['TODOS', 'MUJER', 'NINOS', 'RUNNING', 'LIFESTYLE'].map((cat) => (
                        <button key={cat} className={cat === categoryDefault ? "text-primary font-bold" : "text-muted-foreground hover:text-white transition-colors"}>
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}
