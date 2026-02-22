import { Button } from "@/components/ui/button";

interface HeroSectionProps {
    title?: string;
    subtitle?: string;
    tag?: string;
    description?: string;
    image?: string;
    accentText?: string;
    accentTextAlt?: string;
}

export default function HeroSection({
    title = "ALPHA",
    subtitle = "FLY NEXT%",
    tag = "NUEVA COLECCIÓN 2026",
    description = "Diseñadas para romper barreras. La ingeniería más avanzada al servicio de tu velocidad. Siente el retorno de energía indomable en cada zancada.",
    image = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1200",
    accentText = "RENDIMIENTO",
    accentTextAlt = "VELOCIDAD"
}: HeroSectionProps) {
    return (
        <section className="relative min-h-[80vh] flex items-center overflow-hidden py-20">
            <div className="hero-glow" />

            <div className="container grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <div className="space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-primary font-bold tracking-widest text-sm uppercase">{tag}</h2>
                        <h1 className="text-6xl md:text-8xl font-display font-black leading-none uppercase">
                            {title} <br />
                            <span className="text-gradient">{subtitle}</span>
                        </h1>
                    </div>

                    <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
                        {description}
                    </p>

                    <div className="flex gap-4">
                        <Button className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white font-bold h-12">
                            COMPRAR AHORA
                        </Button>
                        <Button variant="outline" className="rounded-full px-8 border-primary text-primary hover:bg-primary/10 h-12">
                            VER DETALLES
                        </Button>
                    </div>
                </div>

                <div className="relative flex justify-center items-center">
                    <div className="absolute w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
                    <div className="relative group perspective-1000">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-auto drop-shadow-[0_35px_35px_rgba(255,0,85,0.3)] transform rotate-[-15deg] group-hover:rotate-0 transition-all duration-700 ease-out scale-110"
                        />
                        <div className="absolute -bottom-10 left-0 space-y-2 translate-x-[-10%] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <span className="block text-4xl font-black text-white/10 uppercase select-none">{accentText}</span>
                            <span className="block text-4xl font-black text-white/10 uppercase select-none translate-x-10">{accentTextAlt}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
