import { z } from 'zod';

export const profileUpdateSchema = z.object({
  firstName: z.string().min(1, 'El nombre es obligatorio').optional().or(z.literal('')),
  lastName: z.string().min(1, 'El apellido es obligatorio').optional().or(z.literal('')),
  username: z.string().min(3, 'El usuario debe tener al menos 3 caracteres'),
  phone: z.string().optional().or(z.literal('')),
  bio: z.string().optional().or(z.literal('')),
});

export type ProfileUpdateInput = z.infer<typeof profileUpdateSchema>;
