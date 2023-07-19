import { config } from "dotenv";
import { Request, Response } from "express";

import { GetAllLessonsUseCase } from "../../application/GetAllLessonsUseCase";

config();
export class GetAllLessonsController {
  constructor(readonly getAllLessonsUseCase: GetAllLessonsUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const lessons = await this.getAllLessonsUseCase.run();

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
