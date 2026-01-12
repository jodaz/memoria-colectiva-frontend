export interface Testimonio {
  id: number;
  title: string;
  author: string;
  date: string;
  location: string;
  description: string;
  image?: string;
  assets?: string[];
}

export const TESTIMONIOS: Testimonio[] = [
  {
    id: 1,
    title: "La voz que no pudieron callar",
    author: "Elena R.",
    date: "12 de Octubre, 2024",
    location: "Plaza Bolívar, Caracas",
    description: "Recuerdo aquel día en la plaza. Éramos miles pidiendo libertad. Aunque intentaron silenciarnos, nuestra unión fue más fuerte que cualquier cadena. Esta es mi historia de resistencia.",
    image: "https://images.unsplash.com/photo-1577032229162-eaa1025a74c2?q=80&w=800&auto=format&fit=crop",
    assets: ["https://images.unsplash.com/photo-1577032229162-eaa1025a74c2?q=80&w=800&auto=format&fit=crop"]
  },
  {
    id: 2,
    title: "Documentando la verdad",
    author: "Carlos M.",
    date: "15 de Octubre, 2024",
    location: "Altamira, Caracas",
    description: "Como fotógrafo, mi única arma es mi cámara. He capturado momentos que otros quisieran borrar de la historia. Cada imagen es un testimonio de lo que realmente sucedió.",
    assets: ["https://images.unsplash.com/photo-1574607383476-f517f260d30b?q=80&w=800&auto=format&fit=crop"]
  },
  {
    id: 3,
    title: "El eco de las calles",
    author: "Sofía V.",
    date: "18 de Octubre, 2024",
    location: "Valencia, Carabobo",
    description: "No solo marchábamos por nosotros, sino por los que vendrán. El sonido de los cánticos aún resuena en mi memoria como un recordatorio de que la esperanza nunca muere.",
    image: "https://images.unsplash.com/photo-1574607383476-f517f260d30b?q=80&w=800&auto=format&fit=crop",
    assets: ["https://images.unsplash.com/photo-1574607383476-f517f260d30b?q=80&w=800&auto=format&fit=crop"]
  },
  {
    id: 4,
    title: "Justicia para los olvidados",
    author: "Ricardo G.",
    date: "20 de Octubre, 2024",
    location: "Maracaibo, Zulia",
    description: "He pasado años recopilando pruebas de abusos. No descansaremos hasta que se haga justicia. La memoria colectiva es nuestra herramienta más poderosa contra la impunidad.",
    assets: ["https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=800&auto=format&fit=crop"]
  },
  {
    id: 5,
    title: "Nuestra fe inquebrantable",
    author: "María T.",
    date: "22 de Octubre, 2024",
    location: "Barquisimeto, Lara",
    description: "Incluso en los momentos más oscuros, encontramos luz en la solidaridad de nuestros vecinos. Compartir un trozo de pan o una palabra de aliento nos mantuvo vivos.",
    image: "https://images.unsplash.com/photo-1542362567-b034882f9174?q=80&w=800&auto=format&fit=crop",
    assets: ["https://images.unsplash.com/photo-1542362567-b034882f9174?q=80&w=800&auto=format&fit=crop"]
  },
  {
    id: 6,
    title: "El arte como refugio",
    author: "Andrés L.",
    date: "25 de Octubre, 2024",
    location: "Mérida, Mérida",
    description: "Pinté murales clandestinos para expresar lo que las palabras no podían. El arte es una forma de protesta que trasciende el tiempo y las fronteras.",
    assets: ["https://images.unsplash.com/photo-1569336415962-a4bd9f6dfc0f?q=80&w=800&auto=format&fit=crop"]
  },
  {
    id: 7,
    title: "Relatos de una madre",
    author: "Carmen S.",
    date: "28 de Octubre, 2024",
    location: "San Cristóbal, Táchira",
    description: "Busco a mi hijo cada día en las caras de los jóvenes que aún luchan. Mi testimonio es un grito de auxilio y una promesa de no rendirme nunca.",
    image: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=800&auto=format&fit=crop",
    assets: ["https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=800&auto=format&fit=crop"]
  },
  {
    id: 8,
    title: "La educación bajo cerco",
    author: "Javier D.",
    date: "30 de Octubre, 2024",
    location: "UCV, Caracas",
    description: "Enseñar la verdad en las universidades se convirtió en un acto heroico. Mis alumnos son la prueba de que el conocimiento es la base de la libertad.",
    assets: ["https://images.unsplash.com/photo-1577032229162-eaa1025a74c2?q=80&w=800&auto=format&fit=crop"]
  },
  {
    id: 9,
    title: "Crónicas del exilio",
    author: "Patricia O.",
    date: "02 de Noviembre, 2024",
    location: "Exterior (Exilio)",
    description: "Aunque estoy lejos, mi corazón sigue en Venezuela. Escribo para que el mundo no olvide lo que estamos pasando. La distancia no borra la memoria.",
    image: "https://images.unsplash.com/photo-1569336415962-a4bd9f6dfc0f?q=80&w=800&auto=format&fit=crop",
    assets: ["https://images.unsplash.com/photo-1569336415962-a4bd9f6dfc0f?q=80&w=800&auto=format&fit=crop"]
  },
  {
    id: 10,
    title: "Unidos por el cambio",
    author: "Luis K.",
    date: "05 de Noviembre, 2024",
    location: "Puerto Ordaz, Bolívar",
    description: "Organizamos redes de apoyo comunitarias cuando todo lo demás falló. La autogestión y la resiliencia son nuestras mejores defensas.",
    assets: ["https://images.unsplash.com/photo-1542362567-b034882f9174?q=80&w=800&auto=format&fit=crop"]
  }
];
