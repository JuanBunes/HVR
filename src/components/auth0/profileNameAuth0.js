import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const ProfileName = () => {
  const { user, isAuthenticated } = useAuth0();
  if(isAuthenticated)
    return user.name;
  else 
    return "Iniciar sesion"; 
};

export default ProfileName;