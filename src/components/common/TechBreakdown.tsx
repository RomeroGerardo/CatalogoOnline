import { Shield, Zap, Target } from "lucide-react";

const FEATURES = [
    {
        icon: <Zap className="w-8 h-8 text-primary" />,
        title: "TRACCIÓN",
        description: "Suela TPU spike-less con tacos X-Traction para un contacto máximo y agarre superior en cualquier superficie."
    },
    {
        icon: <Shield className="w-8 h-8 text-secondary" />,
        title: "ESTABILIDAD",
        description: "Sistema 360WRAP PLUS BOA® para un ajuste personalizado y control sin precedentes en cada movimiento."
    },
    {
        icon: <Target className="w-8 h-8 text-accent" />,
        title: "CONFORT",
        description: "Amortiguación Boost de última generación para un retorno de energía supremo y comodidad duradera."
    }
];

export default function TechBreakdown() {
    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden">
            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full" />
                        <img
                            src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=800"
                            alt="Tech Breakdown"
                            className="relative z-10 w-full h-auto drop-shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
                        />
                        {/* Etiquetas técnicas */}
                        <div className="absolute top-[10%] right-0 glass-morphism p-4 rounded-lg animate-bounce duration-[3000ms]">
                            <p className="text-[10px] font-bold text-primary tracking-tighter text-center uppercase">Máxima<br />Respuesta</p>
                        </div>
                        <div className="absolute bottom-[20%] left-0 glass-morphism p-4 rounded-lg animate-pulse">
                            <p className="text-[10px] font-bold text-secondary tracking-tighter text-center uppercase">Agarre<br />Superior</p>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-sm font-bold tracking-[0.3em] text-primary">INGENIERÍA SUPERIOR</h2>
                            <h3 className="text-5xl font-display font-black leading-tight uppercase">
                                TECNOLOGÍA EN <br />
                                <span className="text-gradient">CADA FIBRA</span>
                            </h3>
                        </div>

                        <div className="grid gap-8">
                            {FEATURES.map((feature, i) => (
                                <div key={i} className="flex gap-6 group">
                                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                                        {feature.icon}
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-xl font-bold font-display italic uppercase tracking-wider">{feature.title}</h4>
                                        <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
