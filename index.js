import "dotenv/config";
import express from "express";
import path from "path";
import routes from "./routes/routes.js";
import connectToDb from "./database/db.js";

const app = express();
const port = process.env.PORT;
const __dirname = path.resolve();

connectToDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Adicione esta linha para servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.use(routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
