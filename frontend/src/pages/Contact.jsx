import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "../components/ContactForm";

const info = [
  { icon: MapPin, label: "Address", value: "Rajeev Nagar, Bhopal, Madhya Pradesh" },
  { icon: Phone, label: "Phone", value: "+91 12345 67890" },
  { icon: Mail, label: "Email", value: "care@ashahospital.in" },
  { icon: Clock, label: "Hours", value: "Mon–Sat: 9:00 AM – 8:00 PM" },
];

export default function Contact() {
  return (
    <>
      <section className="bg-teal-100 py-16 md:py-20 text-center">
        <div className="max-w-3xl mx-auto px-5">
          <span className="text-marigold-600 font-bold text-sm tracking-widest uppercase">Contact</span>
          <h1 className="font-display text-3xl md:text-5xl font-semibold text-teal-950 mt-3 mb-5">
            We're here to help
          </h1>
          <p className="text-base md:text-lg text-ink/70 leading-relaxed">
            Reach out for any question about our departments, treatments, or to plan your visit.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-16 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-6">
          {info.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex gap-4 items-start bg-teal-50 rounded-2xl p-5 border border-teal-800/10">
              <div className="w-11 h-11 rounded-xl bg-teal-800 flex items-center justify-center text-marigold-400 shrink-0">
                <Icon size={20} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-ink/50">{label}</p>
                <p className="font-semibold text-teal-950">{value}</p>
              </div>
            </div>
          ))}
          <div className="rounded-2xl overflow-hidden border border-teal-800/10 h-56">
            <iframe
              title="Asha Multispeciality Hospital Location"
              src="https://www.google.com/maps?q=Rajeev+Nagar,+Bhopal&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="lg:col-span-3 bg-white rounded-3xl border border-teal-800/10 p-6 md:p-10 shadow-sm">
          <h2 className="font-display text-2xl font-semibold text-teal-950 mb-6">Send us a message</h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
