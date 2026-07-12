import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import PulseLeaf from "./PulseLeaf";

export default function Footer() {
  return (
    <footer className="bg-teal-950 text-teal-50 mt-24">
      <PulseLeaf color="#D99A2B" className="opacity-60" />
      <div className="max-w-6xl mx-auto px-5 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">🌿</span>
            <span className="font-display text-lg font-semibold">Asha Multispeciality Hospital</span>
          </div>
          <p className="text-sm text-teal-100/70 leading-relaxed">
            Trusted Skin, Hair, Laser, Ayurveda &amp; General Healthcare — under one roof in Bhopal.
          </p>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold mb-3 text-marigold-400">Departments</h4>
          <ul className="space-y-2 text-sm text-teal-100/80">
            <li><Link to="/services" className="hover:text-marigold-400">Skin Care</Link></li>
            <li><Link to="/services" className="hover:text-marigold-400">Hair Treatment</Link></li>
            <li><Link to="/services" className="hover:text-marigold-400">Laser Treatment</Link></li>
            <li><Link to="/services" className="hover:text-marigold-400">Ayurveda</Link></li>
            <li><Link to="/services" className="hover:text-marigold-400">General Medicine</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold mb-3 text-marigold-400">Quick Links</h4>
          <ul className="space-y-2 text-sm text-teal-100/80">
            <li><Link to="/about" className="hover:text-marigold-400">About Us</Link></li>
            <li><Link to="/doctors" className="hover:text-marigold-400">Our Doctors</Link></li>
            <li><Link to="/book-appointment" className="hover:text-marigold-400">Book Appointment</Link></li>
            <li><Link to="/contact" className="hover:text-marigold-400">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold mb-3 text-marigold-400">Reach Us</h4>
          <ul className="space-y-3 text-sm text-teal-100/80">
            <li className="flex gap-2"><MapPin size={17} className="shrink-0 mt-0.5" /> Rajeev Nagar, Bhopal, Madhya Pradesh</li>
            <li className="flex gap-2"><Phone size={17} className="shrink-0 mt-0.5" /> +91 12345 67890</li>
            <li className="flex gap-2"><Mail size={17} className="shrink-0 mt-0.5" /> care@ashahospital.in</li>
            <li className="flex gap-2"><Clock size={17} className="shrink-0 mt-0.5" /> Mon–Sat: 9:00 AM – 8:00 PM</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-teal-100/10 py-5 text-center text-xs text-teal-100/50">
        © {new Date().getFullYear()} Asha Multispeciality Hospital. All rights reserved.
      </div>
    </footer>
  );
}
