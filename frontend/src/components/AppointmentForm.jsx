import { useState } from "react";
import api from "../api/axios";
import { CheckCircle2, Loader2 } from "lucide-react";

const departments = [
  "Dermatology (Skin Care)",
  "Hair Treatment",
  "Laser Treatment",
  "Ayurveda",
  "General Medicine",
  "Preventive Healthcare",
];

const initialState = {
  name: "",
  phone: "",
  email: "",
  age: "",
  gender: "",
  department: "",
  preferredDate: "",
  preferredTime: "",
  message: "",
};

export default function AppointmentForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const payload = { ...form };
      if (payload.age) payload.age = Number(payload.age);
      else delete payload.age;
      await api.post("/appointments", payload);
      setStatus("success");
      setForm(initialState);
    } catch (err) {
      setStatus("error");
      const apiMsg =
        err?.response?.data?.errors?.[0]?.msg ||
        err?.response?.data?.message ||
        "Something went wrong. Please try again or call us directly.";
      setErrorMsg(apiMsg);
    }
  };

  if (status === "success") {
    return (
      <div className="bg-teal-100 border border-teal-700/20 rounded-2xl p-8 text-center">
        <CheckCircle2 className="mx-auto text-teal-800 mb-3" size={40} />
        <h3 className="font-display text-xl font-semibold text-teal-950 mb-1">
          Request received!
        </h3>
        <p className="text-sm text-ink/70">
          Our team will call you shortly to confirm your appointment.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-semibold text-marigold-600 hover:underline"
        >
          Book another appointment
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <Field label="Full Name *" name="name" value={form.name} onChange={handleChange} required />
      <Field label="Phone Number *" name="phone" value={form.phone} onChange={handleChange} required />
      <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} />
      <Field label="Age" name="age" type="number" value={form.age} onChange={handleChange} />

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-teal-950">Gender</label>
        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          className="rounded-xl border border-teal-800/20 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-marigold-500"
        >
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-teal-950">Department *</label>
        <select
          name="department"
          value={form.department}
          onChange={handleChange}
          required
          className="rounded-xl border border-teal-800/20 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-marigold-500"
        >
          <option value="">Select a department</option>
          {departments.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>

      <Field label="Preferred Date" name="preferredDate" type="date" value={form.preferredDate} onChange={handleChange} />
      <Field label="Preferred Time" name="preferredTime" type="time" value={form.preferredTime} onChange={handleChange} />

      <div className="sm:col-span-2 flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-teal-950">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Briefly describe your concern (optional)"
          className="rounded-xl border border-teal-800/20 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-marigold-500"
        />
      </div>

      {status === "error" && (
        <p className="sm:col-span-2 text-sm text-red-600 font-medium">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="sm:col-span-2 flex items-center justify-center gap-2 bg-marigold-500 hover:bg-marigold-600 disabled:opacity-60 text-teal-950 font-bold px-6 py-3.5 rounded-full transition-colors"
      >
        {status === "loading" && <Loader2 size={18} className="animate-spin" />}
        {status === "loading" ? "Submitting..." : "Request Appointment"}
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
