import express from 'express';
import { getDashboard } from '../controllers/dashboard.controller.js';

export default function (keycloak) {
  const router = express.Router();

  router.get(
    '/',
    (req, res, next) => {
      console.log("Incoming headers:", req.headers);
      if (req.headers.authorization) {
        console.log("Authorization header:", req.headers.authorization);
      } else {
        console.log("No Authorization header present");
      }
      next();
    },
    
    (req, res, next) => {
      keycloak.protect('default-roles-demo-iam')(req, res, (err) => {
        if (err) {
          console.error("Keycloak protect error:", err);
          return res.status(401).json({ error: 'Unauthorized: ' + err.message });
        }
        console.log("After keycloak.protect(), user is authorized");
        next();
      });
    },
    (req, res, next) => {
      next();
    },
    getDashboard
  );

  return router;
}
