import React, { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token)
    if (token) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
      navigate("/login", { replace: true }); 
    }
  }, [navigate]);

  if (authenticated === null) {
  
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
