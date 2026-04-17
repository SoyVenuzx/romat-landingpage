import { useState } from 'react';
import {
  Activity,
  ArrowRight,
  Baby,
  Bone,
  Brain,
  Eye,
  HeartPulse,
  Microscope,
  Pill,
  Stethoscope,
  Syringe,
  type LucideIcon,
} from 'lucide-react';
import type {
  ServiceCategory,
  ServiceIcon,
  ServiceItem,
} from '../../data/services';

type ServicesInteractiveProps = {
  categories: ServiceCategory[];
  services: Record<ServiceCategory, ServiceItem[]>;
};

const VISIBLE_LIMIT = 4;

const iconMap: Record<ServiceIcon, LucideIcon> = {
  Stethoscope,
  HeartPulse,
  Brain,
  Bone,
  Eye,
  Baby,
  Syringe,
  Activity,
  Microscope,
  Pill,
};

export default function ServicesInteractive({
  categories,
  services,
}: ServicesInteractiveProps) {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('Consultas');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [animationCycle, setAnimationCycle] = useState(0);
  const [showFullCatalogByCategory, setShowFullCatalogByCategory] = useState<
    Partial<Record<ServiceCategory, boolean>>
  >({});

  const activeServices = services[activeCategory];
  const showFullCatalog = Boolean(showFullCatalogByCategory[activeCategory]);
  const hasExpandableCatalog = activeServices.length > VISIBLE_LIMIT;
  const visibleServices = showFullCatalog
    ? activeServices
    : activeServices.slice(0, VISIBLE_LIMIT);

  return (
    <>
      <div className="mb-8 motion-safe:animate-fade-up motion-safe:opacity-0 motion-reduce:animate-none motion-reduce:opacity-100" style={{ animationDelay: '120ms', animationFillMode: 'both' }}>
        <div className="mx-auto w-full max-w-[22rem] px-1 sm:max-w-max sm:px-0">
          <div className="rounded-2xl bg-muted p-1.5">
            <div className="grid grid-cols-2 gap-1 sm:inline-flex sm:min-w-max sm:gap-1">
              {categories.map((category, index) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    if (activeCategory === category) {
                      return;
                    }
                    setActiveCategory(category);
                    setExpandedId(null);
                    setAnimationCycle((prev) => prev + 1);
                  }}
                  className={`${index === categories.length - 1 && categories.length % 2 !== 0 ? 'col-span-2 sm:col-span-1' : ''} rounded-xl px-4 py-2.5 text-sm font-bold transition-all sm:px-6 ${
                    activeCategory === category
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6 flex flex-col gap-3 rounded-2xl border border-border bg-card/80 p-4 shadow-card sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-medium leading-relaxed text-muted-foreground">
          {showFullCatalog
            ? `Mostrando los ${activeServices.length} servicios de ${activeCategory}.`
            : `Mostrando ${visibleServices.length} servicios destacados de ${activeCategory}.`}
        </p>

        {hasExpandableCatalog && (
          <button
            type="button"
            onClick={() => {
              setShowFullCatalogByCategory((prev) => ({
                ...prev,
                [activeCategory]: !showFullCatalog,
              }));
              setExpandedId(null);
            }}
            className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-4 text-sm font-bold text-primary transition-colors hover:bg-primary/15 sm:w-auto"
          >
            {showFullCatalog
              ? 'Ver solo destacados'
              : `Ver catálogo completo (${activeServices.length})`}
            <ArrowRight size={14} className="transition-transform" />
          </button>
        )}
      </div>

      <div
        key={`${animationCycle}-${activeCategory}-${showFullCatalog ? 'all' : 'featured'}`}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {visibleServices.map((service, index) => {
          const Icon = iconMap[service.icon];
          const isExpanded = expandedId === service.id;

          return (
            <article
              key={`${animationCycle}-${service.id}`}
              className="group cursor-default rounded-2xl border border-border bg-card p-6 text-left shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover motion-safe:animate-fade-up motion-safe:opacity-0 motion-reduce:animate-none motion-reduce:opacity-100"
              style={{
                animationDelay: `${80 + index * 70}ms`,
                animationFillMode: 'both',
              }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon size={24} className="text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">{service.name}</h3>
              <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>

              <div
                className={`grid overflow-hidden transition-all duration-300 ease-out ${
                  isExpanded ? 'mb-4 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                } lg:mb-4 lg:grid-rows-[1fr] lg:opacity-100`}
              >
                <p className="min-h-0 text-sm leading-relaxed text-muted-foreground">{service.details}</p>
              </div>

              <button
                type="button"
                onClick={() => setExpandedId(isExpanded ? null : service.id)}
                className="inline-flex items-center gap-1 text-sm font-bold text-primary transition-all group-hover:gap-2 lg:hidden"
                aria-expanded={isExpanded}
                aria-label={`Ver detalles de ${service.name}`}
              >
                {isExpanded ? 'Ver menos' : 'Ver más'}
                <ArrowRight size={14} className={isExpanded ? 'rotate-90 transition-transform' : 'transition-transform'} />
              </button>
            </article>
          );
        })}
      </div>
    </>
  );
}
