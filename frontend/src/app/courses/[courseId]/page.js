import Link from "next/link";
import { notFound } from "next/navigation";
import { getCourseDetail } from "@/lib/api";

export default async function CourseDetailPage({ params }) {
  const { courseId } = await params;
  const parsedCourseId = Number(courseId);

  if (Number.isNaN(parsedCourseId)) {
    notFound();
  }

  const course = await getCourseDetail(parsedCourseId);

  if (!course) {
    notFound();
  }

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <p>
        <Link href="/">← Volver al inicio</Link>
      </p>

      <h1>{course.title}</h1>
      <p>{course.description || "Sin descripción disponible."}</p>
      <p><strong>Nivel:</strong> {course.level}</p>

      <hr style={{ margin: "1.5rem 0" }} />

      <section>
        <h2>Unidades</h2>

        {course.units.length === 0 ? (
          <p>Este curso todavía no tiene unidades publicadas.</p>
        ) : (
          course.units.map((unit) => (
            <article key={unit.id} style={{ marginBottom: "2rem" }}>
              <h3>
                Unidad {unit.order}: {unit.title}
              </h3>
              <p>{unit.description || "Sin descripción disponible."}</p>

              {unit.lessons.length === 0 ? (
                <p>Esta unidad todavía no tiene clases.</p>
              ) : (
                <ol>
                  {unit.lessons.map((lesson) => (
                    <li key={lesson.id} style={{ marginBottom: "1rem" }}>
                      <h4>{lesson.title}</h4>
                      <p>{lesson.summary || "Sin resumen disponible."}</p>
                      <p>
                        <strong>Duración estimada:</strong>{" "}
                        {lesson.estimated_minutes} minutos
                      </p>
                      <details>
                        <summary>Ver contenido</summary>
                        <p>{lesson.text_content}</p>
                      </details>
                    </li>
                  ))}
                </ol>
              )}
            </article>
          ))
        )}
      </section>
    </main>
  );
}