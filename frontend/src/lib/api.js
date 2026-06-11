const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getHealth() {
  const response = await fetch(`${API_BASE_URL}/api/health/`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("No se pudo obtener el estado del backend");
  }

  return response.json();
}

export async function getCourses() {
  const response = await fetch(`${API_BASE_URL}/api/courses/`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("No se pudieron obtener los cursos");
  }

  return response.json();
}

export async function getCourseDetail(courseId) {
  const response = await fetch(`${API_BASE_URL}/api/courses/${courseId}/`, {
    cache: "no-store",
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("No se pudo obtener el detalle del curso");
  }

  return response.json();
}