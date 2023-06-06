import React, { useState, useContext } from 'react';
import { css } from '@emotion/react';
import Layout from '../components/Layout';
import { Formulario, Campo, InputSubmit } from '../components/ui/formulario';

//validacion del form
import useValidacionInput from '../hooks/useValidacionInput';
import validarCrearCuenta from '../validacion/validarCrearCuenta';

const STATE_INICIAL = {
  username: '',
  email: '',
  password: ''
}

const CrearCuenta = () => {

  const {valores, errores, submitForm, handleSubmit, handleChange, handleBlur} = useValidacionInput(STATE_INICIAL, validarCrearCuenta, crearCuenta);

  const { username, email, password } = valores;

  function crearCuenta() {
    console.log("Creando Cuenta...")
  }

  return (
    <div>
      <Layout>
        <Formulario
          onSubmit={handleSubmit}
        >
          <h1>
            Crea tu cuenta
          </h1>
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

          <InputSubmit
            type="submit"
            value="Crear Cuenta"
          />
        </Formulario>
      </Layout>
    </div>
  )
}
export default CrearCuenta;
