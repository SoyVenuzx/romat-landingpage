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
      name: 'Chequeos médicos ocupacionales',
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
      id: 'ecocardiograma',
      icon: 'HeartPulse',
      name: 'Ecocardiograma',
      desc: 'Estudio de imagen para evaluar estructura y función del corazón.',
      details:
        'Examen no invasivo que permite valorar cavidades cardíacas, válvulas y movimiento del músculo cardíaco para apoyar diagnóstico y control clínico.',
    },
    {
      id: 'ultrasonido',
      icon: 'HeartPulse',
      name: 'Ultrasonido',
      desc: 'Imágenes diagnósticas de alta calidad.',
      details:
        'Estudios por imagen no invasivos para evaluación de tejidos y órganos, con interpretación profesional.',
    },
    {
      id: 'espirometria',
      icon: 'Activity',
      name: 'Espirometría',
      desc: 'Valoración de la capacidad respiratoria para control y seguimiento.',
      details:
        'Prueba funcional pulmonar para detectar alteraciones respiratorias, evaluar respuesta al tratamiento y seguimiento de pacientes con síntomas respiratorios.',
    },
    {
      id: 'audiometria-ocupacional',
      icon: 'Microscope',
      name: 'Audiometría ocupacional',
      desc:
        'Evaluación auditiva orientada a vigilancia médica en entornos laborales.',
      details:
        'Aplicamos pruebas auditivas para exámenes de ingreso, periódicos y egreso, con enfoque en prevención de riesgos por exposición al ruido.',
    },
    {
      id: 'curaciones',
      icon: 'Syringe',
      name: 'Curaciones y control de heridas',
      desc: 'Atención de heridas con manejo clínico y seguimiento seguro.',
      details:
        'Limpieza, valoración y cuidado de heridas agudas o crónicas, con recomendaciones de autocuidado para favorecer recuperación y prevenir complicaciones.',
    },
    {
      id: 'nebulizacion',
      icon: 'Pill',
      name: 'Nebulización',
      desc: 'Terapia respiratoria para aliviar síntomas de vías respiratorias.',
      details:
        'Aplicación de nebulizaciones bajo supervisión médica para manejo de tos, broncoespasmo e inflamación respiratoria según indicación clínica.',
    },
    {
      id: 'lavado-otico',
      icon: 'Stethoscope',
      name: 'Lavado ótico',
      desc: 'Procedimiento para remover tapón de cerumen y mejorar audición.',
      details:
        'Evaluación previa del conducto auditivo y extracción segura del cerumen para aliviar molestias y recuperar la audición en casos indicados.',
    },
    {
      id: 'control-presion-glicemia',
      icon: 'Activity',
      name: 'Control de presión y glicemia',
      desc: 'Monitoreo rápido para seguimiento de pacientes crónicos.',
      details:
        'Control periódico de signos clave en consulta para detectar variaciones tempranas y ajustar recomendaciones de tratamiento y estilo de vida.',
    },
  ],
};

export const serviceOptions = [
  'Medicina interna y diabetología',
  'Chequeos médicos ocupacionales',
  'Cardiología',
  'Ecocardiograma',
  'Pediatría',
  'Audiometría',
  'Obesidad y metabolismo',
  'Psicología',
  'Ortopedia',
  'Laboratorio',
  'Otro',
];
