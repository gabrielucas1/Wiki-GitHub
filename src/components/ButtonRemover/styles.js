import styled from "styled-components";

export const ButtonContainer = styled.button`
  height: auto;
  width: auto;

  margin: 20px 0 0 0;

  button {
    background-color: #61dafb;
    border: none;
    border-radius: 20px;
    color: white;
    font-size: 11px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #4fa3d8;
  }
`;