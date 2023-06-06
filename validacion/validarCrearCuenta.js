import React from "react";

export default function validarCrearCuenta(valores) {
  let errores = {};

  //validar username.
  if (!valores.username) {
    errores.username = "Olvidaste el username";
  }

  //validar email
  if (!valores.email) {
    errores.email = "Olvidaste el email";
  } else if (/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+. ([a-z]+)(. [a-z]+)?$/.test(valores.email)) {
    errores.email = "email no válido"
  }

  //validar password
  if (!valores.password) {
    errores.password = "Olvidaste el password";
  } else if (valores.password.length < 8) {
    errores.password = "El password debe ser de al menos 8 caractéres"
  }

  return errores;
}
