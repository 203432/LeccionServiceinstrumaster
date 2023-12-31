import { config } from "dotenv";
import { Request, Response } from "express";

import { GetLessonByIdUseCase } from "../../application/GetLessonByIdUseCase";
import { Lesson } from "../../domain/Lesson";
config();
export class GetLessonByIdController {
  constructor(readonly getLessonByIdUseCase: GetLessonByIdUseCase) {}

  async run(req: Request, res: Response) {
    const lessonId = req.params.id;
    const lesson: Lesson | null = await this.getLessonByIdUseCase.run(lessonId);
    if (!lesson) {
      return res.status(400).json({
        message: "No existe esta leccion",
      });
    }

    return res.status(200).json({
      message: "Leccion encontrada",
      data: {
        id: lesson.id,
        id_course: lesson.id_course,
        lesson_name: lesson.lesson_name,
        level: lesson.level,
        stars: lesson.stars,
        lesson_icon: lesson.lesson_icon,
        difficult: lesson.difficult,
      },
    });
  }
}
