import { styled } from "styled-components";



export const Button = styled.button`
  width: 220px;
  font-size: 16px;
  color: white;
  padding: 10px 18px;
  background-color: #000000;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  border: 1px solid transparent;
  
  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;

export const OutlineButton = styled(Button)`
    background-color: white;
    border: 1px solid black;
    color: black;
        &:hover {
            background-color: black;    
            border: 1px solid transparent;
            color: white;
        }
`;

