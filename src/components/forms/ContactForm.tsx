"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { contactSchema, enquiryFromQuery, type ContactInput } from "@/lib/contact-schema";
import { cn } from "@/lib/utils";

type Values = {
  name: string;
  email: string;
  phone: string;
  enquiryType: ContactInput["enquiryType"];
  organization: string;
  message: string;
  preferredContact: ContactInput["preferredContact"];
  consent: boolean;
  company: string;
};

const empty = (type: Values["enquiryType"]): Values => ({
  name: "",
  email: "",
  phone: "",
  enquiryType: type,
  organization: "",
  message: "",
  preferredContact: "phone",
  consent: false,
  company: "",
});

export function ContactForm() {
  return (
    <Suspense fallback={<p className="text-sm text-arovia-charcoal">Loading form…</p>}>
      <ContactFormInner />
    </Suspense>
  );
}

function ContactFormInner() {
  const searchParams = useSearchParams();
  const starting = enquiryFromQuery(searchParams.get("type") ?? undefined);
  const [values, setValues] = useState<Values>(() => empty(starting));
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");
  const [startedAt] = useState(() => Date.now());
  const visible = useMemo(() => {
    const next: Record<string, string> = {};
    for (const [key, message] of Object.entries(errors)) {
      if (touched[key]) next[key] = message;
    }
    return next;
  }, [errors, touched]);

  function validate(nextValues: Values) {
    const parsed = contactSchema.safeParse({ ...nextValues, startedAt, consent: nextValues.consent ? true : false });
    if (parsed.success) return {};
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return fieldErrors;
  }

  function update<K extends keyof Values>(key: K, value: Values[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function blur(key: keyof Values) {
    setTouched((current) => ({ ...current, [key]: true }));
    setErrors(validate(values));
  }

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const next = validate(values);
    setErrors(next);
    setTouched({ name: true, email: true, phone: true, enquiryType: true, message: true, preferredContact: true, consent: true });
    if (Object.keys(next).length) {
      setStatus("error");
      setServerMessage("Check the highlighted fields.");
      return;
    }
    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, consent: true, startedAt }),
      });
      const data = (await response.json()) as { message?: string; fieldErrors?: Record<string, string> };
      if (!response.ok) {
        setStatus("error");
        setServerMessage(data.message || "We couldn't send that. Please try again.");
        if (data.fieldErrors) setErrors(data.fieldErrors);
        return;
      }
      setStatus("success");
      setServerMessage(data.message || "Your enquiry has been received.");
      setValues(empty(starting));
      setTouched({});
    } catch {
      setStatus("error");
      setServerMessage("We couldn't reach the server. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div role="status" aria-live="polite" className="rounded-lg border border-emerald-200 bg-emerald-50 p-6">
        <h2 className="text-xl font-semibold text-emerald-950">Enquiry received</h2>
        <p className="mt-2 text-sm text-emerald-900">{serverMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div aria-live="polite" className="sr-only">
        {status === "error" ? serverMessage : ""}
      </div>
      <Field id="name" label="Full name" error={visible.name} required>
        <input id="name" className={inputClass(!!visible.name)} name="name" placeholder="Enter your full name" value={values.name} onChange={(event) => update("name", event.target.value)} onBlur={() => blur("name")} autoComplete="name" aria-invalid={!!visible.name} aria-describedby={visible.name ? "name-error" : undefined} required />
      </Field>
      <Field id="email" label="Email" error={visible.email} required>
        <input id="email" className={inputClass(!!visible.email)} type="email" name="email" placeholder="Enter your email address" value={values.email} onChange={(event) => update("email", event.target.value)} onBlur={() => blur("email")} autoComplete="email" aria-invalid={!!visible.email} aria-describedby={visible.email ? "email-error" : undefined} required />
      </Field>
      <Field id="phone" label="Phone" error={visible.phone} required>
        <input id="phone" className={inputClass(!!visible.phone)} name="phone" placeholder="Enter your phone number" value={values.phone} onChange={(event) => update("phone", event.target.value)} onBlur={() => blur("phone")} autoComplete="tel" aria-invalid={!!visible.phone} aria-describedby={visible.phone ? "phone-error" : undefined} required />
      </Field>
      <Field id="message" label="Message" error={visible.message} required>
        <textarea
          id="message"
          className={cn(inputClass(!!visible.message), "min-h-28")}
          name="message"
          placeholder="Describe your enquiry (service interest, timing). Do not include sensitive medical details."
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          onBlur={() => blur("message")}
          aria-invalid={!!visible.message}
          aria-describedby={visible.message ? "message-error" : undefined}
          required
        />
      </Field>
      <fieldset>
        <legend className="text-sm font-semibold text-arovia-navy">Preferred contact method</legend>
        <div className="mt-2 flex flex-wrap gap-6">
          {(["phone", "email"] as const).map((method) => (
            <label key={method} className="inline-flex min-h-11 items-center gap-2 text-sm font-normal text-arovia-charcoal">
              <input type="radio" name="preferredContact" value={method} checked={values.preferredContact === method} onChange={() => update("preferredContact", method)} />
              {method === "phone" ? "Phone" : "Email"}
            </label>
          ))}
        </div>
      </fieldset>
      <label className="flex min-h-11 items-start gap-2 text-sm text-slate-700">
        <input type="checkbox" checked={values.consent} onChange={(event) => update("consent", event.target.checked)} onBlur={() => blur("consent")} aria-invalid={!!visible.consent} aria-describedby={visible.consent ? "consent-error" : undefined} />
        <span>I agree that Arovia Group may use these details to reply to this enquiry.</span>
      </label>
      {visible.consent && (
        <p id="consent-error" className="text-xs font-medium text-rose-700">
          {visible.consent}
        </p>
      )}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Company
          <input tabIndex={-1} autoComplete="off" value={values.company} onChange={(event) => update("company", event.target.value)} />
        </label>
      </div>
      <button type="submit" disabled={status === "submitting"} aria-busy={status === "submitting"} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-arovia-navy px-5 font-semibold text-white hover:bg-arovia-charcoal disabled:opacity-60">
        {status === "submitting" ? "Sending…" : "Send Enquiry"}
        {status !== "submitting" && <ArrowRight aria-hidden="true" className="h-4 w-4" />}
      </button>
      {status === "error" && (
        <p role="alert" className="rounded-md bg-rose-50 px-4 py-3 text-sm text-rose-800">
          {serverMessage}{" "}
          <button type="button" className="font-semibold underline" onClick={() => setStatus("idle")}>
            Try again
          </button>
        </p>
      )}
    </form>
  );
}

function Field({ id, label, error, required, children }: { id: string; label: string; error?: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block text-sm font-semibold text-arovia-navy" htmlFor={id}>
      {label}
      {required && <span className="text-rose-700"> *</span>}
      <span className="mt-1 block font-normal">{children}</span>
      {error && (
        <span id={`${id}-error`} className="mt-1 block text-xs font-medium text-rose-700">
          {error}
        </span>
      )}
    </label>
  );
}

function inputClass(invalid: boolean) {
  return cn("mt-1.5 w-full rounded-lg border bg-white px-3 py-2.5 text-sm font-normal text-arovia-charcoal outline-none placeholder:text-slate-400 focus:border-arovia-teal", invalid ? "border-rose-400" : "border-[#E5E7EB]");
}
