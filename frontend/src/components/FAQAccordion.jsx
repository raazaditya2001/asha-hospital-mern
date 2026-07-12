import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What specialties are available at Asha Multispeciality Hospital?",
    a: "We offer Skin Care, Hair Treatment, Laser Procedures, Ayurveda, General Medicine, Preventive Healthcare, and Pharmacy services under one roof.",
  },
  {
    q: "Do you provide laser treatment for skin problems?",
    a: "Yes. We provide advanced laser procedures for hair reduction, pigmentation, acne scars, skin rejuvenation, mole removal, and more.",
  },
  {
    q: "Is there an in-house pharmacy?",
    a: "Yes. Our fully stocked pharmacy provides genuine medicines for patient convenience right after your consultation.",
  },
  {
    q: "Can I consult for general health issues?",
    a: "Absolutely. Our General Physician department treats fever, diabetes, blood pressure, thyroid disorders, infections, and other common medical conditions.",
  },
  {
    q: "Do you provide Ayurvedic treatment?",
    a: "Yes. Our Ayurveda department offers holistic treatment plans for chronic diseases, skin problems, joint pain, digestive disorders, immunity improvement, and overall wellness.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-teal-800/10 border-y border-teal-800/10">
      {faqs.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q}>
            <button
              className="w-full flex items-center justify-between py-5 text-left gap-4"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              <span className="font-display font-semibold text-teal-950 text-base md:text-lg">
                {item.q}
              </span>
              <ChevronDown
                size={20}
                className={`shrink-0 text-marigold-600 transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen && (
              <p className="pb-5 text-sm md:text-base text-ink/70 leading-relaxed pr-8">{item.a}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
