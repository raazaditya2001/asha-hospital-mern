export default function DoctorCard({ name, qualification, department, experience, bio }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-teal-800/10 hover:shadow-lg transition-shadow">
      <div className="h-40 bg-gradient-to-br from-teal-800 to-teal-900 flex items-center justify-center">
        <span className="font-display text-5xl text-marigold-400 font-semibold">
          {name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-teal-950">{name}</h3>
        <p className="text-sm text-marigold-600 font-semibold mb-1">{department}</p>
        <p className="text-xs text-ink/60 mb-2">{qualification} · {experience}</p>
        {bio && <p className="text-sm text-ink/70 leading-relaxed">{bio}</p>}
      </div>
    </div>
  );
}
