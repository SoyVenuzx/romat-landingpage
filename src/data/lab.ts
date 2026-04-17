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
  origin: 'clinica' | 'laboratorio' | 'combo';
  summary: string;
  includes: string[];
  validity: string;
};

export const labServices: LabService[] = [
  {
    id: 'quimica-sanguinea',
    icon: 'Droplets',
    name: 'Química Sanguínea',
    desc: 'Perfil Hepático, Perfil Renal, Perfil Lipídico, Perfil Glucémico, entre otros.',
    turnaround: 'Mismo día',
  },
  {
    id: 'pruebas-especiales',
    icon: 'Dna',
    name: 'Pruebas Especiales',
    desc: 'ANA, Anti-DNA, Anticuerpo Lupico, Anti-Smith, Anti-RO/SSA, Anti-LA/SSB, entre otros.',
    turnaround: 'Mismo día',
  },
  {
    id: 'pruebas-rutina',
    icon: 'TestTube2',
    name: 'Pruebas de Rutina',
    desc: 'EGO, EGH, BHC, Glucosa, Ácido Úrico, Trigliceridos, Colesterol, entre otros.',
    turnaround: 'Mismo día',
  },
  {
    id: 'perfil-hormonal',
    icon: 'FlaskConical',
    name: 'Perfil Hormonal',
    desc: 'Perfil Tiroideo, PSA, PSA Total, PSA Libre, TSH, Cortisol, entre otros.',
    turnaround: 'Mismo día',
  },
];

export const labPromotions: LabPromotion[] = [
  {
    id: 'paquete-chequeo-general',
    title: 'Paquete Chequeo General',
    badge: 'Paquete permanente',
    origin: 'combo',
    summary: 'Ideal para chequeo preventivo y control general de la salud.',
    includes: [
      'Colesterol',
      'Triglicéridos',
      'Biometría Hemática Completa',
      'Creatinina',
      'Ácido úrico',
      'Examen general de orina',
      'Glucosa',
    ],
    validity: 'Disponible de forma permanente.',
  },
  // {
  //   id: 'chequeo-medico-preventivo',
  //   title: 'Chequeo Médico Preventivo',
  //   badge: 'Paquete vigente',
  //   summary:
  //     'Incluye los análisis del Chequeo General más estudios complementarios para un control preventivo más completo.',
  //   includes: [
  //     'Colesterol',
  //     'Triglicéridos',
  //     'Biometría Hemática Completa',
  //     'Creatinina',
  //     'Ácido úrico',
  //     'Examen general de orina',
  //     'Glucosa',
  //     'Electrocardiograma',
  //     'Ultrasonido abdominal superior',
  //   ],
  //   validity: 'Disponible según agenda de laboratorio y estudios complementarios.',
  // },
  {
    id: 'perfil-hepatico-abril',
    title: 'Perfil Hepático',
    badge: 'Solo abril',
    origin: 'laboratorio',
    summary: '10 análisis completos en un solo examen.',
    includes: ['10 análisis completos en un solo examen.'],
    validity: 'Disponible únicamente durante el mes de abril.',
  },
];
