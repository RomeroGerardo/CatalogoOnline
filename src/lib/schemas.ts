import { z } from 'zod';

export const contactSchema = z.object({
    email: z.string().email('Email inválido'),
    message: z.string().min(10, 'El mensaje es muy corto (mínimo 10 caracteres)'),
});

export type ContactFormData = z.infer<typeof contactSchema>;
