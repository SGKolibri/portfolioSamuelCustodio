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
      className={`bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 ${
        isHighlighted ? "border-blue-600" : "border-gray-300"
      }`}
    >
      <div className="flex flex-wrap justify-between items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-blue-600 font-medium mb-2">{company}</p>
          <p className="text-gray-600">{location}</p>
        </div>
        <span className="text-gray-500 font-medium">{period}</span>
      </div>
      <ul className="space-y-2 text-gray-700">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceCard;
