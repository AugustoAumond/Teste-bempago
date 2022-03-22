import styled from "styled-components";
import './../../Styles/GlobalStyles.css';
import Box from "../../components/App/box/box";
import Inputs from "../../components/App/inputs/Inputs";

const user = `${process.env.PUBLIC_URL}/imagens/Usuario.png`

function App(){  

  return (  
    <BodyBox>
      <Box/>
      <Inputs/> 
    </BodyBox>
  )
}

export default App;

const BodyBox = styled.div`
  background: white;
    width: 524px;
    margin-top: 70px;
    height: 780px;
    margin-left: 24%;
    border-radius: 5px;
    `


