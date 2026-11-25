import { Link } from "react-router-dom";

export default function Home() {
  const cards = [
    {
      title: "MELAMINA",
      subtitle: "(Acabados madera)",
      path: "/servicios?tab=melamina",
    },
    {
      title: "ACABADOS METAL",
      subtitle: "Estructuras y herrería",
      path: "/servicios?tab=metal",
    },
    {
      title: "SERVICIOS GENERALES",
      subtitle: "(Soldadura y mantenimiento)",
      path: "/servicios?tab=generales",
    },
  ];

  return (
    <main style={{ padding: "2rem" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
          minHeight: "60vh",
        }}
      >
        {cards.map((card, index) => (
          <Link key={index} to={card.path} style={styles.column}>
            <h2>{card.title}</h2>
            <p>{card.subtitle}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}

const styles = {
  column: {
    border: "2px solid #222",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    color: "#111",
    padding: "2rem",
    textAlign: "center",
  },
};
