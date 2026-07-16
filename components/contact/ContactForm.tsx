"use client";

import { useState, type FormEvent } from "react";
import { ButtonSubmit } from "@/components/ui/Button";
import { SERVICES } from "@/lib/content";

// TODO: replace with a real Web3Forms access key before launch.
// Get one free at https://web3forms.com (enter an email, no account/password needed,
// the key arrives by email). Web3Forms then forwards every submission to that inbox.
const WEB3FORMS_ACCESS_KEY = "REPLACE_WITH_WEB3FORMS_ACCESS_KEY";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      if (result.success) {
        setStatus("success");
        event.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-ink/10 p-8">
        <p className="font-display text-xl font-semibold text-ink">Message sent.</p>
        <p className="mt-2 text-ink/80">We reply within 1-2 business days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Field label="Name" htmlFor="name">
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} />
        </Field>
        <Field label="Email" htmlFor="email">
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
        </Field>
      </div>

      <Field label="Company" htmlFor="company" optional>
        <input id="company" name="company" type="text" autoComplete="organization" className={inputClass} />
      </Field>

      <Field label="What are you building?" htmlFor="project_type">
        <select id="project_type" name="project_type" required defaultValue="" className={inputClass}>
          <option value="" disabled>
            Select one
          </option>
          {SERVICES.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </Field>

      <Field label="Message" htmlFor="message">
        <textarea id="message" name="message" required rows={5} className={inputClass} />
      </Field>

      {status === "error" && (
        <p role="alert" className="flex items-center gap-2 text-sm text-ink">
          <span className="h-1.5 w-1.5 rounded-full bg-ember shrink-0" aria-hidden="true" />
          Something went wrong sending that — try again, or email us directly.
        </p>
      )}

      <ButtonSubmit disabled={status === "submitting"} className="self-start">
        {status === "submitting" ? "Sending…" : "Send message"}
      </ButtonSubmit>
    </form>
  );
}

const inputClass =
  "w-full rounded-lg border border-ink/20 bg-cloud px-4 py-3 text-ink placeholder:text-ink/40 transition-colors duration-150 focus:border-ember focus:outline-none";

function Field({
  label,
  htmlFor,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
        {label} {optional && <span className="text-ink/70 font-normal">(optional)</span>}
      </label>
      {children}
    </div>
  );
}
