import { useSearchParams, Link } from "react-router-dom";
import { servicesData } from "../data/mockServices";

export default function Services() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "melamina";

  const handleTabChange = (tab) => {
    setSearchParams({ tab });
  };

  const current = servicesData[activeTab];

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Servicios</h1>

      {/* Selector de subsecciones 3.1, 3.2, 3.3 */}
      <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
        <button onClick={() => handleTabChange("melamina")}>
          3.1 Melamina
        </button>
        <button onClick={() => handleTabChange("metal")}>
          3.2 Acabados Metal
        </button>
        <button onClick={() => handleTabChange("generales")}>
          3.3 Servicios Generales
        </button>
      </div>

      {/* Renderizado dinámico según la pestaña */}
      <section style={{ border: "2px solid #222", padding: "1.5rem" }}>
        <h2>{current.title}</h2>
        <p>{current.description}</p>

        {/* Subsecciones 3.1 y 3.2: Fotos y Procesos */}
        {(activeTab === "melamina" || activeTab === "metal") && (
          <>
            <h3>Fotos de trabajos</h3>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              {current.photos.map((photo) => (
                <div
                  key={photo.id}
                  style={{ border: "1px solid #ccc", padding: "0.5rem" }}
                >
                  <img
                    src={photo.url}
                    alt={photo.title}
                    style={{ width: "100%", maxWidth: "300px" }}
                  />
                  <p>{photo.title}</p>
                </div>
              ))}
            </div>

            <h3>Procesos</h3>
            <ul>
              {current.processes.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
          </>
        )}

        {/* Subsección 3.3: Lista de trabajos, presupuestos y cotización */}
        {activeTab === "generales" && (
          <>
            <h3>Lista de trabajos</h3>
            <ul>
              {current.jobList.map((job, i) => (
                <li key={i}>{job}</li>
              ))}
            </ul>
            <div
              style={{
                marginTop: "1.5rem",
                padding: "1rem",
                background: "#f4f4f4",
              }}
            >
              <h3>Presupuestos y Cotización</h3>
              <p>
                ¿Necesitas evaluar un proyecto de soldadura o mantenimiento?
              </p>
              <Link to="/contacto">Solicitar cotización ahora →</Link>
            </div>
          </>
        )}
      </section>
    </main>
  );
}
