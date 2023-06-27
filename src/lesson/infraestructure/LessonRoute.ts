import express from "express";

import upload from "../../libs/multer";
import {
  createLessonController,
  getAllLessonsController,
  getLessonByIdController,
  getLessonsByCourseIdController,
} from "./dependencies";

export const lessonRouter = express.Router();

//Crear lecciones

lessonRouter.post(
  "/",
  upload.single("lesson_icon"),
  createLessonController.run.bind(createLessonController)
);

//Get All lessons
lessonRouter.get(
  "/",
  getAllLessonsController.run.bind(getAllLessonsController)
);

//Get By id
lessonRouter.get(
  "/id/:id",
  getLessonByIdController.run.bind(getLessonByIdController)
);

//Get by course_id
lessonRouter.get(
  "/Courseid/:id",
  getLessonsByCourseIdController.run.bind(getLessonsByCourseIdController)
);
