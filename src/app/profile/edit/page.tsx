'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { useAuthStore } from '@/store/authStore';
import { Save, X, User as UserIcon, AlignLeft } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function EditProfilePage() {
  const router = useRouter();
  const { user, updateProfile } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      username: user?.username || '',
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      bio: user?.bio || '',
      avatar: user?.avatar || '',
    },
  });

  const onSubmit = async (data: any) => {
    // Simular retraso
    await new Promise((resolve) => setTimeout(resolve, 800));
    updateProfile(data);
    router.push('/profile');
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      
      <div className="pt-28 pb-8 container mx-auto px-4 flex justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-lg"
        >
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl shadow-2xl">
            <h1 className="text-2xl font-bold mb-6 text-center">Editar Perfil</h1>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Username Field */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 ml-1">
                  Nombre de Usuario
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <UserIcon className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    {...register('username', { 
                      required: 'El usuario es obligatorio',
                      minLength: { value: 3, message: 'Mínimo 3 caracteres' }
                    })}
                    type="text"
                    className={cn(
                      "block w-full pl-10 pr-3 py-3 bg-white/5 border rounded-2xl focus:ring-2 transition-all outline-none",
                      errors.username 
                        ? "border-red-500/50 focus:ring-red-500/20" 
                        : "border-white/10 focus:border-accent/50 focus:ring-accent/20"
                    )}
                  />
                </div>
                {errors.username && (
                  <p className="mt-1 text-xs text-red-400 ml-1">{errors.username.message as string}</p>
                )}
              </div>

              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 ml-1">
                    Nombre
                  </label>
                  <input
                    {...register('firstName')}
                    type="text"
                    className="block w-full px-3 py-3 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:border-accent/50 focus:ring-accent/20 transition-all outline-none"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 ml-1">
                    Apellido
                  </label>
                  <input
                    {...register('lastName')}
                    type="text"
                    className="block w-full px-3 py-3 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:border-accent/50 focus:ring-accent/20 transition-all outline-none"
                    placeholder="Tu apellido"
                  />
                </div>
              </div>

              {/* Avatar URL Field */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 ml-1">
                  URL de Imagen de Perfil
                </label>
                <input
                  {...register('avatar')}
                  type="url"
                  className="block w-full px-3 py-3 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:border-accent/50 focus:ring-accent/20 transition-all outline-none"
                  placeholder="https://ejemplo.com/imagen.jpg"
                />
              </div>

              {/* Bio Field */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 ml-1">
                  Biografía
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <AlignLeft className="h-5 w-5 text-gray-500" />
                  </div>
                  <textarea
                    {...register('bio', { 
                      maxLength: { value: 150, message: 'Máximo 150 caracteres' }
                    })}
                    rows={4}
                    className={cn(
                      "block w-full pl-10 pr-3 py-3 bg-white/5 border rounded-2xl focus:ring-2 transition-all outline-none resize-none",
                      errors.bio 
                        ? "border-red-500/50 focus:ring-red-500/20" 
                        : "border-white/10 focus:border-accent/50 focus:ring-accent/20"
                    )}
                    placeholder="Cuéntanos un poco sobre ti..."
                  />
                </div>
                {errors.bio && (
                  <p className="mt-1 text-xs text-red-400 ml-1">{errors.bio.message as string}</p>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="w-1/3 py-3 bg-white/5 hover:bg-white/10 text-gray-300 font-medium rounded-2xl transition-all flex items-center justify-center gap-2"
                >
                  <X className="w-4 h-4" />
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-2/3 py-3 bg-accent hover:bg-accent/90 text-white font-medium rounded-2xl shadow-lg shadow-accent/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Save className="w-4 h-4" />
                      Guardar Cambios
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
