import styled from "styled-components";


const RollDice = ({ currentDice, rollDice}) => {
 
  return (
    <DiceContainer>
      <div className="dice"
      onClick={rollDice}
      >
        <img src={`/images/dice/dice_${currentDice}.png`} alt="" />
      </div>
      <p>Click on the Dice to Roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
margin-top: 48px;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;

 .dice {
  cursor: pointer;
 }

   p {
    font-size: 24px;
   }
`;
