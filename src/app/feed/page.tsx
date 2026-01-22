import FeedContent from './FeedContent';
import { type Testimonio } from '@/data/testimonios';
import { getTestimonials } from '@/lib/services/testimonials';
import { mapDatabaseToTestimonial } from '@/lib/utils/mappers';

export const dynamic = 'force-dynamic';

export default async function FeedPage() {
  // Fetch testimonials using shared service
  let testimonios: Testimonio[] = [];

  try {
    const data = await getTestimonials();
    testimonios = data.map(mapDatabaseToTestimonial);
  } catch (error) {
    console.error('Error fetching testimonials:', error);
  }

  return <FeedContent initialTestimonios={testimonios} />;
}
