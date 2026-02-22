import { MessageCircle } from 'lucide-react';

export default function Footer() {
    const whatsappNumber = "3573402221";
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;

    return (
        <footer className="border-t border-white/10 bg-black/50 backdrop-blur-xl py-12 px-6">
            <div className="max-container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col items-center md:items-start space-y-2">
                        <h2 className="text-2xl font-display font-bold text-white tracking-widest uppercase">
                            Romero<span className="text-primary">Labs</span>
                        </h2>
                        <p className="text-white/50 text-sm font-sans">
                            © {new Date().getFullYear()} RomeroLabs. Todos los derechos reservados.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end space-y-4">
                        <p className="text-white/70 font-sans text-sm uppercase tracking-wider">
                            ¿Hablamos por WhatsApp?
                        </p>
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex items-center gap-3 bg-[#25D366] hover:bg-[#22c35e] text-white px-6 py-3 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:scale-105 active:scale-95"
                        >
                            <MessageCircle className="w-6 h-6 fill-current" />
                            <span className="font-bold tracking-wide uppercase text-sm">
                                Chatear ahora
                            </span>
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 text-center">
                    <p className="text-white/30 text-xs font-sans uppercase tracking-[0.2em]">
                        Diseño Premium de Catálogo Digital
                    </p>
                </div>
            </div>
        </footer>
    );
}
