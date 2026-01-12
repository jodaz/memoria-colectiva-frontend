import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  username: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (username: string) => void;
  signup: (username: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (username) => {
        // Mock login
        set({ user: { username }, isAuthenticated: true });
      },
      signup: (username) => {
        // Mock signup
        set({ user: { username }, isAuthenticated: true });
      },
      logout: () => {
        set({ user: null, isAuthenticated: false });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);
