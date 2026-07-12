import AppointmentForm from "../components/AppointmentForm";
import { Phone, Clock } from "lucide-react";

export default function BookAppointment() {
  return (
    <section className="max-w-3xl mx-auto px-5 py-16 md:py-20">
      <div className="text-center mb-10">
        <span className="text-marigold-600 font-bold text-sm tracking-widest uppercase">Appointment</span>
        <h1 className="font-display text-3xl md:text-5xl font-semibold text-teal-950 mt-3 mb-4">
          Book your consultation
        </h1>
        <p className="text-ink/70 leading-relaxed max-w-xl mx-auto">
          Fill in your details below and our team will call to confirm your appointment slot.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-ink/60">
          <span className="flex items-center gap-2"><Phone size={16} /> +91 12345 67890</span>
          <span className="flex items-center gap-2"><Clock size={16} /> Mon–Sat, 9 AM – 8 PM</span>
        </div>
      </div>
      <div className="bg-white rounded-3xl border border-teal-800/10 p-6 md:p-10 shadow-sm">
        <AppointmentForm />
      </div>
    </section>
  );
}
