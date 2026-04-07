"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [fieldErrors, setFieldErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  function validate() {
    const errors: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) errors.name = "Name is required.";
    if (!email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!message.trim()) errors.message = "Message is required.";
    return errors;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    setFieldErrors({});
    setFormState("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        setFormState("error");
        return;
      }

      setFormState("success");
    } catch {
      setFormState("error");
    }
  }

  if (formState === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <CheckCircle2 size={40} className="text-[#2D6A4F] mb-4" />
        <p className="text-[#1d1d1f] font-medium">Thank you!</p>
        <p className="text-sm text-[#6e6e73] mt-1">I&apos;ll be in touch shortly.</p>
      </div>
    );
  }

  const inputClass =
    "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2D6A4F] focus:ring-1 focus:ring-[#2D6A4F] transition-colors";
  const labelClass = "block text-xs uppercase tracking-widest text-[#6e6e73] mb-2";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">

      {/* Name */}
      <div>
        <label htmlFor="name" className={labelClass}>Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
          placeholder="Your name"
        />
        {fieldErrors.name && (
          <p className="mt-1 text-xs text-red-500">{fieldErrors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClass}>Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
          placeholder="your@email.com"
        />
        {fieldErrors.email && (
          <p className="mt-1 text-xs text-red-500">{fieldErrors.email}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>Message</label>
        <textarea
          id="message"
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={inputClass}
          placeholder="Tell me about your project..."
        />
        {fieldErrors.message && (
          <p className="mt-1 text-xs text-red-500">{fieldErrors.message}</p>
        )}
      </div>

      {/* Error state */}
      {formState === "error" && (
        <p className="text-sm text-red-500">Something went wrong. Please try again.</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={formState === "loading"}
        className="w-full text-white text-sm uppercase tracking-widest px-8 py-3 rounded-full bg-gradient-to-br from-[#2D6A4F] to-[#1B4332] hover:from-[#357A5C] hover:to-[#235C43] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {formState === "loading" ? "Sending..." : "Send Message"}
      </button>

    </form>
  );
}
