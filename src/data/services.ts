export type ServiceCategory = "Consultas" | "Especialidades" | "Procedimientos";

export type ServiceIcon =
	| "Stethoscope"
	| "HeartPulse"
	| "Brain"
	| "Bone"
	| "Eye"
	| "Baby"
	| "Syringe"
	| "Activity"
	| "Microscope"
	| "Pill";

export type ServiceItem = {
	id: string;
	icon: ServiceIcon;
	name: string;
	desc: string;
	details: string;
};

export const serviceCategories: ServiceCategory[] = [
	"Consultas",
	"Especialidades",
	"Procedimientos",
];

export const servicesByCategory: Record<ServiceCategory, ServiceItem[]> = {
	Consultas: [
		{
			id: "medicina-interna",
			icon: "Activity",
			name: "Medicina interna",
			desc: "Acompañamiento médico integral con enfoque en salud metabólica y diabetes.",
			details:
				"Analizamos tu salud como un todo con diagnóstico preciso y prevención de complicaciones futuras. Integramos holter de ritmo, holter de presión, espirometrías, glucometría y planes personalizados según tu evolución clínica.",
		},
		{
			id: "chequeo-ocupacional",
			icon: "Stethoscope",
			name: "Chequeos médicos ocupacionales",
			desc: "Evaluaciones preventivas para entornos laborales seguros y productivos.",
			details:
				"Valoramos a tus colaboradores con espirómetros, autorrefractómetro y audiómetro, cumpliendo normativa MINSA. Detectamos riesgos a tiempo para reducir ausentismo y mejorar el rendimiento del equipo.",
		},
		{
			id: "cardiologia",
			icon: "HeartPulse",
			name: "Cardiología",
			desc: "Detección temprana y manejo avanzado de tu salud cardiovascular.",
			details:
				"Combinamos precisión clínica y tecnología para controlar arritmias, hipertensión y patologías coronarias. Realizamos electrocardiogramas, ecocardiogramas y mapeo de presión y ritmo para un diagnóstico completo.",
		},
		{
			id: "ortopedia-traumatologia",
			icon: "Bone",
			name: "Ortopedia y traumatología",
			desc: "Recuperación funcional de huesos y articulaciones con enfoque integral.",
			details:
				"Tratamos lesiones deportivas, pie diabético con sistema VAC y desgaste articular con infiltraciones y regeneración celular. Ofrecemos opciones quirúrgicas y no quirúrgicas para una recuperación rápida y efectiva.",
		},
		{
			id: "fisioterapia",
			icon: "Activity",
			name: "Fisioterapia",
			desc: "Rehabilitación personalizada para recuperar movilidad y aliviar dolor.",
			details:
				"Aplicamos terapia manual y tecnología de rehabilitación para acelerar tu recuperación y prevenir recaídas. Diseñamos planes de fortalecimiento para mejorar tu rendimiento físico y volver a tus actividades con seguridad.",
		},
	],
	Especialidades: [
		{
			id: "pediatria-neonatologia",
			icon: "Baby",
			name: "Pediatría y neonatología",
			desc: "Atención integral desde el recién nacido hasta cada etapa de la infancia.",
			details:
				"Brindamos cuidados neonatales de alta complejidad y vigilancia experta desde el primer día de vida. En pediatría acompañamos crecimiento y prevención con un trato cálido, profesional y cercano a cada familia.",
		},
		{
			id: "obesidad-metabolismo",
			icon: "Activity",
			name: "Obesidad y Metabolismo",
			desc: "Manejo médico para regular metabolismo, peso y riesgos cardiometabólicos.",
			details:
				"Diseñamos estrategias clínicas para pérdida de peso sostenible, control hormonal y mejor energía diaria. Tratamos resistencia a la insulina y síndrome metabólico con seguimiento integral a largo plazo.",
		},
		{
			id: "ginecologia-obstetricia",
			icon: "HeartPulse",
			name: "Ginecología y obstetricia",
			desc: "Cuidado integral de la salud femenina y reproductiva en cada etapa.",
			details:
				"Ofrecemos chequeos preventivos y tratamientos especializados en un entorno seguro y de confianza. Acompañamos tu bienestar con atención cercana y apoyo clínico continuo.",
		},
		{
			id: "dermatologia",
			icon: "Eye",
			name: "Dermatología",
			desc: "Diagnóstico y tratamiento avanzado para piel, cabello y uñas.",
			details:
				"Atendemos desde lesiones comunes hasta patologías complejas con enfoque médico de precisión. Complementamos con planes personalizados de cuidado dérmico y rejuvenecimiento con resultados reales.",
		},
		{
			id: "psicologia",
			icon: "Brain",
			name: "Psicología",
			desc: "Acompañamiento profesional para fortalecer tu bienestar emocional.",
			details:
				"Brindamos un espacio seguro para gestionar estrés, sanar vínculos y superar bloqueos emocionales. Nuestro enfoque empático favorece autoconocimiento, claridad y paz mental en tu día a día.",
		},
		{
			id: "urologia",
			icon: "Stethoscope",
			name: "Urología",
			desc: "Atención especializada del sistema urinario y salud íntima.",
			details:
				"Tratamos cálculos, infecciones urinarias y patologías prostáticas con diagnóstico preciso y enfoque de mínima invasión. Priorizamos una recuperación cómoda y una mejor calidad de vida funcional.",
		},
		{
			id: "cirugia",
			icon: "Syringe",
			name: "Cirugía",
			desc: "Procedimientos de alta precisión con enfoque en seguridad y recuperación.",
			details:
				"Realizamos cirugías especializadas, como colecistectomía laparoscópica y endoscopias avanzadas, bajo técnicas de mínima invasión. Nuestro objetivo es una recuperación más rápida y con menor riesgo de complicaciones.",
		},
	],
	Procedimientos: [
		{
			id: "ultrasonidos",
			icon: "HeartPulse",
			name: "Ultrasonidos",
			desc: "Estudios no invasivos en tiempo real con alta precisión diagnóstica.",
			details:
				"Utilizamos ondas sonoras de alta frecuencia para evaluar el cuerpo sin dolor ni radiación. Realizamos ecocardiogramas con cardiólogo certificado, Doppler arterial y venoso, ultrasonidos musculoesqueléticos y ginecológicos.",
		},
		{
			id: "cirugias-ortopedicas",
			icon: "Bone",
			name: "Cirugías ortopédicas",
			desc: "Soluciones avanzadas para recuperar movilidad y reducir dolor crónico.",
			details:
				"Aplicamos técnicas modernas para lesiones, desgaste articular y secuelas por trauma. Incluimos manejo avanzado del pie diabético con sistema VAC, parches y soporte especializado para úlceras complejas.",
		},
		{
			id: "infiltraciones-articulares",
			icon: "Syringe",
			name: "Infiltraciones articulares",
			desc: "Alivio localizado para dolor e inflamación de articulaciones.",
			details:
				"Aplicamos medicamentos directamente en la articulación para mejorar movilidad y disminuir dolor con mayor rapidez. Es una opción efectiva para cuadros crónicos cuando el manejo oral no es suficiente.",
		},
		{
			id: "holter-ritmo",
			icon: "Activity",
			name: "Holter de ritmo",
			desc: "Monitoreo cardíaco continuo de 24 a 48 horas.",
			details:
				"Permite detectar arritmias y alteraciones que pueden no verse en un electrocardiograma breve. Se evalúa tu corazón durante tu rutina diaria para un diagnóstico más real y completo.",
		},
		{
			id: "holter-presion",
			icon: "Activity",
			name: "Holter de presión",
			desc: "MAPA ambulatorio para conocer tu presión arterial en 24 horas.",
			details:
				"Registra automáticamente tus valores durante el día y la noche fuera del consultorio. Ayuda a confirmar diagnósticos y ajustar tratamientos antihipertensivos con mayor precisión.",
		},
		{
			id: "electrocardiograma",
			icon: "Activity",
			name: "Electrocardiograma",
			desc: "Evaluación rápida y sin dolor de la actividad eléctrica del corazón.",
			details:
				"Es la prueba inicial clave para identificar irregularidades cardíacas en minutos. Permite orientar decisiones clínicas tempranas y seguimiento oportuno ante síntomas cardiovasculares.",
		},
		{
			id: "audiometrias",
			icon: "Microscope",
			name: "Audiometrías",
			desc: "Evaluación auditiva precisa para detección temprana de pérdida de audición.",
			details:
				"Prueba rápida e indolora que mide cómo percibes tonos y volúmenes en distintas frecuencias. Facilita decisiones de tratamiento y seguimiento según tu perfil auditivo.",
		},
		{
			id: "espirometrias",
			icon: "Activity",
			name: "Espirometrías",
			desc: "Medición funcional para conocer el estado real de tus pulmones.",
			details:
				"Este examen no invasivo evalúa cuánto aire inhalas y con qué rapidez lo exhalas. Es clave para detectar alteraciones respiratorias y controlar tu respuesta al tratamiento.",
		},
		{
			id: "optometrias",
			icon: "Eye",
			name: "Optometrías",
			desc: "Evaluación visual integral para proteger tu salud ocular a largo plazo.",
			details:
				"No solo revisa agudeza visual: analiza coordinación y funcionamiento de ambos ojos para detectar problemas antes de que afecten tu calidad de vida. Permite correcciones oportunas y seguimiento personalizado.",
		},
	],
};

export const serviceOptions = [
	"Medicina interna",
	"Chequeos médicos ocupacionales",
	"Cardiología",
	"Ortopedia y traumatología",
	"Fisioterapia",
	"Pediatría y neonatología",
	"Obesidad y metabolismo",
	"Ginecología y obstetricia",
	"Dermatología",
	"Psicología",
	"Urología",
	"Cirugía",
	"Ultrasonidos",
	"Cirugías ortopédicas",
	"Infiltraciones articulares",
	"Holter de ritmo",
	"Holter de presión",
	"Electrocardiograma",
	"Audiometrías",
	"Espirometrías",
	"Optometrías",
	"Otro",
];
