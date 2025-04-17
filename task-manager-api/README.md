# Task Manager API (FastAPI)

A demo RESTful API with JWT authentication, Swagger docs, edge cases, and automation-ready for testing.

## Features
- CRUD for tasks (`/tasks`)
- JWT Auth (`/register`, `/login`)
- Swagger UI at `/docs`
- Simulated error endpoints for 400, 404, 500
- Modular code, best practices
- Postman tests in `/tests`
- Docker & local run support

## Running Locally
```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

## Running with Docker
```bash
docker-compose up --build
```

## API Docs
Visit [http://localhost:8000/docs](http://localhost:8000/docs)

---

## Automated API Testing

### Postman
Import `/tests/test_api.postman_collection.json` into Postman or run with Newman:
```bash
npm install -g newman
newman run tests/test_api.postman_collection.json --insecure
```

### Playwright
```bash
cd tests/playwright
npm ci
npx playwright install --with-deps
npm test
```

### Cypress
```bash
cd tests/cypress
npm ci
npm test
```

---

## CI/CD (GitHub Actions)
- Workflow: `.github/workflows/api-ci.yml` runs all tests on push/PRs to `main`.

---

## Deployment (Render)
- Deploy instantly on [Render](https://render.com/) using `render.yaml`.
- Add your repo, Render will auto-detect FastAPI and use the config.
- API will be available at `https://<your-app>.onrender.com` (default port 10000).

---

## Project Structure
- `/app` – FastAPI source code
- `/tests/postman` – Postman collection
- `/tests/playwright` – Playwright API tests
- `/tests/cypress` – Cypress API tests

---

> **Showcase your API test automation skills with this repo!**
