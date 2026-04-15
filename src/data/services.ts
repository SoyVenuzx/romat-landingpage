export type ServiceCategory = 'Consultas' | 'Especialidades' | 'Procedimientos';

export type ServiceIcon =
  | 'Stethoscope'
  | 'HeartPulse'
  | 'Brain'
  | 'Bone'
  | 'Eye'
  | 'Baby'
  | 'Syringe'
  | 'Activity'
  | 'Microscope'
  | 'Pill';

export type ServiceItem = {
  id: string;
  icon: ServiceIcon;
  name: string;
  desc: string;
  details: string;
};

export const serviceCategories: ServiceCategory[] = [
  'Consultas',
  'Especialidades',
  'Procedimientos',
];

export const servicesByCategory: Record<ServiceCategory, ServiceItem[]> = {
  Consultas: [
    {
      id: 'medicina-interna',
      icon: 'Activity',
      name: 'Medicina Interna & Diabetología',
      desc:
        'Atención integral del adulto con enfoque en diabetes y salud metabólica.',
      details:
        'Valoración clínica completa, control glucémico, ajuste de tratamientos y seguimiento continuo para hipertensión, diabetes y otras condiciones crónicas.',
    },
    {
      id: 'chequeo-ocupacional',
      icon: 'Stethoscope',
      name: 'Chequeo ocupacional',
      desc: 'Evaluaciones médicas para ingreso, control periódico y aptitud laboral.',
      details:
        'Realizamos chequeos para empresas y trabajadores con enfoque preventivo, documentación clínica y recomendaciones de salud ocupacional.',
    },
    {
      id: 'cardiologia',
      icon: 'HeartPulse',
      name: 'Cardiología',
      desc: 'Evaluación y seguimiento de la salud cardiovascular.',
      details:
        'Valoración cardiovascular inicial, interpretación de estudios y plan preventivo adaptado al perfil de riesgo del paciente.',
    },
    {
      id: 'pediatria',
      icon: 'Baby',
      name: 'Pediatría',
      desc: 'Cuidado especializado para la salud de los más pequeños.',
      details:
        'Monitoreo de crecimiento y desarrollo, orientación a padres y consulta integral pediátrica con enfoque preventivo.',
    },
  ],
  Especialidades: [
    {
      id: 'audiometria',
      icon: 'Activity',
      name: 'Audiometría',
      desc: 'Evaluación de la audición para detección temprana de alteraciones auditivas.',
      details:
        'Pruebas auditivas con interpretación profesional para apoyar diagnóstico, seguimiento y recomendaciones de cuidado de la salud auditiva.',
    },
    {
      id: 'ortopedia',
      icon: 'Bone',
      name: 'Ortopedia',
      desc: 'Tratamiento de lesiones musculoesqueléticas.',
      details:
        'Valoración de dolor articular y lesiones óseas, con enfoque en rehabilitación funcional y recuperación segura.',
    },
    {
      id: 'psicologia',
      icon: 'Brain',
      name: 'Psicología',
      desc: 'Acompañamiento profesional para bienestar emocional y salud mental.',
      details:
        'Atención psicológica para adolescentes y adultos con estrategias terapéuticas orientadas a manejo emocional, adaptación y calidad de vida.',
    },
    {
      id: 'obesidad-metabolismo',
      icon: 'Activity',
      name: 'Obesidad y Metabolismo',
      desc:
        'Evaluación y manejo integral de sobrepeso, obesidad y trastornos metabólicos.',
      details:
        'Diseñamos un plan personalizado de tratamiento, hábitos y seguimiento clínico para mejorar la salud metabólica y reducir riesgos asociados.',
    },
  ],
  Procedimientos: [
    {
      id: 'vacunacion',
      icon: 'Syringe',
      name: 'Vacunación',
      desc: 'Esquemas completos para todas las edades.',
      details:
        'Aplicación segura de vacunas con seguimiento del esquema y recomendaciones para reforzar prevención en familia.',
    },
    {
      id: 'estudios-clinicos',
      icon: 'Microscope',
      name: 'Estudios Clínicos',
      desc: 'Análisis de laboratorio con resultados rápidos.',
      details:
        'Paneles de laboratorio para chequeos preventivos y control de enfermedades, con tiempos de entrega oportunos.',
    },
    {
      id: 'electrocardiograma',
      icon: 'Activity',
      name: 'Electrocardiograma',
      desc: 'Monitoreo de actividad cardíaca preciso.',
      details:
        'Registro y lectura clínica para apoyar diagnóstico cardiovascular y seguimiento de síntomas cardíacos.',
    },
    {
      id: 'ultrasonido',
      icon: 'HeartPulse',
      name: 'Ultrasonido',
      desc: 'Imágenes diagnósticas de alta calidad.',
      details:
        'Estudios por imagen no invasivos para evaluación de tejidos y órganos, con interpretación profesional.',
    },
  ],
};

export const serviceOptions = [
  'Medicina interna y diabetología',
  'Chequeo ocupacional',
  'Cardiología',
  'Pediatría',
  'Audiometría',
  'Obesidad y metabolismo',
  'Psicología',
  'Ortopedia',
  'Laboratorio',
  'Otro',
];
