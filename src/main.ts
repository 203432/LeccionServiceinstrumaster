import bodyParser from "body-parser";
import { config } from "dotenv";
import express from "express";

import { lessonRouter } from "./lesson/infraestructure/LessonRoute";

const app = express();
config();

const PORT = process.env.PORTPROJECT;

app.use(bodyParser.json());

app.use("/lesson", lessonRouter);

app.use("/public", express.static("imgs"));
app.get("/", function (req, res) {
  res.send(
    "Esta es la API de la entidad de lessons de el proeycto instrumaster"
  );
});

app.listen(PORT, () => {
  console.log(
    `[APP] - Starting application on port ${process.env.PORTPROJECT}`
  );
  console.log(`[APP] - Starting application on ip ${process.env.IPPROJECT}`);
});
