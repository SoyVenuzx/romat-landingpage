export type LabIcon = "Droplets" | "Dna" | "TestTube2" | "FlaskConical";

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
	origin: "clinica" | "laboratorio" | "combo";
	summary: string;
	includes: string[];
	validity: string;
};

export const labServices: LabService[] = [
	{
		id: "quimica-sanguinea",
		icon: "Droplets",
		name: "Química Sanguínea",
		desc: "Perfil Hepático, Perfil Renal, Perfil Lipídico, Perfil Glucémico, entre otros.",
		turnaround: "Mismo día",
	},
	{
		id: "pruebas-especiales",
		icon: "Dna",
		name: "Pruebas Especiales",
		desc: "ANA, Anti-DNA, Anticuerpo Lupico, Anti-Smith, Anti-RO/SSA, Anti-LA/SSB, entre otros.",
		turnaround: "Mismo día",
	},
	{
		id: "pruebas-rutina",
		icon: "TestTube2",
		name: "Pruebas de Rutina",
		desc: "EGO, EGH, BHC, Glucosa, Ácido Úrico, Trigliceridos, Colesterol, entre otros.",
		turnaround: "Mismo día",
	},
	{
		id: "perfil-hormonal",
		icon: "FlaskConical",
		name: "Perfil Hormonal",
		desc: "Perfil Tiroideo, PSA, PSA Total, PSA Libre, TSH, Cortisol, entre otros.",
		turnaround: "Mismo día",
	},
];

export const labPromotions: LabPromotion[] = [
	{
		id: "paquete-chequeo-general",
		title: "Paquete Chequeo General",
		badge: "Paquete permanente",
		origin: "combo",
		summary: "Ideal para chequeo preventivo y control general de la salud.",
		includes: [
			"Colesterol",
			"Triglicéridos",
			"Biometría Hemática Completa",
			"Creatinina",
			"Ácido úrico",
			"Examen general de orina",
			"Glucosa",
		],
		validity: "Disponible de forma permanente.",
	},
	{
		id: "chequeo-medico-cardiologico",
		title: "Chequeo médico cardiológico",
		badge: "Chequeo clínico",
		origin: "clinica",
		summary: "Evaluación cardiológica integral para control y prevención.",
		includes: [
			"Ecocardiograma",
			"Electrocardiograma",
			"Consulta con cardiología",
		],
		validity: "Disponible según agenda de clínica.",
	},
	{
		id: "chequeo-medico-adulto-medicina-interna",
		title: "Chequeo médico adulto medicina interna",
		badge: "Combo clínico + laboratorio",
		origin: "combo",
		summary:
			"Control médico completo para evaluación general y metabólica del adulto.",
		includes: [
			"Consulta con especialista",
			"BHC",
			"Glycohemoglobina (HB Glucosilada)",
			"Perfil lipídico",
			"Transaminasa pirúvica (SGPT/ALT)",
			"Ácido úrico",
			"Creatinina en suero",
			"Examen general de orina",
			"Sangre oculta en heces",
			"TSH (Hormona estimulante del tiroides)",
			"Ultrasonido abdominal completo",
			"Electrocardiograma (EKG)",
		],
		validity: "Disponible según evaluación médica y agenda de estudios.",
	},
	{
		id: "chequeo-medico-hipertension",
		title: "Chequeo médico completo para hipertensión",
		badge: "Combo clínico + laboratorio",
		origin: "combo",
		summary:
			"Monitoreo integral para control de presión arterial y riesgo cardiovascular.",
		includes: [
			"Consulta con especialista",
			"BHC",
			"Colesterol",
			"Triglicéridos",
			"Glucosa",
			"Transaminasa pirúvica (SGPT/ALT)",
			"Ácido úrico",
			"Creatinina en suero",
			"Examen general de orina",
			"Electrocardiograma (EKG)",
		],
		validity: "Disponible según evaluación médica y agenda de estudios.",
	},
	{
		id: "chequeo-medico-diabetes",
		title: "Chequeo médico completo para diabetes",
		badge: "Combo clínico + laboratorio",
		origin: "combo",
		summary:
			"Seguimiento completo para control glucémico y prevención de complicaciones.",
		includes: [
			"Consulta con especialista en diabetes",
			"Glucosa",
			"Glycohemoglobina (HB Glucosilada)",
			"Colesterol",
			"Triglicéridos",
			"Creatinina en suero",
			"Examen general de orina",
			"Ultrasonido abdominal superior",
			"Electrocardiograma (EKG)",
		],
		validity: "Disponible según evaluación médica y agenda de estudios.",
	},
	{
		id: "chequeo-cardiologico-2",
		title: "Chequeo cardiológico 2",
		badge: "Chequeo clínico",
		origin: "clinica",
		summary: "Control ambulatorio de presión arterial con valoración clínica.",
		includes: [
			"Holter de presión arterial",
			"Electrocardiograma",
			"Consulta con especialista en medicina interna",
		],
		validity: "Disponible según agenda de clínica.",
	},
	{
		id: "chequeo-cardiologico-3",
		title: "Chequeo cardiológico 3",
		badge: "Chequeo clínico",
		origin: "clinica",
		summary:
			"Evaluación estructural y funcional del corazón con consulta especializada.",
		includes: [
			"Electrocardiograma",
			"Ecocardiograma",
			"Consulta con medicina interna",
		],
		validity: "Disponible según agenda de clínica.",
	},
	{
		id: "chequeo-medico-obesidad",
		title: "Chequeo médico para obesidad",
		badge: "Combo clínico + laboratorio",
		origin: "combo",
		summary:
			"Evaluación metabólica para manejo de peso con acompañamiento especializado.",
		includes: [
			"Glycohemoglobina (HB Glucosilada)",
			"Colesterol",
			"Triglicéridos",
			"TSH",
			"Consulta con especialista",
		],
		validity: "Disponible según evaluación médica y agenda de estudios.",
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
		id: "perfil-hepatico-abril",
		title: "Perfil Hepático",
		badge: "Todo mes de mayo",
		origin: "laboratorio",
		summary: "10 análisis completos en un solo examen.",
		includes: ["10 análisis completos en un solo examen."],
		validity: "Disponible únicamente durante el mes de abril.",
	},
];
