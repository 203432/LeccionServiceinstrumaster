import { Lesson } from "./Lesson";

export interface LessonRepository {
  createLesson(lesson: Lesson): Promise<Lesson | null>;
  getLessonsByCourseid(courseId: string): Promise<Lesson[] | null>;
  getAllLessons(): Promise<Lesson[] | null>;
  getLessonsById(id: string): Promise<Lesson | null>;
}
