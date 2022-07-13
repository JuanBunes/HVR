import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LogoutLink() {
  const {
    isAuthenticated,
    logout,
  } = useAuth0();

  return isAuthenticated && (
    <a onClick={() => {
      logout({ returnTo: window.location.origin });
    }}>Cerrar Sesión</a>
  );
}

export default LogoutLink;