import HeroSection from '@/components/common/HeroSection';
import ProductGrid from '@/components/common/ProductGrid';
import BrandCarousel from '@/components/common/BrandCarousel';

export default function KidsPage() {
    return (
        <div className="flex flex-col gap-24 pb-24">
            <HeroSection
                title="ENERGÍA"
                subtitle="SIN FIN"
                tag="COLECCIÓN NIÑOS 2026"
                description="Equipamiento diseñado para la aventura constante. Comodidad y durabilidad para que nada detenga su ritmo de juego."
                image="https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&q=80&w=1200"
                accentText="JUEGO"
                accentTextAlt="AVENTURA"
            />
            <BrandCarousel />
            <ProductGrid
                title="INDUMENTARIA INFANTIL"
                subtitle="Diversión con"
                highlight="Estilo"
                categoryDefault="NINOS"
            />
        </div>
    );
}
