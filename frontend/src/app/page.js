import { getCourses, getHealth } from "@/lib/api";

export default async function HomePage() {
  const health = await getHealth();
  const courses = await getCourses();

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Portafolio E-learning de Teología</h1>
      <p>Primera conexión entre Next.js y Django.</p>

      <hr style={{ margin: "1.5rem 0" }} />

      <section>
        <h2>Estado del backend</h2>
        <p><strong>Status:</strong> {health.status}</p>
        <p><strong>Servicio:</strong> {health.service}</p>
        <p><strong>Mensaje:</strong> {health.message}</p>
      </section>

      <hr style={{ margin: "1.5rem 0" }} />

      <section>
        <h2>Cursos publicados</h2>

        {courses.length === 0 ? (
          <p>No hay cursos publicados todavía.</p>
        ) : (
          <ul>
            {courses.map((course) => (
              <li key={course.id} style={{ marginBottom: "1rem" }}>
                <h3>{course.title}</h3>
                <p>{course.description || "Sin descripción disponible."}</p>
                <p><strong>Nivel:</strong> {course.level}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}