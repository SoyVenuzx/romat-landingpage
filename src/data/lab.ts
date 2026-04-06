export type LabIcon = 'Droplets' | 'Dna' | 'TestTube2' | 'FlaskConical';

export type LabService = {
  id: string;
  icon: LabIcon;
  name: string;
  desc: string;
  turnaround: string;
};

export type LabPromotion = {
  id: string;
  title: string;
  badge: string;
  summary: string;
  includes: string[];
  validity: string;
};

export const labServices: LabService[] = [
  {
    id: 'quimica-sanguinea',
    icon: 'Droplets',
    name: 'Quimica Sanguinea',
    desc: 'Perfil completo con resultados en 24 horas.',
    turnaround: '24 horas',
  },
  {
    id: 'pruebas-geneticas',
    icon: 'Dna',
    name: 'Pruebas Geneticas',
    desc: 'Analisis geneticos de ultima generacion.',
    turnaround: '72 horas',
  },
  {
    id: 'examen-orina',
    icon: 'TestTube2',
    name: 'Examen General de Orina',
    desc: 'Deteccion temprana de padecimientos renales.',
    turnaround: 'Mismo dia',
  },
  {
    id: 'perfil-hormonal',
    icon: 'FlaskConical',
    name: 'Perfil Hormonal',
    desc: 'Evaluacion completa del sistema endocrino.',
    turnaround: '24 horas',
  },
];

export const labPromotions: LabPromotion[] = [
  {
    id: 'promo-checkup',
    title: 'Check-up Integral Familiar',
    badge: 'Promocion activa',
    summary: 'Ideal para control preventivo de adultos y adolescentes.',
    includes: [
      'Biometria hematica',
      'Quimica sanguinea de 6 elementos',
      'Examen general de orina',
      'Interpretacion medica de resultados',
    ],
    validity: 'Vigencia sujeta a disponibilidad mensual.',
  },
  {
    id: 'promo-cardiometabolico',
    title: 'Perfil Cardio-Metabolico',
    badge: 'Nuevo paquete',
    summary: 'Apoyo para control de riesgo cardiovascular y metabolico.',
    includes: [
      'Perfil de lipidos',
      'Glucosa en ayuno',
      'Hemoglobina glucosilada',
      'Consulta de seguimiento',
    ],
    validity: 'Vigencia sujeta a disponibilidad mensual.',
  },
];
