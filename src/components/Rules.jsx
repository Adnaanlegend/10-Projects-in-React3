import { styled } from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to Play - </h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          After you click on the dice if the selected number is equal to the
          dice number you will get same point as the dice.
        </p>
        <p>
          If you get a wrong guess then, 2 points will be deducted from Total{" "}
        </p>
        <p>Best of Luck</p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #b4b2f5;
  padding: 20px;
  margin-top: 40px;
  border-radius: 10px;
  h2 {
    font-size: 24px;
  }
  .text {
    margin-top: 24px;
  }
`;
