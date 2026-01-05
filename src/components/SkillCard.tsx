import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  skills: string;
}

function SkillCard({ icon: Icon, title, skills }: SkillCardProps) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="text-blue-600" size={28} />
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-700">{skills}</p>
    </div>
  );
}

export default SkillCard;
