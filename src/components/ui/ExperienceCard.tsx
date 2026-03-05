import { motion } from "framer-motion";

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
  isHighlighted?: boolean;
}

function ExperienceCard({
  title,
  company,
  location,
  period,
  achievements,
  isHighlighted = false,
}: ExperienceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="p-8 rounded-2xl border-2 transition-all duration-300"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: isHighlighted ? "var(--accent-primary)" : "var(--border-primary)",
        boxShadow: "var(--shadow-sm)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--accent-primary)";
        e.currentTarget.style.boxShadow = "var(--shadow-md)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = isHighlighted
          ? "var(--accent-primary)"
          : "var(--border-primary)";
        e.currentTarget.style.boxShadow = "var(--shadow-sm)";
      }}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-6">
        <div className="flex-1">
          <h3
            className="text-2xl font-bold mb-2"
            style={{ color: "var(--text-primary)" }}
          >
            {title}
          </h3>
          <div className="flex items-center gap-2 mb-2">
            <p
              className="font-semibold text-lg"
              style={{ color: "var(--accent-primary)" }}
            >
              {company}
            </p>
            {isHighlighted && (
              <span
                className="text-xs px-2 py-1 rounded-full font-medium"
                style={{
                  backgroundColor: "var(--accent-primary)",
                  color: "var(--text-inverse)",
                }}
              >
                Atual
              </span>
            )}
          </div>
          <p
            className="text-sm"
            style={{ color: "var(--text-tertiary)" }}
          >
            {location}
          </p>
        </div>
        <span
          className="font-medium text-sm px-3 py-1 rounded-full whitespace-nowrap"
          style={{
            color: "var(--text-secondary)",
            backgroundColor: "var(--bg-tertiary)",
          }}
        >
          {period}
        </span>
      </div>
      <ul className="space-y-3">
        {achievements.map((achievement, index) => (
          <li
            key={index}
            className="flex items-start gap-3"
            style={{ color: "var(--text-secondary)" }}
          >
            <span
              className="font-bold text-lg leading-none mt-0.5"
              style={{ color: "var(--accent-primary)" }}
            >
              ▪
            </span>
            <span className="leading-relaxed">{achievement}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default ExperienceCard;
