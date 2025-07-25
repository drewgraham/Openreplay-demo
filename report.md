# Running the RealWorld Stack with Docker Compose

Build and run all services with:

```bash
docker-compose up --build
```

## Service Ports
- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:3000
- **Postgres**: localhost:5432
- **OpenReplay Tracker**: http://localhost:3569

## OpenReplay Setup
Replace `YOUR_PROJECT_KEY` in `frontend/src/main.jsx` with your project key from the OpenReplay dashboard. The tracker service is included in `docker-compose.yml` and listens on port `3569`.
