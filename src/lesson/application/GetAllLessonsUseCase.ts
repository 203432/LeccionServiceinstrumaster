import { LessonRepository } from "../domain/LessonRepository";
export class GetAllLessonsUseCase {
  constructor(readonly lessonRepository: LessonRepository) {}

  async run() {
    const lessons = await this.lessonRepository.getAllLessons();
    return lessons;
  }
}
