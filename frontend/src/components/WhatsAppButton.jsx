import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/911234567890?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20Asha%20Multispeciality%20Hospital"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:brightness-95 text-white rounded-full p-4 shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle size={26} fill="white" strokeWidth={0} />
    </a>
  );
}
