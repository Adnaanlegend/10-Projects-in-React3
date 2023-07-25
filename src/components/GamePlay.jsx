import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";

const GamePlay = () => {
  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore />
        <NumberSelector />
      </div>
      <RollDice />
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding: 70px 40px 0 40px;

  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
`;
