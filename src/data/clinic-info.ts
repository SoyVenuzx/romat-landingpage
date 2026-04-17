export const clinicSchedule = {
  weekdays: 'Lunes a Viernes: 7:00 AM - 5:00 PM',
  weekend: 'Sábado: 7:00 AM - 12:00 PM',
};

export const clinicBusinessHours = {
  timezone: 'America/Managua',
  weekday: {
    openMinutes: 7 * 60,
    closeMinutes: 17 * 60,
  },
  weekend: {
    openMinutes: 7 * 60,
    closeMinutes: 12 * 60,
  },
};

export const homeConsultation = {
  title: 'Consultas a domicilio',
  description:
    'Atención médica profesional en casa con comodidad, privacidad y seguridad, ideal para adultos mayores, niños y personas con movilidad reducida, evitando traslados, largas esperas y exposición innecesaria.',
  coverage:
    'Incluye evaluación médica general y del entorno, curaciones (incluyendo sistema VAC), inyecciones, nebulizaciones, toma de muestras y chequeos preventivos, sujeto a disponibilidad.',
};

export const paymentMethods = [
  'Transferencia bancaria',
  'Terminal POS (tarjeta)',
  'Pago en efectivo',
];

export const clinicTrustPillars = [
  {
    id: 'horarios',
    title: 'Horarios de atención',
    description: 'Disponibilidad diferenciada entre semana y fines de semana para mayor flexibilidad.',
  },
  {
    id: 'domicilio',
    title: 'Consultas a domicilio',
    description: 'Servicio agendado para valoraciones médicas en casa con enfoque humano y seguro.',
  },
  {
    id: 'pagos',
    title: 'Métodos de pago',
    description: 'Alternativas cómodas y seguras para completar tu atención en clínica o laboratorio.',
  },
];
