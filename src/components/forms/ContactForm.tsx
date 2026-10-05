"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { inquiryTypes } from "@/lib/constants";
import { cn } from "@/lib/utils";

type FieldName = "name" | "email" | "phone" | "inquiryType" | "subject" | "message" | "preferredContact";

const empty = {
  name: "",
  email: "",
  phone: "",
  inquiryType: "General Inquiry",
  subject: "",
  message: "",
  preferredContact: "email" as "phone" | "email" | "whatsapp",
  preferredTime: "",
  subscribe: false,
  company: "",
};

function validate(values: typeof empty): Partial<Record<FieldName, string>> {
  const errors: Partial<Record<FieldName, string>> = {};
  if (values.name.trim().length < 2) errors.name = "Enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Enter a valid email address.";
  if (values.phone && !/^[0-9+\-\s()]{7,20}$/.test(values.phone)) errors.phone = "Enter a valid phone number.";
  if (!values.inquiryType) errors.inquiryType = "Choose an inquiry type.";
  if (values.subject.trim().length < 3) errors.subject = "Add a short subject.";
  if (values.message.trim().length < 20) errors.message = "Tell us a little more (at least 20 characters).";
  if (!values.preferredContact) errors.preferredContact = "Choose how we should reply.";
  return errors;
}

export function ContactForm({ initialType }: { initialType?: string }) {
  const starting = inquiryTypes.includes(initialType as (typeof inquiryTypes)[number])
    ? (initialType as (typeof inquiryTypes)[number])
    : "General Inquiry";
  const [values, setValues] = useState({ ...empty, inquiryType: starting });
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  const visibleErrors = useMemo(() => {
    const next: Partial<Record<FieldName, string>> = {};
    (Object.keys(touched) as FieldName[]).forEach((key) => {
      if (touched[key] && errors[key]) next[key] = errors[key];
    });
    return next;
  }, [errors, touched]);

  function update(name: string, value: string | boolean) {
    setValues((current) => ({ ...current, [name]: value }));
  }

  function blur(name: FieldName) {
    setTouched((current) => ({ ...current, [name]: true }));
    setErrors(validate(values));
  }

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const next = validate(values);
    setErrors(next);
    setTouched({
      name: true,
      email: true,
      phone: true,
      inquiryType: true,
      subject: true,
      message: true,
      preferredContact: true,
    });
    if (Object.keys(next).length) return;
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as { message?: string };
      if (!response.ok) {
        setStatus("error");
        setServerMessage(data.message || "We couldn't send that. Please try again.");
        return;
      }
      setStatus("success");
      setServerMessage(data.message || "Your inquiry has been received.");
      setValues({ ...empty, inquiryType: starting });
      setTouched({});
    } catch {
      setStatus("error");
      setServerMessage("We couldn't reach the server. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <Field label="Name" error={visibleErrors.name} required>
        <input className={inputClass(!!visibleErrors.name)} name="name" placeholder="Your full name" value={values.name} onChange={(e) => update("name", e.target.value)} onBlur={() => blur("name")} autoComplete="name" required />
      </Field>
      <Field label="Email" error={visibleErrors.email} required>
        <input className={inputClass(!!visibleErrors.email)} type="email" name="email" placeholder="your@email.com" value={values.email} onChange={(e) => update("email", e.target.value)} onBlur={() => blur("email")} autoComplete="email" required />
      </Field>
      <Field label="Phone" error={visibleErrors.phone}>
        <input className={inputClass(!!visibleErrors.phone)} name="phone" placeholder="Include country code" value={values.phone} onChange={(e) => update("phone", e.target.value)} onBlur={() => blur("phone")} autoComplete="tel" />
      </Field>
      <Field label="Inquiry type" error={visibleErrors.inquiryType} required>
        <select className={inputClass(!!visibleErrors.inquiryType)} name="inquiryType" value={values.inquiryType} onChange={(e) => update("inquiryType", e.target.value)} onBlur={() => blur("inquiryType")} required>
          {inquiryTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </Field>
      <Field label="Subject" error={visibleErrors.subject} required>
        <input className={inputClass(!!visibleErrors.subject)} name="subject" placeholder="What is this about?" value={values.subject} onChange={(e) => update("subject", e.target.value)} onBlur={() => blur("subject")} required />
      </Field>
      <Field label="Message" error={visibleErrors.message} required>
        <textarea className={cn(inputClass(!!visibleErrors.message), "min-h-32")} name="message" placeholder="Tell us more about your inquiry..." value={values.message} onChange={(e) => update("message", e.target.value)} onBlur={() => blur("message")} required />
      </Field>
      <fieldset>
        <legend className="text-sm font-semibold text-arovia-ink">Preferred contact method</legend>
        <div className="mt-2 flex flex-wrap gap-3">
          {(["phone", "email", "whatsapp"] as const).map((method) => (
            <label key={method} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-200 px-4 text-sm capitalize">
              <input type="radio" name="preferredContact" value={method} checked={values.preferredContact === method} onChange={() => update("preferredContact", method)} />
              {method}
            </label>
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend className="text-sm font-semibold text-arovia-ink">Preferred contact time</legend>
        <div className="mt-2 flex flex-wrap gap-3">
          {["Morning", "Afternoon", "Evening", "ASAP"].map((time) => (
            <label key={time} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-200 px-4 text-sm">
              <input type="radio" name="preferredTime" value={time} checked={values.preferredTime === time} onChange={() => update("preferredTime", time)} />
              {time}
            </label>
          ))}
        </div>
      </fieldset>
      <label className="flex min-h-11 items-center gap-2 text-sm text-slate-700">
        <input type="checkbox" checked={values.subscribe} onChange={(e) => update("subscribe", e.target.checked)} />
        I&apos;d like to receive updates about Arovia services
      </label>
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          Company
          <input tabIndex={-1} autoComplete="off" value={values.company} onChange={(e) => update("company", e.target.value)} />
        </label>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="submit" disabled={status === "loading"} className="inline-flex min-h-11 items-center justify-center rounded-full bg-arovia-cyan px-6 font-semibold text-white disabled:opacity-60">
          {status === "loading" ? "Sending…" : "Send Inquiry"}
        </button>
        <button
          type="reset"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-300 px-6 font-semibold"
          onClick={() => {
            setValues({ ...empty, inquiryType: starting });
            setErrors({});
            setTouched({});
            setStatus("idle");
          }}
        >
          Clear Form
        </button>
      </div>
      <AnimatePresence>
        {status === "success" && (
          <motion.p role="status" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
            {serverMessage}
          </motion.p>
        )}
        {status === "error" && (
          <motion.p role="alert" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-800">
            {serverMessage}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}

function Field({ label, error, required, children }: { label: string; error?: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block text-sm font-semibold text-arovia-ink">
      {label}
      {required && <span className="text-rose-600"> *</span>}
      <span className="mt-1 block font-normal">{children}</span>
      {error && <span className="mt-1 block text-xs font-medium text-rose-600">{error}</span>}
    </label>
  );
}

function inputClass(invalid: boolean) {
  return cn(
    "w-full rounded-2xl border bg-white px-4 py-3 text-base font-normal text-arovia-ink outline-none transition focus:border-arovia-cyan",
    invalid ? "border-rose-400" : "border-slate-200",
  );
}
