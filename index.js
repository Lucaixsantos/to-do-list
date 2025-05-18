import express from "express";
import path from "path";
import routes from "./routes/routes.js"; // Corrigido para usar import com extensão .js
import connectToDb from "./database/db.js";

const __dirname = path.resolve();

connectToDb(); // Conectar ao banco de dados
const app = express();
const port = 3000;

// Configuração do EJS como motor de visualização
app.set("view engine", "ejs");

// Configuração de arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded()); // Para receber dados do formulário
// Usando as rotas importadas
app.use(routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
