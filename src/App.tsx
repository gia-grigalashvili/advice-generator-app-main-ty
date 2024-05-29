import styled from "styled-components";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {}, []);
  return (
    <Container>
      <h1>ADVICE #117</h1>
      <p>
        “It is easy to sit up and take notice, what's difficult is getting up
        and taking action.”
      </p>
      <img src="/images/pattern-divider-desktop.svg" alt="" />
      <button>
        <img src="/images/icon-dice.svg" alt="" />
      </button>
    </Container>
  );
}
const Container = styled.div`
  width: 540px;
  height: 332px;
  border-radius: 15px;
  text-align: center;
  padding: 48px;
  background: #313a48;
  box-shadow: 30px 50px 80px 0px rgba(0, 0, 0, 0.1);
  h1 {
    color: var(--Neon-Green, #53ffaa);
    text-align: center;

    font-family: Manrope;
    font-size: 13px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: 4.086px;
  }
  p {
    font-weight: 800;
    color: #ece7e7;
    font-size: 28px;
    margin: 24px 0 40px;
  }
  button {
    background-color: #53ffaa;
    border: none;
    padding: 20px;
    border-radius: 50px;
    cursor: pointer;
    margin-top: 25px;
  }
`;
export default App;
