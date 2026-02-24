import { Sun, Moon, Palette } from "lucide-react";
import { useTheme, type Theme } from "../../context/ThemeContext";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const themeConfig: { id: Theme; label: string; icon: typeof Sun; description: string }[] = [
//   { id: "light", label: "Claro", icon: Sun, description: "Tema claro" },
  { id: "dark", label: "Padrão", icon: Moon, description: "Tema padrão" },
  { id: "catppuccin", label: "Catppuccin", icon: Palette, description: "Catppuccin Mocha" },
];

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const currentTheme = themeConfig.find((t) => t.id === theme) || themeConfig[0];
  const CurrentIcon = currentTheme.icon;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={menuRef} className="relative">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-xl transition-colors duration-200"
        style={{
          backgroundColor: "var(--bg-tertiary)",
          color: "var(--text-primary)",
        }}
        aria-label="Alternar tema"
      >
        <CurrentIcon size={20} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 rounded-xl overflow-hidden z-[100] min-w-[160px]"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-primary)",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            {themeConfig.map((t) => {
              const Icon = t.icon;
              const isActive = theme === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id);
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors duration-150"
                  style={{
                    backgroundColor: isActive ? "var(--bg-tertiary)" : "transparent",
                    color: isActive ? "var(--accent-primary)" : "var(--text-secondary)",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = "var(--bg-secondary)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }
                  }}
                >
                  <Icon size={16} />
                  <span className="font-medium">{t.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="theme-indicator"
                      className="ml-auto w-2 h-2 rounded-full"
                      style={{ backgroundColor: "var(--accent-primary)" }}
                    />
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ThemeSwitcher;
