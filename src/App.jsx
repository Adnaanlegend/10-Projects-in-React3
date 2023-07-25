import styled from "styled-components";
import StartGame from "./components/StartGame"
import { useState } from "react";
import GamePlay from "./components/GamePlay";

function App() {

 const[isGameStarted, setIsGameStarted] = useState(true);

 const toggleGame = () => {
  setIsGameStarted(prev => !prev);
 }
  return (
    <>
    {isGameStarted ? <GamePlay /> : <StartGame 
     toggle={toggleGame} />}
    </>
  );
}

export default App;

// const Button = styled.button`
//   background-color: black;
//   color: white;
//   padding: 10px;
//   border-radius: 50px 0 50px 0;
//   cursor: pointer;
// `;
