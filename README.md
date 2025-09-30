# API de Filmes

Esta é uma API REST simples para gerenciar filmes, criada em Node.js com Express.  
O projeto possui duas funcionalidades principais: listar filmes e adicionar novos filmes.

---

## Funcionalidades

- **GET /api/filmes**: Lista todos os filmes cadastrados.
- **POST /api/filmes**: Adiciona um novo filme.  
  - Corpo da requisição (JSON):
    ```json
    {
      "titulo": "Nome do filme",
      "ano": 2024
    }
    ```

---

## Como executar a API

1. Certifique-se de ter o Node.js instalado na sua máquina.
2. Abra o terminal na pasta do projeto.
3. Instale as dependências:
   ```bash
   npm install

Execute a API:

node server.js


Acesse em seu navegador:

http://localhost:8080/api/filmes