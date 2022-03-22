import styled from 'styled-components'
import {Fragment} from 'react';

function Box (){
    return (
        <Fragment>
            <DivSuperior>
            <Text> Formulário para compra de <p>Pacote de adesivos</p></Text>
            <Img src='img/quadrado.png'/>
            </DivSuperior>
        </Fragment>
    )
}

export default Box;

const DivSuperior = styled.div`
height: 213px;
background: #2f3676;
clip-path: circle(295px at 46% -47%);
color: #ffffff8a;
`

const Text = styled.div`
font-size: 17px;
width: 195px;
padding: 25px;

    p{  
        font-weight: 600;
        width: 250px;
        color: white;
        font-size:18px
    }
    `

const Img = styled.img`
margin-left: 352px;
position: relative;
bottom: 77px;
-webkit-transform: rotate(-16deg);
-ms-transform: rotate(-13deg);
transform: rotate(-19deg);
height: 102px;
`
