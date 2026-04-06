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
      desc: 'Diagnostico y tratamiento de enfermedades comunes con atencion integral.',
      details:
        'Evaluacion clinica completa, control de padecimientos cronicos y seguimiento personalizado para pacientes de todas las edades.',
    },
    {
      id: 'cardiologia',
      icon: 'HeartPulse',
      name: 'Cardiologia',
      desc: 'Evaluacion y seguimiento de la salud cardiovascular.',
      details:
        'Valoracion cardiovascular inicial, interpretacion de estudios y plan preventivo adaptado al perfil de riesgo del paciente.',
    },
    {
      id: 'pediatria',
      icon: 'Baby',
      name: 'Pediatria',
      desc: 'Cuidado especializado para la salud de los mas pequenos.',
      details:
        'Monitoreo de crecimiento y desarrollo, orientacion a padres y consulta integral pediatrica con enfoque preventivo.',
    },
    {
      id: 'medicina-interna',
      icon: 'Activity',
      name: 'Medicina Interna',
      desc: 'Atencion de patologias complejas del adulto.',
      details:
        'Manejo de enfermedades cronicas, coordinacion interdisciplinaria y abordaje clinico completo para pacientes adultos.',
    },
  ],
  Especialidades: [
    {
      id: 'neurologia',
      icon: 'Brain',
      name: 'Neurologia',
      desc: 'Diagnostico de trastornos del sistema nervioso.',
      details:
        'Atencion especializada para cefalea, vertigo, trastornos del sueno y seguimiento neurologico con criterios clinicos actualizados.',
    },
    {
      id: 'ortopedia',
      icon: 'Bone',
      name: 'Ortopedia',
      desc: 'Tratamiento de lesiones musculoesqueleticas.',
      details:
        'Valoracion de dolor articular y lesiones oseas, con enfoque en rehabilitacion funcional y recuperacion segura.',
    },
    {
      id: 'oftalmologia',
      icon: 'Eye',
      name: 'Oftalmologia',
      desc: 'Cuidado completo de la salud visual.',
      details:
        'Deteccion oportuna de alteraciones visuales, revision oftalmologica y orientacion en salud ocular preventiva.',
    },
    {
      id: 'dermatologia',
      icon: 'Pill',
      name: 'Dermatologia',
      desc: 'Tratamientos para piel, cabello y unas.',
      details:
        'Atencion dermatologica para diagnostico clinico, control de brotes y tratamiento de condiciones cutaneas frecuentes.',
    },
  ],
  Procedimientos: [
    {
      id: 'vacunacion',
      icon: 'Syringe',
      name: 'Vacunacion',
      desc: 'Esquemas completos para todas las edades.',
      details:
        'Aplicacion segura de vacunas con seguimiento del esquema y recomendaciones para reforzar prevencion en familia.',
    },
    {
      id: 'estudios-clinicos',
      icon: 'Microscope',
      name: 'Estudios Clinicos',
      desc: 'Analisis de laboratorio con resultados rapidos.',
      details:
        'Paneles de laboratorio para chequeos preventivos y control de enfermedades, con tiempos de entrega oportunos.',
    },
    {
      id: 'electrocardiograma',
      icon: 'Activity',
      name: 'Electrocardiograma',
      desc: 'Monitoreo de actividad cardiaca preciso.',
      details:
        'Registro y lectura clinica para apoyar diagnostico cardiovascular y seguimiento de sintomas cardiacos.',
    },
    {
      id: 'ultrasonido',
      icon: 'HeartPulse',
      name: 'Ultrasonido',
      desc: 'Imagenes diagnosticas de alta calidad.',
      details:
        'Estudios por imagen no invasivos para evaluacion de tejidos y organos, con interpretacion profesional.',
    },
  ],
};

export const serviceOptions = [
  'Consulta general',
  'Cardiologia',
  'Pediatria',
  'Laboratorio',
  'Otro',
];
