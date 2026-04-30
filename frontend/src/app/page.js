import { getHealth } from "@/lib/api";

export default async function HomePage() {
  const health = await getHealth();

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Portafolio E-learning de Teología</h1>
      <p>Primera conexión entre Next.js y Django.</p>

      <hr style={{ margin: "1.5rem 0" }} />

      <h2>Estado del backend</h2>
      <p><strong>Status:</strong> {health.status}</p>
      <p><strong>Servicio:</strong> {health.service}</p>
      <p><strong>Mensaje:</strong> {health.message}</p>
    </main>
  );
}