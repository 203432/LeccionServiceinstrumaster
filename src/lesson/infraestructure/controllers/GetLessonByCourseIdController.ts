import { Request, Response } from "express";

import { GetLessonsByCourseIdUseCase } from "../../application/GetLessonByCourseIdUseCase";

export class GetLessonsByCourseIdController {
  constructor(
    readonly getLessonsByCourseUseCase: GetLessonsByCourseIdUseCase
  ) {}

  async run(req: Request, res: Response) {
    try {
      const courseId = req.params.id;
      const lessons = await this.getLessonsByCourseUseCase.run(courseId);

      const baseUrl = "http://localhost:3000/public/";

      const transformedLessons = lessons?.map((lesson) => {
        const imageName = lesson.lesson_icon.split("\\").pop();
        const imageUrl = baseUrl + imageName;
        const encodedUrl = encodeURI(imageUrl);

        return {
          ...lesson,
          course_logo: encodedUrl,
        };
      });

      return res.status(200).json({
        message: "Lista de lecciones obtenida correctamente",
        data: transformedLessons,
      });
    } catch (error) {
      console.error("Error al obtener la lista de cursos:", error);
      return res.status(500).json({
        message: "Error al obtener la lista de cursos",
      });
    }
  }
}
