import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import api from "../api/axios";

const categories = [
  "Skin Care",
  "Hair Treatment",
  "Laser Treatment",
  "Ayurveda",
  "General Medicine",
  "Preventive Healthcare",
  "Pharmacy",
];

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/services")
      .then((res) => setServices(res.data.data))
      .catch(() => setServices([]))
      .finally(() => setLoading(false));
  }, []);

  const grouped = categories
    .map((cat) => ({ cat, items: services.filter((s) => s.category === cat) }))
    .filter((g) => g.items.length > 0);

  return (
    <>
      <section className="bg-teal-100 py-16 md:py-20 text-center">
        <div className="max-w-3xl mx-auto px-5">
          <span className="text-marigold-600 font-bold text-sm tracking-widest uppercase">Our Services</span>
          <h1 className="font-display text-3xl md:text-5xl font-semibold text-teal-950 mt-3 mb-5">
            Every treatment, one hospital
          </h1>
          <p className="text-base md:text-lg text-ink/70 leading-relaxed">
            Explore our full range of dermatology, hair, laser, Ayurveda, general medicine and
            preventive healthcare services.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-16">
        {loading && (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-teal-800" size={32} />
          </div>
        )}

        {!loading && services.length === 0 && (
          <p className="text-center text-ink/60">
            Services are being updated. Please check back shortly, or{" "}
            <Link to="/contact" className="text-marigold-600 font-semibold">contact us</Link> for details.
          </p>
        )}

        {grouped.map(({ cat, items }) => (
          <div key={cat} className="mb-16 last:mb-0">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-teal-950 mb-6">{cat}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((s) => (
                <ServiceCard key={s._id} title={s.title} description={s.description} icon={s.icon} />
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-4">
          <Link
            to="/book-appointment"
            className="inline-flex items-center gap-2 bg-marigold-500 hover:bg-marigold-600 text-teal-950 font-bold px-7 py-3.5 rounded-full transition-colors"
          >
            Book an Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
