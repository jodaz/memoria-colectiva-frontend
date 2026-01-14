import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  username: string;
  firstName?: string;
  lastName?: string;
  bio?: string;
  avatar?: string;
  postsCount?: number;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (username: string) => void;
  signup: (username: string) => void;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (username) => {
        // Mock login
        set({ 
          user: { 
            username, 
            firstName: "Usuario",
            lastName: "Demo",
            bio: "Resistiendo y documentando.", 
            avatar: `https://ui-avatars.com/api/?name=${username}&background=random`,
            postsCount: 12
          }, 
          isAuthenticated: true 
        });
      },
      signup: (username) => {
        // Mock signup
        set({ 
          user: { 
            username, 
            firstName: "",
            lastName: "",
            bio: "Nuevo usuario.", 
            avatar: `https://ui-avatars.com/api/?name=${username}&background=random`,
            postsCount: 0
          }, 
          isAuthenticated: true 
        });
      },
      logout: () => {
        set({ user: null, isAuthenticated: false });
      },
      updateProfile: (data) => {
        set((state) => ({
          user: state.user ? { ...state.user, ...data } : null,
        }));
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);
