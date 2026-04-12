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
      id: 'consulta-general',
      icon: 'Stethoscope',
      name: 'Medicina General',
      desc: 'Diagnóstico y tratamiento de enfermedades comunes con atención integral.',
      details:
        'Evaluación clínica completa, control de padecimientos crónicos y seguimiento personalizado para pacientes de todas las edades.',
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
    {
      id: 'medicina-interna',
      icon: 'Activity',
      name: 'Medicina Interna',
      desc: 'Atención de patologías complejas del adulto.',
      details:
        'Manejo de enfermedades crónicas, coordinación interdisciplinaria y abordaje clínico completo para pacientes adultos.',
    },
  ],
  Especialidades: [
    {
      id: 'neurologia',
      icon: 'Brain',
      name: 'Neurología',
      desc: 'Diagnóstico de trastornos del sistema nervioso.',
      details:
        'Atención especializada para cefalea, vértigo, trastornos del sueño y seguimiento neurológico con criterios clínicos actualizados.',
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
      id: 'oftalmologia',
      icon: 'Eye',
      name: 'Oftalmología',
      desc: 'Cuidado completo de la salud visual.',
      details:
        'Detección oportuna de alteraciones visuales, revisión oftalmológica y orientación en salud ocular preventiva.',
    },
    {
      id: 'dermatologia',
      icon: 'Pill',
      name: 'Dermatología',
      desc: 'Tratamientos para piel, cabello y uñas.',
      details:
        'Atención dermatológica para diagnóstico clínico, control de brotes y tratamiento de condiciones cutáneas frecuentes.',
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
  'Medicina interna',
  'Medicina general',
  'Cardiología',
  'Pediatría',
  'Ortopedia',
  'Laboratorio',
  'Otro',
];
