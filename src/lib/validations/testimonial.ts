import { z } from 'zod';

export const testimonialCreateSchema = z.object({
  title: z.string().optional().or(z.literal('')),
  content: z.string().min(10, 'El testimonio debe tener al menos 10 caracteres'),
  // For API usage, sometimes it's called encrypted_content
  encrypted_content: z.string().optional(),
  location: z.string().min(1, 'La ubicación es obligatoria'),
  files: z.array(z.string()).optional(),
});

export type TestimonialCreateInput = z.infer<typeof testimonialCreateSchema>;
