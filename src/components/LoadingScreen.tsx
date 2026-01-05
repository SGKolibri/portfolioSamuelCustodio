import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [opacity, setOpacity] = useState("opacity-100");

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setOpacity("opacity-0");
    }, 2000);

    const removeTimer = setTimeout(() => {
      setIsVisible(false);
      onLoadingComplete();
    }, 2800);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 bg-white z-50 flex items-center justify-center transition-opacity duration-800 ${opacity}`}
    >
      <div className="text-center">
        <h1 className="text-8xl md:text-9xl font-bold text-blue-600 animate-pulse">
          SC
        </h1>
      </div>
    </div>
  );
}

export default LoadingScreen;
