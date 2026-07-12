import { ShieldCheck, HeartHandshake, Microscope, Wallet } from "lucide-react";
import PulseLeaf from "../components/PulseLeaf";

const values = [
  { icon: HeartHandshake, title: "Patient-Centered Healthcare", desc: "Every patient receives personalized attention and continuous support throughout their journey." },
  { icon: Microscope, title: "Evidence-Based Treatment", desc: "Modern diagnostic facilities and evidence-based treatment plans guide every recommendation." },
  { icon: Wallet, title: "Affordable Care", desc: "Quality healthcare at reasonable costs, without compromising medical excellence." },
  { icon: ShieldCheck, title: "Patient Safety First", desc: "Strict hygiene standards, sterilized equipment, and ethical clinical protocols." },
];

export default function About() {
  return (
    <>
      <section className="bg-teal-100 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <span className="text-marigold-600 font-bold text-sm tracking-widest uppercase">About Us</span>
          <h1 className="font-display text-3xl md:text-5xl font-semibold text-teal-950 mt-3 mb-5">
            Trust, care and long-term wellness
          </h1>
          <p className="text-base md:text-lg text-ink/70 leading-relaxed">
            Asha Multispeciality Hospital has emerged as one of the most trusted healthcare centers
            in Bhopal, providing comprehensive medical services in Skin Care, Hair Treatment, Laser
            Procedures, Ayurveda, General Medicine and Pharmacy — all under one roof.
          </p>
        </div>
      </section>
      <PulseLeaf color="#0E5C56" />

      <section className="max-w-5xl mx-auto px-5 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-teal-950 mb-4">Our Mission</h2>
            <p className="text-ink/70 leading-relaxed mb-4">
              Our mission is to deliver exceptional healthcare by combining experienced medical
              professionals, modern diagnostic facilities, advanced treatment technologies, and
              compassionate patient care.
            </p>
            <p className="text-ink/70 leading-relaxed">
              We believe every patient deserves accurate diagnosis, effective treatment, and
              continuous support — from the first consultation through full recovery.
            </p>
          </div>
          <div className="aspect-video rounded-2xl bg-teal-800 flex items-center justify-center text-7xl">
            🩺
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-teal-50 rounded-2xl p-6 border border-teal-800/10">
              <div className="w-11 h-11 rounded-xl bg-teal-800 flex items-center justify-center mb-4 text-marigold-400">
                <Icon size={22} />
              </div>
              <h3 className="font-display text-lg font-semibold text-teal-950 mb-1.5">{title}</h3>
              <p className="text-sm text-ink/70 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
