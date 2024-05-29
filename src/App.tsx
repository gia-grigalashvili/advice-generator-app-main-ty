import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <Container>
      <h1>ADVICE #117</h1>
      <p>blabla</p>
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
  }
`;
export default App;
