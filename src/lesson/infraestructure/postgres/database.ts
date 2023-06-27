import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "Nintendo64",
  database: "Instrumaster_Lessons",
  port: 5432,
});
