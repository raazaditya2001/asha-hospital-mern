# Asha Multispeciality Hospital — Website (MERN Stack)

A full-stack, deploy-ready website for Asha Multispeciality Hospital, Bhopal — covering
Skin Care, Hair Treatment, Laser Treatment, Ayurveda, General Medicine, Preventive
Healthcare, and an in-house Pharmacy.

Built with **MongoDB, Express, React (Vite), Node.js**.

## What's included

- Public site: Home, About, Services (by department), Doctors, Contact, Book Appointment
- Appointment booking form → saved to MongoDB, with validation & rate limiting
- Contact form → saved to MongoDB
- Services & Doctors are served from the database (seed script included) instead of hardcoded
- Admin-only endpoints (shared-secret key) to list appointments/contact messages
- Responsive, accessible design with a custom visual identity (not a generic template)
- Docker + docker-compose for one-command local run
- Deployment configs for Render (backend) and Vercel (frontend)

## Project structure

```
asha-hospital/
├── backend/          Express + MongoDB API
│   ├── config/        DB connection
│   ├── controllers/    Route handlers
│   ├── middleware/     Error handling, admin auth
│   ├── models/         Mongoose schemas (Appointment, Contact, Service, Doctor)
│   ├── routes/          API routes
│   ├── seed/            Seed script for services & doctors
│   ├── server.js
│   └── Dockerfile
├── frontend/          React (Vite) + Tailwind CSS
│   ├── src/
│   │   ├── components/  Navbar, Footer, forms, cards, etc.
│   │   ├── pages/        Home, About, Services, Doctors, Contact, BookAppointment
│   │   └── api/axios.js  API client
│   └── Dockerfile
└── docker-compose.yml
```

## 1. Local development

### Prerequisites
- Node.js 18+
- A MongoDB database — either [MongoDB Atlas](https://www.mongodb.com/atlas) (free tier) or a local `mongod`

### Backend

```bash
cd backend
cp .env.example .env
# edit .env and set MONGO_URI, CLIENT_URL, ADMIN_API_KEY
npm install
npm run seed     # populates the Services and Doctors collections
npm run dev      # starts the API on http://localhost:5000
```

### Frontend

```bash
cd frontend
cp .env.example .env
# edit .env if your API is not on http://localhost:5000/api
npm install
npm run dev       # starts the site on http://localhost:5173
```

Open http://localhost:5173 — the site pulls services and doctors live from the API,
and the appointment/contact forms write to MongoDB.

## 2. Run everything with Docker

```bash
docker compose up --build
```

This starts MongoDB, the API (port 5000) and the built frontend served via nginx
(port 5173). After the first run, seed the database:

```bash
docker compose exec backend npm run seed
```

## 3. API reference

Base URL: `/api`

| Method | Endpoint              | Access       | Description                          |
|--------|------------------------|--------------|---------------------------------------|
| GET    | `/health`               | Public       | Health check                          |
| GET    | `/services`             | Public       | List services (optional `?category=`) |
| GET    | `/doctors`               | Public       | List doctors                          |
| POST   | `/appointments`         | Public       | Submit an appointment request         |
| GET    | `/appointments`         | Admin (header `x-admin-key`) | List all appointments |
| PATCH  | `/appointments/:id`      | Admin        | Update appointment status             |
| POST   | `/contact`               | Public       | Submit a contact message              |
| GET    | `/contact`                | Admin        | List all contact messages             |

Admin endpoints require an `x-admin-key` header matching `ADMIN_API_KEY` in `backend/.env`.

## 4. Deploying to production

### Backend — Render (or Railway / any Node host)

1. Push this repo to GitHub.
2. On Render, create a **Web Service**, root directory `backend` (a `render.yaml` is
   included, so Render can auto-detect the settings via "Blueprint").
3. Set environment variables: `MONGO_URI` (Atlas connection string), `CLIENT_URL`
   (your deployed frontend URL), `ADMIN_API_KEY`, `NODE_ENV=production`.
4. Deploy. Note the resulting API URL, e.g. `https://asha-hospital-api.onrender.com`.
5. Run the seed script once, e.g. via Render's shell: `npm run seed`.git 

### Frontend — Vercel (or Netlify)

1. Import the repo into Vercel, set **root directory** to `frontend`.
2. Build command `npm run build`, output directory `dist` (Vite defaults — a
   `vercel.json` with SPA rewrites is included).
3. Set environment variable `VITE_API_URL` to your deployed backend URL + `/api`,
   e.g. `https://asha-hospital-api.onrender.com/api`.
4. Deploy.

### MongoDB — Atlas

1. Create a free cluster at https://www.mongodb.com/atlas.
2. Create a database user and allow network access (0.0.0.0/0 for simplicity, or
   restrict to your host's IPs).
3. Copy the connection string into `MONGO_URI`.

## 5. Customizing content

- Real doctor names, photos, and bios: edit `backend/seed/seed.js`, then re-run `npm run seed`.
- Phone numbers, address, WhatsApp number: update `Navbar.jsx`, `Footer.jsx`,
  `Contact.jsx`, and `WhatsAppButton.jsx` in the frontend.
- Colors and fonts: `frontend/tailwind.config.js` (teal / marigold palette, Fraunces / Manrope fonts).

## 6. Security notes for production

- Set a long, random `ADMIN_API_KEY` — treat it like a password.
- Restrict `CLIENT_URL` (CORS) to your real deployed frontend domain only.
- Consider adding proper authentication (JWT/session-based admin login) if you plan
  to build a full admin dashboard beyond the simple key-protected list endpoints.
