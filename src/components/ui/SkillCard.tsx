import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  skills: string;
}

function SkillCard({ icon: Icon, title, skills }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="p-6 rounded-xl border transition-all"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border-primary)",
        boxShadow: "var(--shadow-sm)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--accent-primary)";
        e.currentTarget.style.boxShadow = "var(--shadow-md)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border-primary)";
        e.currentTarget.style.boxShadow = "var(--shadow-sm)";
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="p-2 rounded-lg"
          style={{ backgroundColor: "var(--tag-bg)" }}
        >
          <Icon style={{ color: "var(--accent-primary)" }} size={24} />
        </div>
        <h3
          className="text-xl font-bold"
          style={{ color: "var(--text-primary)" }}
        >
          {title}
        </h3>
      </div>
      <p style={{ color: "var(--text-secondary)" }}>{skills}</p>
    </motion.div>
  );
}

export default SkillCard;
