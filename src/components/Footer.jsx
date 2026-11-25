export default function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "1.5rem",
        borderTop: "2px solid #222",
        marginTop: "auto",
      }}
    >
      <p>
        © {new Date().getFullYear()} DYSAS - Melamina, Acabados Metal y
        Servicios Generales.
      </p>
    </footer>
  );
}
