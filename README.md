# Auth JWT API

API REST de autenticação com JWT usando Node.js, Express, PostgreSQL e Docker.

---

## 🚀 Tecnologias usadas

- Node.js
- Express
- PostgreSQL (via Docker)
- Sequelize ORM
- bcrypt (hash de senha)
- JSON Web Token (JWT)
- dotenv (variáveis de ambiente)
- Swagger UI (documentação interativa)

---

## 📦 Requisitos

- Docker e Docker Compose instalados
- Node.js e npm instalados

---

## ⚙️ Como rodar o projeto

### 1. Clone o repositório

```bash
git clone <URL_DO_REPOSITORIO>
cd auth-jwt
```
### 2. Instale as dependências
```bash
npm install
```

## 3. Configure variáveis de ambiente

Crie o arquivo .env na raiz:

```ini
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=auth_db
JWT_SECRET=supersecretjwtkey
```