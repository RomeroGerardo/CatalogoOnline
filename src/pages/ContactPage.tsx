import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { contactSchema, type ContactFormData } from '@/lib/schemas';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function ContactPage() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        try {
            // Simulación de envío para modo DEMO
            await new Promise((resolve) => setTimeout(resolve, 1500));
            console.log('DEMO - Mensaje para romero.gerardo.ds@gmail.com:', data);

            toast.success('¡Mensaje enviado (MODO DEMO)!', {
                description: 'En la versión final, este mensaje llegaría a romero.gerardo.ds@gmail.com',
            });
            reset();
        } catch (error) {
            toast.error('Hubo un error al simular el envío.');
        }
    };

    return (
        <div className="container flex justify-center items-center py-20 min-h-[70vh]">
            <Card className="w-full max-w-lg bg-card/50 backdrop-blur-xl border-white/10 shadow-2xl">
                <CardHeader className="space-y-4 text-center">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase w-fit mx-auto">
                        MODO DEMO
                    </div>
                    <CardTitle className="text-3xl font-display font-black uppercase tracking-tight">
                        Envíanos un <span className="text-gradient">Mensaje</span>
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                        Completa el formulario para probar el sistema de contacto.
                    </CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm font-bold tracking-wider uppercase text-white/70">
                                Correo Electrónico
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="tu@email.com"
                                {...register('email')}
                                className={`bg-white/5 border-white/10 h-12 focus:border-primary transition-all ${errors.email ? 'border-destructive' : ''}`}
                            />
                            {errors.email && (
                                <p className="text-xs text-destructive font-bold uppercase tracking-tighter">{errors.email.message}</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message" className="text-sm font-bold tracking-wider uppercase text-white/70">
                                Tu Mensaje
                            </Label>
                            <Textarea
                                id="message"
                                placeholder="¿En qué podemos ayudarte?"
                                {...register('message')}
                                className={`bg-white/5 border-white/10 min-h-[150px] focus:border-primary transition-all resize-none ${errors.message ? 'border-destructive' : ''}`}
                            />
                            {errors.message && (
                                <p className="text-xs text-destructive font-bold uppercase tracking-tighter">{errors.message.message}</p>
                            )}
                        </div>
                    </CardContent>
                    <CardFooter className="pb-8">
                        <Button
                            type="submit"
                            className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-black tracking-widest uppercase rounded-full transition-all hover:scale-[1.02] active:scale-95"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'PROCESANDO...' : 'ENVIAR MENSAJE'}
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}
