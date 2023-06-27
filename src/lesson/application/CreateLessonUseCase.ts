import { Lesson } from "../domain/Lesson";
import { LessonRepository } from "../domain/LessonRepository";

export class CreateLessonUseCase {
  constructor(readonly lessonRepository: LessonRepository) {}

  async run(lesson: Lesson) {
    await this.lessonRepository.createLesson(lesson);
  }
}
