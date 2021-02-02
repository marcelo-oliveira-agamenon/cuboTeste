import styled from "styled-components";

export const DivNumbers = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5vh;
  margin-bottom: 80px;
  margin-top: 30px;
  gap: 10px;

  .atualPage {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Abel, sans-serif;
    font-size: 1.4vw;
    background-color: #1661b3;
    font-weight: 100;
    color: #63eadf;
    border-radius: 50%;
    width: 50px;
    height: 50px;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: #63eadf;
      width: 40px;
      height: 40px;
    }

    p {
      text-align: center;
      border-radius: 50%;
      color: #63eadf;
      background-color: #1661b3;
      width: 30px;
      height: 30px;
    }
  }

  .page {
    font-family: Abel, sans-serif;
    font-size: 1.4vw;
    color: #1661b3;
    cursor: pointer;
    font-weight: 700;
    align-self: center;
  }
`;
