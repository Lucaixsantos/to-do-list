# To Do List

Aplicação web de lista de tarefas (To Do List) construída com Node.js, Express, MongoDB e EJS.

## Funcionalidades

- Adicionar, editar, marcar como concluída e remover tarefas
- Interface responsiva e moderna
- Mensagens de sucesso e erro
- Confirmação antes de deletar tarefas

## Tecnologias utilizadas

- Node.js
- Express
- MongoDB (Mongoose)
- EJS (Embedded JavaScript templates)
- CSS3
- Bootstrap Icons

## Estrutura do Projeto

```
.
├── controller/
│   └── TaskController.js
├── database/
│   └── db.js
├── models/
│   └── Task.js
├── public/
│   ├── script.js
│   └── style.css
├── routes/
│   └── routes.js
├── views/
│   ├── componentes/
│   │   ├── form.ejs
│   │   └── modalDel.ejs
│   └── index.ejs
├── .env.example
├── .gitignore
├── index.js
├── package.json
└── Procfile
```

## Como rodar o projeto

1. **Clone o repositório**
2. **Instale as dependências**
   ```sh
   npm install
   ```
3. **Configure o arquivo `.env`**
   - Copie o arquivo `.env.example` para `.env` e preencha as variáveis `PORT` e `DB_URI`.

4. **Inicie o servidor**
   ```sh
   npm run dev
   ```
   ou
   ```sh
   npm start
   ```

5. **Acesse no navegador**
   ```
   http://localhost:PORT
   ```

## Deploy

O projeto está pronto para deploy no Heroku ou Railway, utilizando o arquivo `Procfile`.

---

Desenvolvido por Lucas Santos.
