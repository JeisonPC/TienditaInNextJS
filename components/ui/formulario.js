import styled from "@emotion/styled";
import { maxWidth } from "@mui/system";

export const Formulario = styled.form`
  max-width: 600px;
  display: flex;
  align-items: center;
  background-color: white;
  flex-direction: column;
  justify-content: center;
`;

export const Campo = styled.div`
  display: flex;
  flex-direction: column;
  label {
  }

  input {
    border: 1px solid #333333;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
  }
`;

export const InputSubmit = styled.input`
  background-color: var(--morado);
  width: 100%;
  padding: 1.5rem;
  text-align: center;
  color: #fff;

  &:hover {
    cursor: pointer;
    background-color: #FF5D73;
  }
`;
