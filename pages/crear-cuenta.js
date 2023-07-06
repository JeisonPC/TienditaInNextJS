import React, { useState, useContext } from "react";
import axios from "axios";
import { css } from "@emotion/react";
import Layout from "../components/Layout";
import { Formulario, Campo, InputSubmit } from "../components/ui/formulario";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

//validacion del form
import useValidacionInput from "../hooks/useValidacionInput";
import validarCrearCuenta from "../validacion/validarCrearCuenta";

const STATE_INICIAL = {
  username: "",
  email: "",
  password: "",
};

const CrearCuenta = () => {
  const {
    valores,
    errores,
    submitForm,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useValidacionInput(STATE_INICIAL, validarCrearCuenta, crearCuenta);

  const { username, email, password } = valores;

  function crearCuenta() {
    console.log("Creando Cuenta...");
  }

  const handleSuccess = (response) => {
    // Manejar la respuesta de inicio de sesión exitoso aquí
  };

  const handleFailure = (response) => {
    // Manejar la respuesta de inicio de sesión fallido aquí
  };

  return (
    <div>
      <Layout>
        <Formulario onSubmit={handleSubmit}>
          <h1>Crea tu cuenta</h1>
          <Campo>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Tu username"
              value={username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errores.username && <p>{errores.username}</p>}
          </Campo>

          <Campo>
            <label htmlFor="email">email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Tu email"
              value={email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errores.email && <p>{errores.email}</p>}
          </Campo>

          <Campo>
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Tu contraseña"
              value={password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errores.password && <p>{errores.password}</p>}
          </Campo>

          <InputSubmit type="submit" value="Crear Cuenta" />
        </Formulario>
        {/* <GoogleOAuthProvider clientId="266455807822-e34kito8ljg7p3kloascj6l3u8i8gfl3.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const { tokenId } = credentialResponse; // Obtén el token de acceso de Google

              // Realiza una llamada a la API de Strapi para crear el usuario
              axios
                .post("https://admin.prawie.com/api/auth/local/register", {
                  tokenId, // Pasa el token de acceso a la API
                })
                .then((response) => {
                  console.log("Usuario creado:", response.data);
                  // Realiza las acciones necesarias después de crear el usuario
                })
                .catch((error) => {
                  console.error("Error al crear el usuario:", error);
                  // Maneja el error de creación del usuario
                });
            }}
            onError={() => {
              console.log("Error de inicio de sesión con Google");
            }}
            useOneTap
          />
          ;
        </GoogleOAuthProvider> */}
        <GoogleOAuthProvider
          clientId="266455807822-e34kito8ljg7p3kloascj6l3u8i8gfl3.apps.googleusercontent.com"
          redirectUri="https://admin.prawie.com/auth/google/callback"
        >
          <GoogleLogin onSuccess={handleSuccess} onFailure={handleFailure}>
            Iniciar sesión con Google
          </GoogleLogin>
        </GoogleOAuthProvider>
      </Layout>
    </div>
  );
};
export default CrearCuenta;
