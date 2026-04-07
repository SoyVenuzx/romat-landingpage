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

  return (
    <>
      <div className="mb-8 motion-safe:animate-fade-up motion-safe:opacity-0 motion-reduce:animate-none motion-reduce:opacity-100" style={{ animationDelay: '120ms', animationFillMode: 'both' }}>
        <div className="mx-auto w-full max-w-[22rem] px-1 sm:max-w-max sm:px-0">
          <div className="no-scrollbar overflow-x-auto rounded-2xl px-1 py-1">
            <div className="inline-flex min-w-max gap-1 rounded-2xl bg-muted p-1.5">
              {categories.map((category) => (
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
                  className={`rounded-xl px-5 py-2.5 text-sm font-bold transition-all sm:px-6 ${
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

      <div key={animationCycle} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services[activeCategory].map((service, index) => {
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
                {isExpanded ? 'Ver menos' : 'Ver mas'}
                <ArrowRight size={14} className={isExpanded ? 'rotate-90 transition-transform' : 'transition-transform'} />
              </button>
            </article>
          );
        })}
      </div>
    </>
  );
}
