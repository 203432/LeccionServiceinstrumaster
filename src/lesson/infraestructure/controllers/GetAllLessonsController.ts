import { config } from "dotenv";
import { Request, Response } from "express";

import { GetAllLessonsUseCase } from "../../application/GetAllLessonsUseCase";

config();
export class GetAllLessonsController {
  constructor(readonly getAllLessonsUseCase: GetAllLessonsUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const lessons = await this.getAllLessonsUseCase.run();

      const baseUrl = `http://${process.env.IPPROJECT}:${process.env.PORTPROJECT}/public/`;

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
