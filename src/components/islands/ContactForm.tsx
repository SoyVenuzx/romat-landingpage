import { useMemo, useState } from 'react';
import { Send } from 'lucide-react';

type ContactFormProps = {
  clinicWhatsApp: string;
  serviceOptions: string[];
};

type FormValues = {
  name: string;
  phone: string;
  service: string;
  preferredDate: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: '',
  phone: '',
  service: '',
  preferredDate: '',
  message: '',
};

const normalizePhone = (value: string) => value.replace(/\D/g, '');

const formatDate = (isoDate: string) => {
  if (!isoDate) {
    return '';
  }

  const [year, month, day] = isoDate.split('-');
  return `${day}/${month}/${year}`;
};

export default function ContactForm({
  clinicWhatsApp,
  serviceOptions,
}: ContactFormProps) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const minDate = useMemo(() => {
    const date = new Date();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${date.getFullYear()}-${month}-${day}`;
  }, []);

  const validate = (currentValues: FormValues) => {
    const nextErrors: FormErrors = {};

    if (!currentValues.name.trim()) {
      nextErrors.name = 'Ingresa tu nombre completo.';
    }

    const cleanPhone = normalizePhone(currentValues.phone);
    if (!cleanPhone) {
      nextErrors.phone = 'Ingresa un telefono de contacto.';
    } else if (cleanPhone.length < 10) {
      nextErrors.phone = 'El telefono debe tener al menos 10 digitos.';
    }

    if (!currentValues.service.trim()) {
      nextErrors.service = 'Selecciona un servicio.';
    }

    if (!currentValues.preferredDate) {
      nextErrors.preferredDate = 'Selecciona una fecha preferida.';
    }

    return nextErrors;
  };

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
      'Hola, me gustaria agendar una cita en Servicios Medicos ROMAT.',
      '',
      `Nombre: ${values.name.trim()}`,
      `Telefono: ${values.phone.trim()}`,
      `Servicio: ${values.service}`,
      `Fecha preferida: ${formatDate(values.preferredDate)}`,
      `Mensaje: ${values.message.trim() || 'Sin mensaje adicional.'}`,
    ].join('\n');

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <input
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Nombre completo"
            required
            className="flex h-10 w-full rounded-xl border border-border bg-card px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>

        <div>
          <input
            name="phone"
            value={values.phone}
            onChange={handleChange}
            placeholder="Telefono"
            type="tel"
            required
            className="flex h-10 w-full rounded-xl border border-border bg-card px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
          {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <select
          name="service"
          value={values.service}
          onChange={handleChange}
          required
          className="flex h-10 w-full rounded-xl border border-border bg-card px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <option value="" disabled>
            Selecciona un servicio
          </option>
          {serviceOptions.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
        {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service}</p>}
      </div>

      <div>
        <input
          name="preferredDate"
          value={values.preferredDate}
          onChange={handleChange}
          type="date"
          min={minDate}
          required
          className="flex h-10 w-full rounded-xl border border-border bg-card px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        />
        {errors.preferredDate && (
          <p className="mt-1 text-xs text-destructive">{errors.preferredDate}</p>
        )}
      </div>

      <div>
        <textarea
          name="message"
          value={values.message}
          onChange={handleChange}
          placeholder="Mensaje (opcional)"
          rows={3}
          className="flex min-h-[80px] w-full rounded-xl border border-border bg-card px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-10 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90 sm:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Redirigiendo a WhatsApp...' : 'Enviar solicitud'}
        {!isSubmitting && <Send size={16} />}
      </button>
    </form>
  );
}
