import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import DoctorCard from "../components/DoctorCard";
import api from "../api/axios";

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/doctors")
      .then((res) => setDoctors(res.data.data))
      .catch(() => setDoctors([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <section className="bg-teal-100 py-16 md:py-20 text-center">
        <div className="max-w-3xl mx-auto px-5">
          <span className="text-marigold-600 font-bold text-sm tracking-widest uppercase">Our Team</span>
          <h1 className="font-display text-3xl md:text-5xl font-semibold text-teal-950 mt-3 mb-5">
            Experienced specialists you can trust
          </h1>
          <p className="text-base md:text-lg text-ink/70 leading-relaxed">
            Our medical team carefully evaluates each patient's history, symptoms and lifestyle
            before designing an individualized treatment plan.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-16">
        {loading && (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-teal-800" size={32} />
          </div>
        )}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doc) => (
            <DoctorCard key={doc._id} {...doc} />
          ))}
        </div>
      </section>
    </>
  );
}
