
import { Clinic, Testimonial, FAQItem } from './types';

export const CLINICS: Clinic[] = [
  {
    id: '1',
    name: 'Clínica Dental DKV Milenium',
    address: 'C/ Velázquez, 45',
    city: 'Madrid',
    phone: '91 234 56 78',
    imageUrl: 'https://picsum.photos/id/43/600/400',
    specialties: ['General', 'Ortodoncia']
  },
  {
    id: '2',
    name: 'Espacio de Salud DKV',
    address: 'Av. Diagonal, 500',
    city: 'Barcelona',
    phone: '93 456 78 90',
    imageUrl: 'https://picsum.photos/id/50/600/400',
    specialties: ['Implantes', 'Odontopediatría']
  },
  {
    id: '3',
    name: 'Centro Odontológico DKV',
    address: 'Gran Vía, 12',
    city: 'Bilbao',
    phone: '94 456 12 34',
    imageUrl: 'https://picsum.photos/id/55/600/400',
    specialties: ['Estética', 'Periodoncia']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    initials: 'MG',
    name: 'María G.',
    rating: 5,
    text: 'La atención del Agente Exclusivo fue impecable. Me explicó perfectamente las ventajas y coberturas del seguro.'
  },
  {
    id: '2',
    initials: 'CR',
    name: 'Carlos R.',
    rating: 5,
    text: 'Contraté DKV Dentisalud para toda la familia. Los descuentos en tratamientos importantes se notan mucho.'
  },
  {
    id: '3',
    initials: 'LP',
    name: 'Laura P.',
    rating: 4.5,
    text: 'Muy rápido y sin papeleos. Pude ir al dentista al día siguiente gracias a que no tiene carencia.'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: '¿Cómo funciona el seguro dental de DKV?',
    answer: 'El seguro dental DKV funciona mediante el acceso a una amplia red de clínicas concertadas. Solo tienes que elegir la clínica que prefieras, pedir cita y presentar tu tarjeta digital DKV.'
  },
  {
    question: '¿El seguro dental DKV cubre endodoncia?',
    answer: 'Sí, el seguro cubre endodoncias. Aunque no es un tratamiento gratuito, disfrutas de un precio franquiciado muy reducido en comparación con el coste privado habitual.'
  },
  {
    question: '¿Tiene algún periodo de carencia?',
    answer: 'No, el seguro dental DKV Dentisalud no tiene periodos de carencia. Puedes utilizar todos los servicios desde el primer día de contratación.'
  },
  {
    question: '¿Puedo elegir cualquier dentista?',
    answer: 'Sí, siempre que esté dentro del Cuadro Médico de DKV. Dispones de una red nacional con más de 1.500 clínicas para elegir.'
  }
];
