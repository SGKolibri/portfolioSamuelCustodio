import { motion } from "framer-motion";
import ThemeSwitcher from "../ui/ThemeSwitcher";
import MobileMenu from "../ui/MobileMenu";
import GradientText from "../reactbits/GradientText";
import { useMemo } from "react";
import { gradientColors } from "../ui/GradientColors";
import { useTheme } from "../../context/ThemeContext";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#contato", label: "Contato" },
];

function Header() {
  const { theme } = useTheme();
  const gradColors = useMemo(
    () => gradientColors[theme] || gradientColors.dark,
    [theme],
  );

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 w-full backdrop-blur-md z-50"
      style={{
        backgroundColor: "var(--bg-overlay)",
        borderBottom: "1px solid var(--border-primary)",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-3xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            <GradientText
              colors={gradColors}
              animationSpeed={6}
              className="tracking-wider font-semibold cursor-default px-2.5"
            >
              SC
            </GradientText>
          </motion.a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative font-medium transition-colors duration-200 group"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--accent-primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-secondary)";
                }}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: "var(--accent-primary)" }}
                />
              </a>
            ))}
            <ThemeSwitcher />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeSwitcher />
            <MobileMenu />
          </div>
        </div>
      </nav>
    </motion.header>
  );
}

export default Header;
