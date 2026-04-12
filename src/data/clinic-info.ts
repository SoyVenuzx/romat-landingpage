export const clinicSchedule = {
  weekdays: 'Lunes a Viernes: 8:00 AM - 8:00 PM',
  weekend: 'Sábado y Domingo: 9:00 AM - 2:00 PM',
};

export const clinicBusinessHours = {
  timezone: 'America/Managua',
  weekday: {
    openMinutes: 8 * 60,
    closeMinutes: 20 * 60,
  },
  weekend: {
    openMinutes: 9 * 60,
    closeMinutes: 14 * 60,
  },
};

export const homeConsultation = {
  title: 'Consultas a domicilio',
  description:
    'Atención médica programada para pacientes con movilidad limitada o seguimiento post-tratamiento.',
  coverage: 'Cobertura local sujeta a disponibilidad.',
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
