export default function Footer() {
  return (
    <footer
      className="w-full py-12 px-6"
      style={{ borderTop: "1px solid var(--color-border)" }}
    >
      <div
        className="mx-auto flex flex-col items-center justify-center text-center"
        
      >
        <p
          style={{
            fontSize: "var(--text-sm)",
            color: "var(--color-text-muted)",
            fontWeight: 400,
            lineHeight: 1.7,
            padding: "2rem 0",
          }}
        >
          © {new Date().getFullYear()} Ingredientes que inspiran. Todos los
          derechos reservados.
        </p>
      </div>
    </footer>
  );
}