
import React from 'react';
import PostContent from './PostContent';
import { getTestimonialById } from '@/lib/services/testimonials';
import { mapDatabaseToTestimonial } from '@/lib/utils/mappers';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';


export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const data = await getTestimonialById(id);
  const post = data ? mapDatabaseToTestimonial(data) : null;

  if (!post) {
    return {
      title: 'Post no encontrado',
    };
  }

  return {
    title: `${post.title} | Memoria Colectiva`,
    description: post.description.substring(0, 160),
    openGraph: {
      images: post.image ? [post.image] : [],
    },
  };
}

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = await getTestimonialById(id);
  const post = data ? mapDatabaseToTestimonial(data) : null;


  return <PostContent post={post} />;
}
