
import { Plan, Testimonial, FAQItem } from './types';

export const PLANS: Plan[] = [
  {
    id: 'classic',
    name: 'DKV Dentisalud Classic',
    price: '8€',
    pricePeriod: '/mes',
    priceLabel: 'Precio Inicial',
    features: [
      { text: 'Hasta 59 tratamientos gratuitos incluidos', isStrong: true },
      { text: 'Limpieza dental anual gratis', isStrong: true },
      { text: 'Acceso a red odontológica DKV' },
    ],
    buttonText: 'Contratar DKV Classic',
    accentColor: 'dkv-lime',
  },
  {
    id: 'elite',
    name: 'DKV Dentisalud Élite',
    price: '15€',
    pricePeriod: '/mes',
    priceLabel: 'Precio Inicial',
    features: [
      { text: 'Todo incluido en plan Classic', isStrong: true },
      { text: 'Seguro dental sin carencia (uso inmediato)', isStrong: true },
      { text: 'Grandes descuentos en implantes y ortodoncia', isStrong: true },
      { text: 'Niños gratis (menores de 14)' },
    ],
    buttonText: 'Contratar DKV Élite',
    isPopular: true,
    accentColor: 'dkv-lime',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    initials: 'MG',
    name: 'MARÍA G.',
    rating: 5,
    text: '“La atención del Agente Exclusivo fue impecable. Me explicó perfectamente las ventajas y coberturas del seguro.”',
  },
  {
    initials: 'CR',
    name: 'CARLOS R.',
    rating: 5,
    text: '“Contraté DKV Dentisalud para toda la familia. Los descuentos en tratamientos importantes se notan mucho.”',
  },
  {
    initials: 'LP',
    name: 'LAURA P.',
    rating: 4.5,
    text: '“Muy rápido y sin papeleos. Pude ir al dentista al día siguiente gracias a que no tiene carencia.”',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: '¿CÓMO FUNCIONA EL SEGURO DENTAL DE DKV?',
    answer: 'El seguro dental DKV funciona mediante el acceso a una amplia red de clínicas concertadas. Solo tienes que elegir la clínica que prefieras, pedir cita y presentar tu tarjeta digital DKV. Tienes acceso a más de 50 tratamientos gratuitos y el resto con importantes descuentos sobre el precio de mercado.',
  },
  {
    question: '¿EL SEGURO DENTAL DKV CUBRE ENDODONCIA?',
    answer: 'Sí, el seguro cubre endodoncias. Aunque no es un tratamiento gratuito, disfrutas de un precio franquiciado muy reducido en comparación con el coste privado habitual, garantizando un ahorro significativo.',
  },
  {
    question: '¿TIENE ALGÚN PERIODO DE CARENCIA?',
    answer: 'No, el seguro dental DKV Dentisalud no tiene periodos de carencia. Puedes utilizar todos los servicios, incluidos los tratamientos gratuitos y con descuento, desde el primer día de contratación.',
  },
  {
    question: '¿PUEDO ELEGIR CUALQUIER DENTISTA?',
    answer: 'Sí, siempre que esté dentro del Cuadro Médico de DKV. Dispones de una red nacional con más de 1.500 clínicas y 2.000 odontólogos para elegir el que más te convenga.',
  },
];
