import { LessonRepository } from "../domain/LessonRepository";

export class GetLessonByIdUseCase {
  constructor(readonly lessonRepository: LessonRepository) {}

  async run(id: string) {
    const lesson = await this.lessonRepository.getLessonsById(id);
    return lesson;
  }
}
