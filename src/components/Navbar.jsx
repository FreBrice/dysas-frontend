import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header style={styles.header}>
      <Link to="/" style={styles.logo}>
        DYSAS
      </Link>
      <nav style={styles.nav}>
        <Link to="/quienes-somos" style={styles.link}>
          Quiénes somos
        </Link>
        <Link to="/servicios" style={styles.link}>
          Servicios
        </Link>
        <Link to="/contacto" style={styles.link}>
          Contacto
        </Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    borderBottom: "2px solid #222",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    textDecoration: "none",
    color: "#111",
    border: "2px solid #111",
    padding: "0.2rem 0.8rem",
  },
  nav: { display: "flex", gap: "1.5rem" },
  link: { textDecoration: "none", color: "#222", fontWeight: "500" },
};
