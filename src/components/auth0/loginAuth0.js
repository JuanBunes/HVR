import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LoginLink() {
  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();

  return !isAuthenticated && (
    <a onClick={loginWithRedirect}>Iniciar Sesión</a>
  );
}

export default LoginLink;