import React from "react";
import { useAuth } from "./auth";


function ProfilePage(){
  const auth = useAuth();


  return(
    <>
      <h1>Perfil</h1>
      <p>Bienvenido, {auth.user?.username}</p>
    </>
  )
}
export { ProfilePage };