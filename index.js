import express from "express";
import path from "path";
import routes from "./routes/routes.js"; // Corrigido para usar import com extensão .js

// Obtendo o diretório atual (equivalente a __dirname em CommonJS)
const __dirname = path.resolve();

const app = express();
const port = 3000;

// Configuração do EJS como motor de visualização
app.set("view engine", "ejs");

// Configuração de arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Usando as rotas importadas
app.use(routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});