//Casos de uso
import { CreateLessonUseCase } from "../application/CreateLessonUseCase";
import { GetAllLessonsUseCase } from "../application/GetAllLessonsUseCase";
import { GetLessonsByCourseIdUseCase } from "../application/GetLessonByCourseIdUseCase";
import { GetLessonByIdUseCase } from "../application/GetLessonByIdUseCase";
//Controladores
import { CreateLessonController } from "./controllers/CreateLessonController";
import { GetAllLessonsController } from "./controllers/GetAllLessonsController";
import { GetLessonsByCourseIdController } from "./controllers/GetLessonByCourseIdController";
import { GetLessonByIdController } from "./controllers/GetLessonByIdController";
//Repositorio
import { PostgresLessonRepository } from "./PostgresLessonRepository";

//Exportacion del repositorio
export const postgreLessonRepository = new PostgresLessonRepository();

//Create Lessons
export const createLessonUseCase = new CreateLessonUseCase(
  postgreLessonRepository
);
export const createLessonController = new CreateLessonController(
  createLessonUseCase
);

//Get Lesson by id
export const getLessonByIdUseCase = new GetLessonByIdUseCase(
  postgreLessonRepository
);
export const getLessonByIdController = new GetLessonByIdController(
  getLessonByIdUseCase
);

//Get By Courseid
export const getLessonsByCourseIdUseCase = new GetLessonsByCourseIdUseCase(
  postgreLessonRepository
);
export const getLessonsByCourseIdController =
  new GetLessonsByCourseIdController(getLessonsByCourseIdUseCase);

//Get All lessons
export const getAllLessonsUseCase = new GetAllLessonsUseCase(
  postgreLessonRepository
);
export const getAllLessonsController = new GetAllLessonsController(
  getAllLessonsUseCase
);
