'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { UserPlus, User, Lock, ArrowRight, Mail } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function SignupPage() {
  const router = useRouter();
  const signup = useAuthStore((state) => state.signup);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const password = watch('password');

  const onSubmit = async (data: any) => {
    // Simular retraso
    await new Promise((resolve) => setTimeout(resolve, 1000));
    signup(data.username);
    router.push('/feed');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] p-4 text-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-500/10 blur-[120px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-purple-500/20">
              <UserPlus className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Crear Cuenta
            </h1>
            <p className="text-gray-400 mt-2">Únete a nuestra comunidad hoy</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2 ml-1">
                Usuario
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-500" />
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
                      : "border-white/10 focus:border-purple-500/50 focus:ring-purple-500/20"
                  )}
                  placeholder="tu_usuario"
                />
              </div>
              {errors.username && (
                <p className="mt-1 text-xs text-red-400 ml-1">{errors.username.message as string}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2 ml-1">
                Correo Electrónico
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  {...register('email', { 
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Correo inválido'
                    }
                  })}
                  type="email"
                  className={cn(
                    "block w-full pl-10 pr-3 py-3 bg-white/5 border rounded-2xl focus:ring-2 transition-all outline-none",
                    errors.email 
                      ? "border-red-500/50 focus:ring-red-500/20" 
                      : "border-white/10 focus:border-purple-500/50 focus:ring-purple-500/20"
                  )}
                  placeholder="ejemplo@correo.com (opcional)"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-xs text-red-400 ml-1">{errors.email.message as string}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2 ml-1">
                Contraseña
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  {...register('password', { 
                    required: 'La contraseña es obligatoria',
                    minLength: { value: 6, message: 'Mínimo 6 caracteres' }
                  })}
                  type="password"
                  className={cn(
                    "block w-full pl-10 pr-3 py-3 bg-white/5 border rounded-2xl focus:ring-2 transition-all outline-none",
                    errors.password 
                      ? "border-red-500/50 focus:ring-red-500/20" 
                      : "border-white/10 focus:border-purple-500/50 focus:ring-purple-500/20"
                  )}
                  placeholder="••••••••"
                />
              </div>
              {errors.password && (
                <p className="mt-1 text-xs text-red-400 ml-1">{errors.password.message as string}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2 ml-1">
                Confirmar Contraseña
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  {...register('confirmPassword', { 
                    required: 'Confirmar contraseña es obligatorio',
                    validate: (val: string) => {
                      if (watch('password') !== val) {
                        return 'Las contraseñas no coinciden';
                      }
                    },
                  })}
                  type="password"
                  className={cn(
                    "block w-full pl-10 pr-3 py-3 bg-white/5 border rounded-2xl focus:ring-2 transition-all outline-none",
                    errors.confirmPassword 
                      ? "border-red-500/50 focus:ring-red-500/20" 
                      : "border-white/10 focus:border-purple-500/50 focus:ring-purple-500/20"
                  )}
                  placeholder="••••••••"
                />
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-xs text-red-400 ml-1">{errors.confirmPassword.message as string}</p>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-2xl shadow-lg shadow-purple-500/25 transition-all flex items-center justify-center group disabled:opacity-70"
            >
              {isSubmitting ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Registrarse
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </motion.button>
          </form>

          <div className="mt-8 text-center pt-6 border-t border-white/5">
            <p className="text-gray-400">
              ¿Ya tienes una cuenta?{' '}
              <Link href="/login" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
                Inicia sesión
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
