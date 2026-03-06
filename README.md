# Samuel Custódio — Portfolio

Hello. This is my personal portfolio website built to present my professional background, technical skills, work experience, and contact information in a polished and interactive interface.

> Live demo on [vercel here](https://samuelcustodio.vercel.app/).

---

## About

This portfolio serves as a central point for anyone who wants to learn about my work as a Full Stack Web Developer. It covers my professional trajectory, the technologies I work with, certifications I hold, and ways to get in touch. The site is written entirely in TypeScript with React and was designed with attention to visual detail, performance, and responsiveness across all screen sizes.

---

## Features

- **Animated WebGL background** — A dithered wave rendered with Three.js reacts to mouse position in real time, providing a dynamic visual layer behind all sections.

- **Two color themes** — Main (dark) and Catppuccin Mocha. The selected theme persists via React context and transitions smoothly across all CSS custom properties.

- **Scroll-driven animations** — Sections and text blocks animate into view using Framer Motion and a custom ScrollReveal component with configurable blur and rotation.

- **Loading screen** — A brief branded loading state is shown while the application initializes.

- **Responsive layout** — The interface adapts to mobile, tablet, and desktop viewports using Tailwind CSS breakpoints.

---

## Tech Stack

| Layer          | Technologies                                                                          |
| -------------- | ------------------------------------------------------------------------------------- |
| Framework      | React 18, TypeScript                                                                  |
| Build tool     | Vite                                                                                  |
| Styling        | Tailwind CSS, CSS custom properties                                                   |
| Animations     | Framer Motion, GSAP                                                                   |
| 3D / WebGL     | Three.js, @react-three/fiber, @react-three/postprocessing                             |
| UI components  | shadcn/ui, Lucide React                                                               |
| Visual effects | React Bits (DecryptedText, GradientText, ShinyText, ScrollReveal, Dither, ColorBends) |
| Deployment     | Vercel                                                                                |

## License

This project is open source. Feel free to use it as a reference or template for your own portfolio.
