import { ThemeProvider, useTheme, type Theme } from "./context/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Dither from "./components/reactbits/Dither";
import ColorBends from "./components/reactbits/ColorBends";

// RGB wave colors per theme (values in 0–1 range)
const THEME_COLORS: Record<Theme, [number, number, number]> = {
  light: [0.231, 0.51, 0.965], // #3b82f6 blue
  dark: [0.376, 0.647, 0.98], // #60a5fa light blue
  catppuccin: [0.537, 0.706, 0.98], // #89b4fa lavender blue
};

function AppContent() {
  const { theme } = useTheme();

  return (
    <>
      <div className="fixed inset-0 -z-10">
        <Dither
          waveColor={THEME_COLORS[theme]}
          disableAnimation={false}
          enableMouseInteraction
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>
      <div className="min-h-screen">
        <Header />
        <main className="pt-16">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
