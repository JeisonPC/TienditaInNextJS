import { useState, useEffect } from "react";

function useValidacionInput(stateInicial, validar, fn) {
  const [valores, guardarValores] = useState(stateInicial);
  const [errores, guardarErrores] = useState({});
  const [submitForm, guardarSubmitForm] = useState(false);

  useEffect(() => {
    if (submitForm) {
      const noErrores = Object.keys(errores).length === 0;

      if (noErrores) {
        fn();
      }
      guardarSubmitForm(false);
    }
  }, [errores]);

  //función que se ejecuta cuando se escribe en el input
  const handleChange = (e) => {
    guardarValores({
      ...valores,
      [e.target.name]: e.target.value,
    });
  };

  //Función que se ejecuta cuando se hace submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const erroresValidacion = validar(valores);
    guardarErrores(erroresValidacion);
    guardarSubmitForm(true);
  };

  //Cuando se realizar el event de blur
  const handleBlur = () => {
    const erroresValidacion = validar(valores);
    guardarErrores(erroresValidacion);
  };

  return {
    valores,
    errores,
    submitForm,
    handleSubmit,
    handleChange,
    handleBlur
  };
}

export default useValidacionInput;
