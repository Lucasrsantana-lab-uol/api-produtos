const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());

// Banco de dados em memória (só exemplo)
let filmes = [
  { id: 1, titulo: "O Poderoso Chefão", ano: 1972 },
  { id: 2, titulo: "Interestelar", ano: 2014 },
];

// GET - listar filmes
app.get("/api/filmes", (req, res) => {
  res.json(filmes);
});

// POST - adicionar filme
app.post("/api/filmes", (req, res) => {
  const { titulo, ano } = req.body;

  if (!titulo || !ano) {
    return res.status(400).json({ erro: "Título e ano são obrigatórios!" });
  }

  const novoFilme = {
    id: filmes.length + 1,
    titulo,
    ano,
  };

  filmes.push(novoFilme);
  res.status(201).json(novoFilme);
});

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
