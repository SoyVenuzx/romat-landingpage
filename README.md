# Servicios Medicos ROMAT - Landing Page

Landing page oficial de **Servicios Medicos ROMAT**, enfocada en captacion de pacientes para clinica y laboratorio en Managua/Masaya, con contacto directo por WhatsApp y contenido optimizado para SEO local.

## Sitio en produccion

- URL: https://www.serviciosmedicosromat.com

## Vista general

Este proyecto esta construido con Astro como base estatica y componentes interactivos tipo "islands" en React para mejorar rendimiento y mantener una excelente experiencia movil.

Incluye:

- Hero principal con propuesta de valor y CTA de conversion
- Catalogo de servicios por categorias con interaccion dinamica
- Seccion de laboratorio con promociones filtrables y panel expandible
- Formulario de contacto que genera mensaje estructurado a WhatsApp
- Navbar responsive con estado de "abierto/cerrado" segun horario local
- SEO tecnico: meta tags, Open Graph, Twitter Cards, JSON-LD LocalBusiness, sitemap y robots.txt

---

## Stack tecnico

- **Astro 4**
- **React 18** (islands)
- **TypeScript**
- **Tailwind CSS** + `tailwindcss-animate`
- **Lucide React** (iconografia)

Integraciones principales:

- `@astrojs/react`
- `@astrojs/tailwind`
- `@astrojs/sitemap`
- `astro-robots-txt`

---

## Requisitos

- **Node.js >= 22.12.0** (definido en `package.json`)
- npm o bun

---

## Instalacion y desarrollo

```bash
npm install
npm run dev
```

El sitio quedara disponible en `http://localhost:4321`.

### Scripts disponibles

```bash
npm run dev       # servidor local
npm run build     # build de produccion en /dist
npm run preview   # previsualizar build local
npm run check     # chequeo de tipos con Astro
npm run astro     # comandos Astro CLI
```

---

## Estructura del proyecto

```text
/
|- public/                   # favicon e imagenes publicas
|- src/
|  |- assets/                # imagenes gestionadas por astro:assets
|  |- components/
|  |  |- islands/            # React islands (interactividad cliente)
|  |  |- sections/           # secciones principales de la landing
|  |  \- ui/                 # componentes UI reutilizables
|  |- data/                  # contenido editable (servicios, lab, horarios)
|  |- layouts/               # layout base y metadatos globales
|  |- pages/                 # rutas Astro (homepage)
|  |- styles/                # estilos globales y tokens visuales
|  \- utils/                 # utilidades SEO y datos de negocio
|- astro.config.mjs
|- tailwind.config.ts
\- package.json
```

---

## Gestion de contenido (edicion rapida)

Si necesitas actualizar contenido sin redisenar componentes, estos son los archivos clave:

- **Datos del negocio / SEO local**
  - `src/utils/seo.ts`
  - Nombre comercial/legal
  - Telefono y WhatsApp
  - Email
  - Direccion y coordenadas
  - Redes sociales
  - Horarios para schema

- **Servicios medicos**
  - `src/data/services.ts`
  - Categorias, descripciones y catalogo para formulario

- **Laboratorio y promociones**
  - `src/data/lab.ts`
  - Estudios, paquetes y vigencias

- **Horario visible y metodos de pago**
  - `src/data/clinic-info.ts`

---

## SEO implementado

El proyecto ya incorpora una base SEO robusta para negocio local:

- Canonical por pagina
- Open Graph y Twitter Cards
- JSON-LD tipo `MedicalClinic` / Local Business
- `sitemap.xml` generado automaticamente
- `robots.txt` con politica de rastreo

Archivo clave: `src/layouts/BaseLayout.astro` + `src/utils/seo.ts`

---

## Despliegue

El sitio se genera como salida estatica (`output: "static"`), por lo que puede desplegarse en cualquier hosting estatico (Vercel, Netlify, Cloudflare Pages, etc.).

Build de produccion:

```bash
npm run build
```

El resultado se genera en `dist/`.

---

## Creditos

Desarrollado para **Servicios Medicos ROMAT** como sitio de captacion digital y presencia institucional.
