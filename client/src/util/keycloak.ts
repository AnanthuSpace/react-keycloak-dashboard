import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080",
  realm: "demo-iam",
  clientId: "react-client",
});

let initPromise: Promise<boolean> | null = null;

export function initializeKeycloak() {
  if (!initPromise) {
    initPromise = keycloak.init({
      onLoad: "check-sso",
      silentCheckSsoRedirectUri: window.location.origin + "/silent-check-sso.html",
    });
  }
  return initPromise;
}

export default keycloak;
