import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    nombres: "",
    telefono: "",
    correo: "",
    mensaje: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos listos para enviar al backend:", formData);
    alert("Mensaje enviado. Pronto nos pondremos en contacto.");
    setFormData({ nombres: "", telefono: "", correo: "", mensaje: "" });
  };

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Contacto</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
        }}
      >
        {/* Columna izquierda: Formulario */}
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            border: "2px solid #222",
            padding: "1.5rem",
          }}
        >
          <input
            type="text"
            name="nombres"
            placeholder="Nombres"
            value={formData.nombres}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="correo"
            placeholder="Correo"
            value={formData.correo}
            onChange={handleChange}
            required
          />
          <textarea
            name="mensaje"
            placeholder="Mensaje o detalle de cotización"
            rows="4"
            value={formData.mensaje}
            onChange={handleChange}
            required
          />
          <button type="submit">Enviar Mensaje</button>
        </form>

        {/* Columna derecha: Redes sociales y WhatsApp */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "1rem",
            padding: "1.5rem",
          }}
        >
          <h3>Canales directos</h3>
          <p>
            <strong>Redes Sociales:</strong> @dysas.oficial (Instagram /
            Facebook)
          </p>
          <p>
            <strong>Teléfono / WhatsApp:</strong>{" "}
            <a
              href="https://wa.me/34000000000"
              target="_blank"
              rel="noreferrer"
            >
              Escribir al WhatsApp directo
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
