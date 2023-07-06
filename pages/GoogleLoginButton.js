import React, { useEffect } from "react";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const GoogleLoginButton = () => {
  const { signIn } = useGoogleLogin({
    clientId: "266455807822-e34kito8ljg7p3kloascj6l3u8i8gfl3.apps.googleusercontent.com",
    redirectUri: "http://localhost:3000", // Reemplaza con la URL correcta de tu aplicación React
    scope: "email profile",
  });

  const handleAuthorization = async (code) => {
    try {
      const response = await axios.post("https://prawie-backend.fly.dev//auth/google/callback", {
        code,
      });
      // El usuario se ha creado correctamente en Strapi
    } catch (error) {
      // Maneja el error en caso de que ocurra
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      handleAuthorization(code);
    }
  }, []);

  return <button onClick={signIn}>Iniciar sesión con Google</button>;
};

const App = () => {
  return (
    <GoogleOAuthProvider clientId="266455807822-e34kito8ljg7p3kloascj6l3u8i8gfl3.apps.googleusercontent.com">
      <GoogleLoginButton />
    </GoogleOAuthProvider>
  );
};

export default App;
