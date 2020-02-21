import styled from "styled-components";

export const ContainerInput = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6.2vh;
`;

export const TextInput = styled.input`
  width: 60%;
  color: #000;
  padding: 0.6rem 0.9rem;
  background-color: #ccd3d2;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #3f9c8f;
  }
  :-ms-input-placeholder {
    color: #3f9c8f;
  }
  border-radius: 16px;
  border-style: none;
  outline: none;
  font-size: 0.8rem;
  font-family: Lato, sans-serif;
`;
