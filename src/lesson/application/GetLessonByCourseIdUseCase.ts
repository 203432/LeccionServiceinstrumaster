import { LessonRepository } from "../domain/LessonRepository";
export class GetLessonsByCourseIdUseCase {
  constructor(readonly lessonRepository: LessonRepository) {}

  async run(courseId: string) {
    const lessons = await this.lessonRepository.getLessonsByCourseid(courseId);
    return lessons;
  }
}
