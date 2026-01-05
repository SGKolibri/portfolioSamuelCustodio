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
    <div
      className={`bg-white p-8 rounded-2xl border-2 hover:border-blue-400 transition-all duration-300 ${
        isHighlighted ? "border-blue-600 bg-blue-50/30" : "border-gray-200"
      }`}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-6">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
          <div className="flex items-center gap-2 mb-2">
            <p className="text-blue-600 font-semibold text-lg">{company}</p>
            {isHighlighted && (
              <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium">Atual</span>
            )}
          </div>
          <p className="text-gray-600 text-sm">{location}</p>
        </div>
        <span className="text-gray-600 font-medium text-sm bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap">{period}</span>
      </div>
      <ul className="space-y-3 text-gray-700">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-blue-600 font-bold text-lg leading-none mt-0.5">▪</span>
            <span className="leading-relaxed">{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceCard;
