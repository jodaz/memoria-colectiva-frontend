import { type Testimonio } from '@/data/testimonios';

export function mapDatabaseToTestimonial(item: any): Testimonio {
  return {
    id: item.id,
    title: item.title || 'Sin Título',
    author: item.profiles 
      ? `${item.profiles.first_name || ''} ${item.profiles.last_name || ''}`.trim() || item.profiles.username 
      : 'Usuario Anónimo',
    date: new Date(item.created_at).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }),
    location: item.location || 'Venezuela',
    description: item.encrypted_content,
    image: item.files?.[0] || null,
    assets: item.files || [],
    userId: item.user_id
  };
}
