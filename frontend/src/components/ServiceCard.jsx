import * as Icons from "lucide-react";

export default function ServiceCard({ title, description, icon }) {
  const Icon = Icons[toPascal(icon)] || Icons.Stethoscope;
  return (
    <div className="bg-white rounded-2xl p-6 border border-teal-800/10 hover:border-marigold-400 hover:shadow-lg transition-all">
      <div className="w-11 h-11 rounded-xl bg-teal-100 flex items-center justify-center mb-4 text-teal-800">
        <Icon size={22} />
      </div>
      <h3 className="font-display text-lg font-semibold text-teal-950 mb-1.5">{title}</h3>
      {description && <p className="text-sm text-ink/70 leading-relaxed">{description}</p>}
    </div>
  );
}

function toPascal(str = "") {
  return str
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
}
