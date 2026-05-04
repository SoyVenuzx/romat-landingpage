export type SocialLinks = {
	facebook: string;
	instagram: string;
	x?: string;
};

export type ClinicAddress = {
	streetAddress: string;
	addressLocality: string;
	addressRegion: string;
	postalCode: string;
	addressCountry: string;
};

export type ClinicBusinessData = {
	name: string;
	legalName: string;
	description: string;
	type: "MedicalClinic";
	phone: string;
	whatsappNumber: string;
	email: string;
	address: ClinicAddress;
	geo: {
		latitude: number;
		longitude: number;
	};
	openingHours: string[];
	image: string;
	social: SocialLinks;
};

export type PageMetaInput = {
	title: string;
	description: string;
	path?: string;
	image?: string;
	type?: "website" | "article";
	noIndex?: boolean;
};

export const clinicBusinessData: ClinicBusinessData = {
	name: "Servicios Médicos ROMAT",
	legalName: "Servicios Médicos ROMAT",
	description:
		"Clínica médica en Villa Sol, Managua, con atención en Masaya. Especialidades médicas, medicina interna, laboratorio clínico, ultrasonidos y más. Atención personalizada para toda la familia en Nicaragua.",
	type: "MedicalClinic",
	phone: "+50583607978",
	whatsappNumber: "+50583607978",
	email: "serviciosmedicosromat@hotmail.com",
	address: {
		streetAddress:
			"Entrada de Villa Sol, Sabana Grande, segundo andén a mano derecha, edificio B1-6, esquinero.",
		addressLocality: "Managua",
		addressRegion: "Managua",
		postalCode: "14091",
		addressCountry: "NI",
	},
	geo: {
		latitude: 12.106097082248313,
		longitude: -86.15754390556445,
	},
	openingHours: ["Mo-Fr 07:00-17:00", "Sa 07:00-12:00"],
	image: "/images/clinic/og.webp",
	social: {
		facebook: "https://www.facebook.com/Atencionmedicaromat",
		instagram: "https://www.instagram.com/especialidadesromat/",
	},
};

export const buildCanonicalUrl = (site: string, path = "/") => {
	const normalizedSite = site.replace(/\/$/, "");
	const normalizedPath = path.startsWith("/") ? path : `/${path}`;
	return `${normalizedSite}${normalizedPath}`;
};

export const buildPageMeta = (meta: PageMetaInput, site: string) => {
	const canonicalUrl = buildCanonicalUrl(site, meta.path ?? "/");
	const image = meta.image ?? clinicBusinessData.image;

	return {
		title: meta.title,
		description: meta.description,
		canonicalUrl,
		image,
		imageUrl: buildCanonicalUrl(site, image),
		type: meta.type ?? "website",
		noIndex: meta.noIndex ?? false,
	};
};

export const buildLocalBusinessSchema = (
	business: ClinicBusinessData,
	canonicalUrl: string,
) => {
	const siteOrigin = new URL(canonicalUrl).origin;
	const imageUrl = business.image.startsWith("http")
		? business.image
		: `${siteOrigin}${business.image.startsWith("/") ? business.image : `/${business.image}`}`;

	return {
		"@context": "https://schema.org",
		"@type": business.type,
		"@id": `${canonicalUrl}#localbusiness`,
		name: business.name,
		legalName: business.legalName,
		description: business.description,
		url: canonicalUrl,
		image: imageUrl,
		telephone: business.phone,
		email: business.email,
		address: {
			"@type": "PostalAddress",
			...business.address,
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: business.geo.latitude,
			longitude: business.geo.longitude,
		},
		openingHours: business.openingHours,
		sameAs: Object.values(business.social).filter(
			(url) => Boolean(url) && url !== "#",
		),
	};
};
