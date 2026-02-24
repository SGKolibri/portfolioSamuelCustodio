import { Award } from "lucide-react";
import { motion } from "framer-motion";

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  tags: string[];
}

function CertificationCard({ title, issuer, date, tags }: CertificationCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="p-8 rounded-2xl border-2 flex flex-col items-center text-center transition-all max-w-sm"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--accent-primary)",
        boxShadow: "var(--shadow-md)",
      }}
    >
      <div
        className="p-4 rounded-full mb-4"
        style={{ backgroundColor: "var(--accent-primary)" }}
      >
        <Award size={40} style={{ color: "var(--text-inverse)" }} />
      </div>
      <h4
        className="text-xl font-bold mb-2"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h4>
      <p
        className="font-semibold mb-2"
        style={{ color: "var(--accent-primary)" }}
      >
        {issuer}
      </p>
      <p
        className="text-sm mb-4"
        style={{ color: "var(--text-tertiary)" }}
      >
        {date}
      </p>
      <div className="flex flex-wrap gap-2 justify-center">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs px-3 py-1 rounded-full font-medium"
            style={{
              backgroundColor: "var(--tag-bg)",
              color: "var(--tag-text)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default CertificationCard;
