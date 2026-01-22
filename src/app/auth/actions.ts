'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { loginSchema, signupSchema, type LoginInput, type SignupInput } from '@/lib/validations/auth';

const DUMMY_DOMAIN = 'libera.internal';

export async function signIn(formData: LoginInput) {
  const supabase = await createClient();
  const shadowEmail = `${formData.username.toLowerCase()}@${DUMMY_DOMAIN}`;

  const { error } = await supabase.auth.signInWithPassword({
    email: shadowEmail,
    password: formData.password,
  });

  if (error) {
    return { error: 'Usuario o contraseña incorrectos.' };
  }

  revalidatePath('/', 'layout');
  redirect('/feed');
}

export async function signUp(formData: SignupInput) {
  const supabase = await createClient();
  const shadowEmail = `${formData.username.toLowerCase()}@${DUMMY_DOMAIN}`;

  const { data, error } = await supabase.auth.signUp({
    email: shadowEmail,
    password: formData.password,
    options: {
      data: {
        username: formData.username,
      },
    },
  });

  if (error) {
    if (error.message.includes('already registered')) {
      return { error: 'Este nombre de usuario ya está en uso.' };
    }
    return { error: error.message };
  }

  revalidatePath('/', 'layout');
  redirect('/feed');
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath('/', 'layout');
  redirect('/login');
}
