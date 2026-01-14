'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { useAuthStore } from '@/store/authStore';
import { Edit, MapPin, Grid, Heart, MessageSquare } from 'lucide-react';
import { TESTIMONIOS } from '@/data/testimonios';

export default function ProfilePage() {
  const router = useRouter();
  const { user, isAuthenticated } = useAuthStore();

  if (!isAuthenticated || !user) {
    if (typeof window !== 'undefined') {
      router.push('/login');
    }
    return null;
  }

  // Mock user's posts (taking the first 3 for demo)
  const userPosts = TESTIMONIOS.slice(0, 3);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      
      <div className="pt-24 pb-8 container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          
          {/* Left Column: User Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/3"
          >
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sticky top-28">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-accent to-blue-600">
                    <img 
                      src={user.avatar} 
                      alt={user.username}
                      className="w-full h-full rounded-full object-cover border-4 border-[#0a0a0a]"
                    />
                  </div>
                </div>
                
                <h1 className="text-2xl font-bold mb-1">
                  {user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : user.username}
                </h1>
                <p className="text-gray-500 text-sm mb-4">@{user.username}</p>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed max-w-xs">
                  {user.bio}
                </p>

                <div className="flex items-center gap-2 mb-8 w-full justify-center">
                  <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-gray-400 border border-white/5">
                    {user.postsCount} Publicaciones
                  </span>
                </div>

                <Link 
                  href="/profile/edit"
                  className="w-full py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-2xl transition-all flex items-center justify-center gap-2 group"
                >
                  <Edit className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Editar Perfil
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Posts Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-2/3"
          >
            <div className="flex items-center gap-2 mb-6">
              <Grid className="w-5 h-5 text-accent" />
              <h2 className="text-xl font-bold">Mis Publicaciones</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {userPosts.map((post) => (
                <Link key={post.id} href={`/post/${post.id}`}>
                  <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group hover:border-white/20 transition-all aspect-square relative">
                    {post.image ? (
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-white/5 to-transparent">
                        <p className="font-medium text-gray-300 line-clamp-4">{post.description}</p>
                      </div>
                    )}
                    
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                      <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2 text-white font-bold">
                          <Heart className="w-6 h-6 fill-white" />
                          124
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            {userPosts.length === 0 && (
              <div className="py-20 text-center border mr-2 border-dashed border-white/10 rounded-3xl">
                <p className="text-gray-500">Aún no has publicado nada.</p>
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </main>
  );
}
