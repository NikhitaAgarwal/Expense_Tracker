import styled from "styled-components";
import Expense from "./components/Home/Expense";

const Container =styled.div`
display:flex;
flex-direction: column;
align-items: center;
margin: 40px 0 10px;
`;

const Header = styled.span`
color:black;
font-size:25px;
font-weight:bold;

`;

function App() {
  return (
    <Container> 
      <Header>Expense Tracker </Header>
      <Expense />

    </Container>
    
  );
}

export default App;
