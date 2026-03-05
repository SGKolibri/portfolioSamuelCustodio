import { Github, Mountain } from "lucide-react";
import { motion } from "framer-motion";
import profileImage from "../assets/me.jpg";
import DecryptedText from "./reactbits/DecryptedText";
import GradientText from "./reactbits/GradientText";
import ShinyText from "./reactbits/ShinyText";
import { useTheme } from "../context/ThemeContext";
import { useMemo } from "react";

const gradientColors: Record<string, string[]> = {
  light: ["#3b82f6", "#6366f1", "#8b5cf6"],
  dark: ["#60a5fa", "#818cf8", "#c084fc"],
  catppuccin: ["#89b4fa", "#cba6f7", "#f5c2e7"],
};

function Hero() {
  const { theme } = useTheme();
  const gradColors = useMemo(
    () => gradientColors[theme] || gradientColors.dark,
    [theme],
  );

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Overlay for text legibility over the fixed Dither background */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ backgroundColor: "var(--bg-overlay)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="w-fit flex items-center text-center flex-col mx-auto">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-8 flex justify-center"
          >
            <img
              src={profileImage}
              alt="Samuel Custódio"
              className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4"
              style={{
                borderColor: "var(--accent-primary)",
                boxShadow: "var(--shadow-xl)",
              }}
            />
          </motion.div>

          {/* Name with DecryptedText (React Bits) */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-7xl font-bold mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            <DecryptedText
              text="Samuel Custódio"
              animateOn="view"
              speed={60}
              maxIterations={15}
              sequential
              revealDirection="start"
              className="font-bold"
              encryptedClassName="opacity-60"
            />
          </motion.h1>

          {/* Role title with GradientText (React Bits) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mb-8"
          >
            <GradientText
              colors={gradColors}
              animationSpeed={6}
              className="text-xl md:text-3xl font-semibold cursor-default px-1 backdrop-blur-sm"
            >
              &nbsp;Desenvolvedor Web Full Stack&nbsp;
            </GradientText>
          </motion.div>
          
          <div className="w-fit flex items-center  bg-[#00000030] px-1 mb-6 rounded-lg backdrop-blur-sm text-pretty">
            {/* Description with ShinyText (React Bits) highlights */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-md md:text-lg max-w-2xl mx-auto my-2 leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Engenheiro de software com base sólida em{" "}
              <ShinyText
                text="Desenvolvimento Web Full Stack"
                speed={3}
                color="var(--text-primary)"
                shineColor="var(--accent-primary)"
                className="font-semibold"
              />
              .
              <ShinyText
                text="AWS Certified Cloud Practitioner"
                speed={4}
                delay={1.5}
                color="var(--accent-primary)"
                shineColor="var(--accent-secondary)"
                className="font-semibold"
              />{" "}
              com experiência em arquitetura de software, otimização de
              performance e CI/CD.
            </motion.p>
          </div>
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#contato"
              className="px-8 py-3 rounded-xl font-medium transition-colors"
              style={{
                backgroundColor: "var(--accent-primary)",
                color: "var(--text-inverse)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "var(--accent-primary-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--accent-primary)";
              }}
            >
              Entre em Contato
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/SGKolibri"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-xl font-medium flex items-center gap-2 border-2 transition-colors backdrop-blur-sm"
              style={{
                borderColor: "var(--border-secondary)",
                color: "var(--text-primary)",
                backgroundColor: "var(--bg-card)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent-primary)";
                e.currentTarget.style.color = "var(--accent-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-secondary)";
                e.currentTarget.style.color = "var(--text-primary)";
              }}
            >
              <Github size={20} />
              GitHub
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://codeberg.org/SGKolibri"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-xl font-medium flex items-center gap-2 border-2 transition-colors backdrop-blur-sm"
              style={{
                borderColor: "var(--border-secondary)",
                color: "var(--text-primary)",
                backgroundColor: "var(--bg-card)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent-primary)";
                e.currentTarget.style.color = "var(--accent-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-secondary)";
                e.currentTarget.style.color = "var(--text-primary)";
              }}
            >
              <Mountain size={20} />
              Codeberg
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
