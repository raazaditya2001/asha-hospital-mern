import { useState } from "react";
import api from "../api/axios";
import { CheckCircle2, Loader2 } from "lucide-react";

const initialState = { name: "", email: "", phone: "", subject: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      await api.post("/contact", form);
      setStatus("success");
      setForm(initialState);
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err?.response?.data?.errors?.[0]?.msg ||
          err?.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="bg-teal-100 border border-teal-700/20 rounded-2xl p-8 text-center">
        <CheckCircle2 className="mx-auto text-teal-800 mb-3" size={40} />
        <h3 className="font-display text-xl font-semibold text-teal-950 mb-1">Message sent!</h3>
        <p className="text-sm text-ink/70">We'll get back to you as soon as possible.</p>
        <button onClick={() => setStatus("idle")} className="mt-5 text-sm font-semibold text-marigold-600 hover:underline">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Full Name *" name="name" value={form.name} onChange={handleChange} required />
        <Field label="Email *" name="email" type="email" value={form.email} onChange={handleChange} required />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Phone" name="phone" value={form.phone} onChange={handleChange} />
        <Field label="Subject" name="subject" value={form.subject} onChange={handleChange} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-teal-950">Message *</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          required
          className="rounded-xl border border-teal-800/20 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-marigold-500"
        />
      </div>
      {status === "error" && <p className="text-sm text-red-600 font-medium">{errorMsg}</p>}
      <button
        type="submit"
        disabled={status === "loading"}
        className="flex items-center justify-center gap-2 bg-teal-800 hover:bg-teal-900 disabled:opacity-60 text-white font-bold px-6 py-3.5 rounded-full transition-colors"
      >
        {status === "loading" && <Loader2 size={18} className="animate-spin" />}
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

function Field({ label, name, value, onChange, type = "text", required = false }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-teal-950" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="rounded-xl border border-teal-800/20 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-marigold-500"
      />
    </div>
  );
}
