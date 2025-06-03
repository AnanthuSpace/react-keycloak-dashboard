import keycloak from "@/util/keycloak";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      keycloak.init({ onLoad: "login-required" }).then((authenticated) => {
        if (authenticated) {
          localStorage.setItem("token", keycloak.token ?? "");
          navigate("/dashboard");
        } else {
          alert("Failed to authenticate");
        }
        setInitialized(true);
      }).catch(e => {
        console.error("Keycloak init failed", e);
        setInitialized(true);
      });
    }
  }, [initialized]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <p className="text-lg text-gray-600">Redirecting to login...</p>
    </div>
  );
};

export default Login;
