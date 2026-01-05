import { Award } from "lucide-react";

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  tags: string[];
}

function CertificationCard({ title, issuer, date, tags }: CertificationCardProps) {
  return (
    <div className="bg-white border-2 border-blue-600 p-8 rounded-2xl hover:border-blue-700 transition-all duration-300 flex flex-col items-center text-center">
      <div className="bg-blue-600 p-4 rounded-full mb-4">
        <Award size={40} className="text-white" />
      </div>
      <h4 className="text-xl font-bold text-gray-900 mb-2">
        {title}
      </h4>
      <p className="text-blue-600 font-semibold mb-2">
        {issuer}
      </p>
      <p className="text-gray-600 text-sm mb-4">
        {date}
      </p>
      <div className="flex flex-wrap gap-2 justify-center">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default CertificationCard;
