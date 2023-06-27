import { Lesson } from "../domain/Lesson";
import { LessonRepository } from "../domain/LessonRepository";
import { pool } from "./postgres/database";

export class PostgresLessonRepository implements LessonRepository {
  async createLesson(lesson: Lesson): Promise<Lesson | null> {
    await pool.query(
      'INSERT INTO public."Lessons" (id_course, lesson_name, level, stars, lesson_icon) VALUES ($1,$2,$3,$4,$5)',
      [
        lesson.id_course,
        lesson.lesson_name,
        lesson.level,
        lesson.stars,
        lesson.lesson_icon,
      ]
    );
    console.log(
      `nombre de la leccion:${lesson.lesson_name} url de la imagen:${lesson.lesson_icon}`
    );
    return lesson;
  }
  async getLessonsByCourseid(courseId: string): Promise<Lesson[] | null> {
    console.log("Buscando las leccion con id " + courseId);
    const query = await pool.query(
      'SELECT * FROM public."Lessons" WHERE id_course = $1',
      [courseId]
    );

    if (query.rows.length == 0) {
      return null;
    }

    const lessons: Lesson[] = query.rows;

    return lessons;
  }
  async getAllLessons(): Promise<Lesson[] | null> {
    try {
      const result = await pool.query('SELECT * FROM public."Lessons"');
      const lessons = result.rows.map((row: any) => {
        return new Lesson(
          row.id,
          row.id_course,
          row.lesson_name,
          row.level,
          row.stars,
          row.lesson_icon
        );
      });
      return lessons;
    } catch (error) {
      console.error("Error al obtener todas las lecciones:", error);
      return []; // En caso de error, devolver una lista vacía
    }
  }
  async getLessonsById(id: string): Promise<Lesson | null> {
    console.log("Buscando la leccion con id " + id);
    const query = await pool.query(
      'SELECT * FROM public."Lessons" WHERE id = $1',
      [id]
    );

    if (query.rows.length == 0) {
      return null;
    }

    const lesson: Lesson = query.rows[0];

    return lesson;
  }
}
