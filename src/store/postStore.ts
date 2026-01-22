import { create } from 'zustand';
import { type Testimonio } from '@/data/testimonios';

interface PostState {
  testimonios: Testimonio[];
  isLoading: boolean;
  error: string | null;
  fetchTestimonios: () => Promise<void>;
  addTestimonio: (postData: any) => Promise<Testimonio | null>;
  getTestimonio: (id: string | number) => Testimonio | undefined;
}

export const usePostStore = create<PostState>()(
  (set, get) => ({
    testimonios: [],
    isLoading: false,
    error: null,

    fetchTestimonios: async () => {
      set({ isLoading: true, error: null });
      try {
        const response = await fetch('/api/testimonials');
        if (!response.ok) throw new Error('Failed to fetch testimonials');
        const data = await response.json();
        
        // Map API data to Testimonio interface
        const mappedData: Testimonio[] = data.map((item: any) => ({
          id: item.id,
          title: item.title || 'Sin Título',
          author: item.profiles ? `${item.profiles.first_name} ${item.profiles.last_name}`.trim() || item.profiles.username : 'Usuario Anónimo',
          date: new Date(item.created_at).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }),
          location: item.location || 'Venezuela',
          description: item.encrypted_content,
          image: item.files?.[0] || null,
          assets: item.files || [],
          userId: item.user_id
        }));

        set({ testimonios: mappedData, isLoading: false });
      } catch (error: any) {
        set({ error: error.message, isLoading: false });
      }
    },

    addTestimonio: async (postData) => {
      set({ isLoading: true, error: null });
      try {
        const response = await fetch('/api/testimonials', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(postData),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to create testimonial');
        }

        const item = await response.json();
        
        // Map new item
        const newTestimonio: Testimonio = {
          id: item.id,
          title: item.title || 'Sin Título',
          author: 'Tú', // Since the user just created it
          date: new Date(item.created_at).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }),
          location: item.location || 'Venezuela',
          description: item.encrypted_content,
          image: item.files?.[0] || null,
          assets: item.files || [],
          userId: item.user_id
        };

        set((state) => ({
          testimonios: [newTestimonio, ...state.testimonios],
          isLoading: false
        }));

        return newTestimonio;
      } catch (error: any) {
        set({ error: error.message, isLoading: false });
        return null;
      }
    },

    getTestimonio: (id) => {
      return get().testimonios.find((t) => String(t.id) === String(id));
    },
  })
);
