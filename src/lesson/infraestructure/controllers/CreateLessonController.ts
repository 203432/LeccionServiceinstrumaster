import { Request, Response } from "express";

import { CreateLessonUseCase } from "../../application/CreateLessonUseCase";
import { Lesson } from "../../domain/Lesson";
export class CreateLessonController {
  constructor(readonly createLessonUseCase: CreateLessonUseCase) {}

  async run(req: Request, res: Response) {
    const lesson = req.body;
    const lessonCreated = await this.createLessonUseCase.run(
      new Lesson(
        "1",
        lesson.id_course,
        lesson.lesson_name,
        lesson.level,
        lesson.stars,
        lesson.lesson_icon,
        lesson.difficult
      )
    );
    console.log(lessonCreated);
    return res.status(200).json({
      message: "Nueva leccion añadida",
      data: {
        lesson_name: lesson.lesson_name,
        lesson_logo: lesson.lesson_icon,
      },
    });
  }
}
