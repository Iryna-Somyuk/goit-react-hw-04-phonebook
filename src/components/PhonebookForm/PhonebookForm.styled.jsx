import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
`;

// export const FormContainer = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 12px;
  font-weight: 500;
  font-size: 18px;
`;

export const Input = styled(Field)`
  padding: 4px;
  font-size: 16px;
  border: 1px solid black;
  border-radius: 4px;
`;

// export const Input = styled.input`
//   padding: 4px;
//   font-size: 16px;
//   border: 1px solid black;
//   border-radius: 4px;
// `;


export const ErrorMes = styled(ErrorMessage)`
  font-weight: 400;
  font-size: 12px;
  color: red;
`;

export const Btn = styled.button`
  padding: 4px;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 30px;

  border: none;
  border-radius: 4px;
  background-color: rgb(210, 156, 241);
  color: black;
  font-size: 16px;
  &:hover,
  &:focus,
  &:active {
    background-color: rgb(210, 110, 241);
  }
`;
