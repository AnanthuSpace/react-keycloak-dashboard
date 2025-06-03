import express from 'express';
import session from 'express-session';
import dotenv from 'dotenv';
import cors from "cors";
import { keycloak, memoryStore } from './keycloak/keycloak-config.js'
import dashboardRoutes from './routes/dashboard.routes.js.js';

dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  allowedHeaders: ['Authorization', 'Content-Type'],
}));


app.use(
  session({
    secret: process.env.SESSION_SECRET || 'my-secret',
    resave: false,
    saveUninitialized: true,
    store: memoryStore,
  })
);

app.use(keycloak.middleware());
app.use('/dashboard', dashboardRoutes(keycloak));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`API Gateway running on http://localhost:${PORT}`);
});
