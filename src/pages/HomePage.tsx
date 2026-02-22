import { Button } from '@/components/ui/button';
import HeroSection from '@/components/common/HeroSection';
import ProductGrid from '@/components/common/ProductGrid';
import TechBreakdown from '@/components/common/TechBreakdown';
import BrandCarousel from '@/components/common/BrandCarousel';

export default function HomePage() {
    return (
        <div className="flex flex-col gap-24 pb-24">
            <HeroSection />
            <BrandCarousel />
            <ProductGrid />
            <TechBreakdown />
        </div>
    );
}
