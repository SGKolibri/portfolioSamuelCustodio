function Footer() {
  return (
    <footer
      className="py-8"
      style={{
        backgroundColor: "var(--footer-bg)",
        color: "var(--footer-text)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p style={{ color: "var(--footer-text)" }}>
          2026 Samuel Custódio. Desenvolvedor Full Stack.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
