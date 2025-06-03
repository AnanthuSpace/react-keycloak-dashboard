import path from 'path';
import session from 'express-session';
import Keycloak from 'keycloak-connect';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const keycloakConfigPath = path.join(__dirname, 'keycloak.json');

const memoryStore = new session.MemoryStore();

const keycloak = new Keycloak({ store: memoryStore }, keycloakConfigPath);


export { keycloak, memoryStore };
