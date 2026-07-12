import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Stethoscope, Sparkles, Zap, Leaf, ShieldCheck, Pill,
  ArrowRight, Award, Users, Clock, MapPin,
} from "lucide-react";
import PulseLeaf from "../components/PulseLeaf";
import FAQAccordion from "../components/FAQAccordion";
import api from "../api/axios";

const departments = [
  { icon: Sparkles, title: "Skin Care", desc: "Acne, pigmentation, eczema, psoriasis & more.", to: "/services" },
  { icon: Users, title: "Hair Treatment", desc: "Hair fall, PRP therapy, alopecia care.", to: "/services" },
  { icon: Zap, title: "Laser Treatment", desc: "Hair reduction, tattoo removal, skin rejuvenation.", to: "/services" },
  { icon: Leaf, title: "Ayurveda", desc: "Panchakarma, joint pain, holistic wellness.", to: "/services" },
  { icon: Stethoscope, title: "General Medicine", desc: "Fever, diabetes, BP, thyroid & checkups.", to: "/services" },
  { icon: Pill, title: "In-House Pharmacy", desc: "Genuine medicines, right after consultation.", to: "/services" },
];

const whyChoose = [
  { icon: Award, text: "Experienced specialist doctors" },
  { icon: ShieldCheck, text: "Evidence-based treatment plans" },
  { icon: Clock, text: "Quick diagnosis, minimal waiting" },
  { icon: Pill, text: "Fully stocked in-house pharmacy" },
];

export default function Home() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    api.get("/doctors").then((res) => setDoctors(res.data.data.slice(0, 3))).catch(() => {});
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-teal-100 to-teal-50">
        <div className="max-w-6xl mx-auto px-5 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-marigold-100 text-marigold-600 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5">
              Rajeev Nagar, Bhopal
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.4rem] font-semibold text-teal-950 leading-[1.08] mb-5">
              Modern medicine and Ayurveda, <span className="text-marigold-600">under one roof.</span>
            </h1>
            <p className="text-base md:text-lg text-ink/70 leading-relaxed mb-8 max-w-lg">
              Skin, hair, laser, Ayurveda and general healthcare — delivered by experienced
              specialists with personalized, affordable, evidence-based care.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/book-appointment"
                className="inline-flex items-center gap-2 bg-marigold-500 hover:bg-marigold-600 text-teal-950 font-bold px-7 py-3.5 rounded-full transition-colors"
              >
                Book Appointment <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border-2 border-teal-800/20 hover:border-teal-800/40 text-teal-900 font-bold px-7 py-3.5 rounded-full transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[2.5rem] bg-teal-800 relative overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-700 via-teal-800 to-teal-950" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[9rem]">🌿</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-2xl p-5 flex items-center gap-4">
                <div className="bg-teal-100 rounded-xl p-3">
                  <Stethoscope className="text-teal-800" size={24} />
                </div>
                <div>
                  <p className="font-display font-semibold text-teal-950">6 Specialities</p>
                  <p className="text-xs text-ink/60">Comprehensive care, one location</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PulseLeaf color="#0E5C56" />
      </section>

      {/* Why choose */}
      <section className="max-w-6xl mx-auto px-5 py-14 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {whyChoose.map(({ icon: Icon, text }) => (
          <div key={text} className="flex flex-col gap-3 items-start">
            <div className="w-11 h-11 rounded-xl bg-teal-100 flex items-center justify-center text-teal-800">
              <Icon size={22} />
            </div>
            <p className="text-sm font-semibold text-teal-950 leading-snug">{text}</p>
          </div>
        ))}
      </section>

      {/* Departments */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="max-w-xl mb-12">
            <span className="text-marigold-600 font-bold text-sm tracking-widest uppercase">Our Specialities</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-teal-950 mt-2">
              Comprehensive healthcare, one address
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map(({ icon: Icon, title, desc, to }) => (
              <Link
                key={title}
                to={to}
                className="group bg-teal-50 rounded-2xl p-6 border border-teal-800/10 hover:border-marigold-400 hover:shadow-lg transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-teal-800 flex items-center justify-center mb-4 text-marigold-400">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-lg font-semibold text-teal-950 mb-1.5">{title}</h3>
                <p className="text-sm text-ink/70 leading-relaxed mb-3">{desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-marigold-600 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors preview */}
      {doctors.length > 0 && (
        <section className="max-w-6xl mx-auto px-5 py-20">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <span className="text-marigold-600 font-bold text-sm tracking-widest uppercase">Our Team</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-teal-950 mt-2">
                Meet our specialists
              </h2>
            </div>
            <Link to="/doctors" className="text-sm font-semibold text-teal-800 hover:text-marigold-600 inline-flex items-center gap-1">
              View all doctors <ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doc) => (
              <div key={doc._id} className="bg-white rounded-2xl overflow-hidden border border-teal-800/10">
                <div className="h-32 bg-gradient-to-br from-teal-800 to-teal-900 flex items-center justify-center">
                  <span className="font-display text-4xl text-marigold-400 font-semibold">
                    {doc.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-teal-950">{doc.name}</h3>
                  <p className="text-sm text-marigold-600 font-semibold">{doc.department}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Location + CTA */}
      <section className="bg-teal-900 text-teal-50">
        <div className="max-w-6xl mx-auto px-5 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-marigold-400 font-bold text-sm tracking-widest uppercase">Visit Us</span>
            <h2 className="font-display text-3xl font-semibold mt-2 mb-4">
              Conveniently located in Rajeev Nagar, Bhopal
            </h2>
            <p className="flex items-center gap-2 text-teal-100/80 mb-6">
              <MapPin size={18} /> Easily accessible for patients across the city.
            </p>
            <Link
              to="/book-appointment"
              className="inline-flex items-center gap-2 bg-marigold-500 hover:bg-marigold-600 text-teal-950 font-bold px-7 py-3.5 rounded-full transition-colors"
            >
              Book Your Consultation <ArrowRight size={18} />
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden border border-teal-100/10 h-64">
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
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-5 py-20">
        <div className="text-center mb-10">
          <span className="text-marigold-600 font-bold text-sm tracking-widest uppercase">FAQs</span>
          <h2 className="font-display text-3xl font-semibold text-teal-950 mt-2">Common questions</h2>
        </div>
        <FAQAccordion />
      </section>
    </>
  );
}
