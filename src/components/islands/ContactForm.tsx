import { useState } from 'react';
import { Send } from 'lucide-react';

type ContactFormProps = {
  clinicWhatsApp: string;
  serviceOptions: string[];
};

type FormValues = {
  fullName: string;
  age: string;
  phone: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  fullName: '',
  age: '',
  phone: '',
  service: '',
  message: '',
};

const normalizePhone = (value: string) => value.replace(/\D/g, '');

const validate = (currentValues: FormValues) => {
  const nextErrors: FormErrors = {};

  const cleanName = currentValues.fullName.trim();
  if (!cleanName) {
    nextErrors.fullName = 'Ingresa el nombre completo del paciente.';
  } else {
    const words = cleanName.split(/\s+/).filter(Boolean);
    if (cleanName.length < 6 || words.length < 2) {
      nextErrors.fullName = 'Ingresa nombre y apellido para continuar.';
    }
  }

  const parsedAge = Number(currentValues.age);
  if (!currentValues.age) {
    nextErrors.age = 'Ingresa la edad del paciente.';
  } else if (!Number.isFinite(parsedAge) || parsedAge < 0 || parsedAge > 120) {
    nextErrors.age = 'La edad debe estar entre 0 y 120 anos.';
  }

  const cleanPhone = normalizePhone(currentValues.phone);
  if (!cleanPhone) {
    nextErrors.phone = 'Ingresa un numero de telefono.';
  } else if (cleanPhone.length < 8) {
    nextErrors.phone = 'El telefono debe tener al menos 8 digitos.';
  }

  if (!currentValues.service.trim()) {
    nextErrors.service = 'Selecciona un servicio de interes.';
  }

  return nextErrors;
};

export default function ContactForm({ clinicWhatsApp, serviceOptions }: ContactFormProps) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormValues]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    const whatsappNumber = normalizePhone(clinicWhatsApp);
    const whatsappMessage = [
      'Hola, deseo agendar una cita en Servicios Medicos ROMAT.',
      '',
      'Datos del paciente:',
      `- Nombre completo: ${values.fullName.trim()}`,
      `- Edad: ${values.age.trim()} anos`,
      `- Telefono: ${values.phone.trim()}`,
      `- Servicio de interes: ${values.service}`,
      `- Mensaje adicional: ${values.message.trim() || 'Sin mensaje adicional.'}`,
    ].join('\n');

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');

    window.setTimeout(() => {
      setIsSubmitting(false);
    }, 900);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_130px]">
        <div>
          <label htmlFor="fullName" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Nombre completo *
          </label>
          <input
            id="fullName"
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
            placeholder="Nombre y apellido"
            autoComplete="name"
            required
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? 'error-fullName' : undefined}
            className="flex h-11 w-full rounded-xl border border-border bg-card px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
          {errors.fullName && (
            <p id="error-fullName" className="mt-1 text-xs text-destructive">
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="age" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Edad *
          </label>
          <input
            id="age"
            name="age"
            value={values.age}
            onChange={handleChange}
            placeholder="Ej. 34"
            type="number"
            min={0}
            max={120}
            required
            aria-invalid={Boolean(errors.age)}
            aria-describedby={errors.age ? 'error-age' : undefined}
            className="flex h-11 w-full rounded-xl border border-border bg-card px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
          {errors.age && (
            <p id="error-age" className="mt-1 text-xs text-destructive">
              {errors.age}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Telefono *
        </label>
        <input
          id="phone"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          placeholder="Numero de contacto"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          required
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? 'error-phone' : undefined}
          className="flex h-11 w-full rounded-xl border border-border bg-card px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        />
        {errors.phone && (
          <p id="error-phone" className="mt-1 text-xs text-destructive">
            {errors.phone}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Servicio de interes *
        </label>
        <select
          id="service"
          name="service"
          value={values.service}
          onChange={handleChange}
          required
          aria-invalid={Boolean(errors.service)}
          aria-describedby={errors.service ? 'error-service' : undefined}
          className="flex h-11 w-full rounded-xl border border-border bg-card px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <option value="" disabled>
            Selecciona una opcion
          </option>
          {serviceOptions.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
        {errors.service && (
          <p id="error-service" className="mt-1 text-xs text-destructive">
            {errors.service}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Mensaje opcional
        </label>
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={handleChange}
          placeholder="Cuentanos brevemente el motivo de la consulta"
          rows={4}
          className="flex min-h-[100px] w-full rounded-xl border border-border bg-card px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">* Campos obligatorios para enviar la solicitud.</p>
        <button
          type="submit"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-80"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Abriendo WhatsApp...' : 'Enviar por WhatsApp'}
          {!isSubmitting && <Send size={16} />}
        </button>
      </div>
    </form>
  );
}
