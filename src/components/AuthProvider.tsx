'use client';

import { useEffect } from 'react';
import { useAuthStore } from '@/store/authStore';
import type { User } from '@/store/authStore';

export default function AuthProvider({ 
  children, 
  initialUser 
}: { 
  children: React.ReactNode;
  initialUser: User | null;
}) {
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    setUser(initialUser);
  }, [initialUser, setUser]);

  return <>{children}</>;
}
