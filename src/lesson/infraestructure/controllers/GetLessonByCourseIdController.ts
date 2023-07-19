import { config } from "dotenv";
import { Request, Response } from "express";

import { GetLessonsByCourseIdUseCase } from "../../application/GetLessonByCourseIdUseCase";
config();
export class GetLessonsByCourseIdController {
  constructor(
    readonly getLessonsByCourseUseCase: GetLessonsByCourseIdUseCase
  ) {}

  async run(req: Request, res: Response) {
    try {
      const courseId = req.params.id;
      const lessons = await this.getLessonsByCourseUseCase.run(courseId);

      return res.status(200).json({
        message: "Lista de lecciones obtenida correctamente",
        data: lessons,
      });
    } catch (error) {
      console.error("Error al obtener la lista de lecciones:", error);
      return res.status(500).json({
        message: "Error al obtener la lista de lecciones",
      });
    }
  }
}
