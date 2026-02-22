import HeroSection from '@/components/common/HeroSection';
import ProductGrid from '@/components/common/ProductGrid';
import BrandCarousel from '@/components/common/BrandCarousel';

export default function WomenPage() {
    return (
        <div className="flex flex-col gap-24 pb-24">
            <HeroSection
                title="ESTILO"
                subtitle="SIN LÍMITES"
                tag="COLECCIÓN MUJER 2026"
                description="Diseños que fusionan elegancia y alto rendimiento. Encuentra la equipación perfecta para superar tus metas con un estilo inconfundible."
                image="https://images.unsplash.com/photo-1571513722275-4b41940f54b8?auto=format&fit=crop&q=80&w=1200"
                accentText="ESTILO"
                accentTextAlt="VANGUARDIA"
            />
            <BrandCarousel />
            <ProductGrid
                title="INDUMENTARIA FEMENINA"
                subtitle="Elige tu"
                highlight="Look"
                categoryDefault="MUJER"
            />
        </div>
    );
}
