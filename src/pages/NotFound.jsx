import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main style={{ textAlign: "center", padding: "4rem 2rem" }}>
      <h1>404 - NOT FOUND</h1>
      <p>La página que buscas no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </main>
  );
}
