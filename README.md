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

### 3. Configure variáveis de ambiente

Crie o arquivo .env na raiz:

```ini
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=auth_db
JWT_SECRET=supersecretjwtkey
```

### 4. Suba o banco PostgreSQL via Docker

```bash
docker-compose up -d
```

### 5. Rodar a API em modo desenvolvimento

```bash
npm run dev
```
API estará disponível em:

```arduino
http://localhost:3000
```

### 📖 Documentação Swagger

Acesse a documentação interativa no endereço:

```arduino
http://localhost:3000/api/docs
```

Lá você pode testar todos os endpoints diretamente no navegador.

---

## 🛡️ Proteção de rotas com JWT

- Após fazer login, copie o token JWT recebido.  
- No Swagger, clique em **Authorize** (no canto superior direito) e cole:

Bearer SEU_TOKEN_AQUI


- Acesse as rotas protegidas, como `/api/auth/profile`.

---

## 🔍 Acessar banco de dados PostgreSQL

### Dentro do container Docker

```bash
docker exec -it auth_postgres bash
psql -U postgres -d auth_db
```

