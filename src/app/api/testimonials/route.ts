import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

import { testimonialCreateSchema } from '@/lib/validations/testimonial'

export async function GET() {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('testimonials')
    .select('*, profiles(username, first_name, last_name)')
    .order('created_at', { ascending: false })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}

export async function POST(request: Request) {
  const supabase = await createClient()
  
  // Get current user session
  const { data: { user }, error: authError } = await supabase.auth.getUser()
  
  if (authError || !user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  
  // Support both 'content' (from frontend) and 'encrypted_content' (expected by schema/DB)
  const validationData = {
    ...body,
    content: body.content || body.encrypted_content
  }

  const validation = testimonialCreateSchema.safeParse(validationData)
  if (!validation.success) {
    return NextResponse.json({ error: validation.error.format() }, { status: 400 })
  }

  const { title, content, files, location } = validation.data

  const { data, error } = await supabase
    .from('testimonials')
    .insert([
      {
        user_id: user.id,
        title,
        encrypted_content: content,
        files: files || [],
        location
      }
    ])
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data, { status: 201 })
}
