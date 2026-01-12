import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TESTIMONIOS, type Testimonio } from '@/data/testimonios';

interface PostState {
  testimonios: Testimonio[];
  addTestimonio: (testimonio: Testimonio) => void;
  getTestimonio: (id: number) => Testimonio | undefined;
}

export const usePostStore = create<PostState>()(
  persist(
    (set, get) => ({
      testimonios: TESTIMONIOS,
      addTestimonio: (testimonio) => {
        set((state) => ({
          testimonios: [testimonio, ...state.testimonios],
        }));
      },
      getTestimonio: (id) => {
        return get().testimonios.find((t) => t.id === id);
      },
    }),
    {
      name: 'post-storage',
    }
  )
);
