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
  type: 'MedicalClinic';
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
  type?: 'website' | 'article';
  noIndex?: boolean;
};

export const clinicBusinessData: ClinicBusinessData = {
  name: 'Servicios Medicos ROMAT',
  legalName: 'Servicios Medicos ROMAT',
  description:
    'Clinica medica local en Villa Sol, Sabana Grande (Managua, Nicaragua), con medicina general, especialidades y laboratorio clinico para toda la familia.',
  type: 'MedicalClinic',
  // TODO: Replace with real clinic data
  phone: '+505 0000 0000',
  // TODO: Replace with real clinic data
  whatsappNumber: '+505 0000 0000',
  // TODO: Replace with real clinic data
  email: 'contacto@romat.com.ni',
  address: {
    // TODO: Replace with real clinic data
    streetAddress: 'Villa Sol, Sabana Grande',
    addressLocality: 'Managua',
    addressRegion: 'Managua',
    // TODO: Replace with real clinic data
    postalCode: '00000',
    addressCountry: 'NI',
  },
  // TODO: Replace with real clinic data
  geo: {
    latitude: 12.1186,
    longitude: -86.2006,
  },
  // TODO: Replace with real clinic data
  openingHours: ['Mo-Fr 08:00-20:00', 'Sa-Su 09:00-14:00'],
  image: '/og-romat.jpg',
  social: {
    // TODO: Replace with real clinic data
    facebook: '#',
    // TODO: Replace with real clinic data
    instagram: '#',
  },
};

export const buildCanonicalUrl = (site: string, path = '/') => {
  const normalizedSite = site.replace(/\/$/, '');
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${normalizedSite}${normalizedPath}`;
};

export const buildPageMeta = (meta: PageMetaInput, site: string) => {
  const canonicalUrl = buildCanonicalUrl(site, meta.path ?? '/');
  const image = meta.image ?? clinicBusinessData.image;

  return {
    title: meta.title,
    description: meta.description,
    canonicalUrl,
    image,
    imageUrl: buildCanonicalUrl(site, image),
    type: meta.type ?? 'website',
    noIndex: meta.noIndex ?? false,
  };
};

export const buildLocalBusinessSchema = (
  business: ClinicBusinessData,
  canonicalUrl: string,
) => {
  const siteOrigin = new URL(canonicalUrl).origin;
  const imageUrl = business.image.startsWith('http')
    ? business.image
    : `${siteOrigin}${business.image.startsWith('/') ? business.image : `/${business.image}`}`;

  return {
    '@context': 'https://schema.org',
    '@type': business.type,
    '@id': `${canonicalUrl}#localbusiness`,
    name: business.name,
    legalName: business.legalName,
    description: business.description,
    url: canonicalUrl,
    image: imageUrl,
    telephone: business.phone,
    email: business.email,
    address: {
      '@type': 'PostalAddress',
      ...business.address,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    openingHours: business.openingHours,
    sameAs: Object.values(business.social).filter((url) => Boolean(url) && url !== '#'),
  };
};
