import { createClient } from '@/lib/supabase/server';

export async function getTestimonials() {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from('testimonials')
    .select('*, profiles(username, first_name, last_name)')
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getTestimonialById(id: string) {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from('testimonials')
    .select('*, profiles(username, first_name, last_name)')
    .eq('id', id)
    .single();

  if (error) {
    if (error.code === 'PGRST116') { // Postgres error for no rows returned from .single()
      return null;
    }
    throw new Error(error.message);
  }

  return data;
}
