import bodyParser from "body-parser";
import express from "express";

import { lessonRouter } from "./lesson/infraestructure/LessonRoute";

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

app.use("/course", lessonRouter);

app.use("/public", express.static("imgs"));
app.get("/", function (req, res) {
  res.send("Esta es la API de la entidad curso de el proeycto instrumaster");
});

app.listen(PORT, () => {
  console.log(`[APP] - Starting application on port ${PORT}`);
});
