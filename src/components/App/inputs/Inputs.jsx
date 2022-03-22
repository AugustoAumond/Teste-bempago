import { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

function Checkbox(){
    const [react, setReact] = useState(false);
    const [vue, setVue] = useState(false);
    const [angular, setAngular] = useState(false);
    const [number, setNumber] = useState(0);
    const [observation, setObservation] = useState('');

    const history = useHistory();
    
    let object = {react: react, vue: vue, angular: angular, number: number, observation: observation};

    //Somar clicando no botão
    function Plus (){
        setNumber(number + 1);
    }

    //Diminuir clicando no botão;
    function Less (){
        setNumber(number - 1)
    }

    //Limpar os inputs
    const Cleam = () =>{
        setReact(false);
        setVue(false);
        setAngular(false);
        setNumber(0);
        setObservation('');
    }

    //Guardar os dados no localStorage;
    function Send (object) {
        let list = localStorage.getItem('list') ? JSON.parse (localStorage.getItem('list')) :
        [];
        Cleam();
        list.push(object);
        localStorage.setItem('list', JSON.stringify(list));
        history.push('/checkout');
    }


    return(
    <Div>
        <DivInputs>
            <InputReact type='checkbox' dafaultChecked={react} onClick={(()=> setReact(!react))}></InputReact> <strong id='reacttxt'>React</strong>
            <InputVue checked={vue} type='checkbox' onClick={(()=> setVue(!vue))} ></InputVue> <strong id='vuetxt'>Vue</strong>
            <InputAngular checked={angular} type='checkbox' onClick={(()=> setAngular(!angular))}></InputAngular> <strong id='angulartxt'>Angular</strong>
        </DivInputs>

        <DivButtons>
            <ButtonPlus onClick={(()=> Plus())} > <strong> + </strong> </ButtonPlus>
            <InputNumber type='number' value={number} onChange={((e)=> setNumber(e.currentTarget.value))} />
            <ButtonLess onClick={(()=> Less())} > <strong> - </strong>  </ButtonLess>
        </DivButtons>

        <DivObservations>
            <strong> Observações:</strong>
            <InputObservations type='text' placeholder='Alguma dúvida, recado?' value={observation}  onChange={((e)=> setObservation(e.currentTarget.value))}/>
            <InputButton  onClick={(()=> Send(object))} > ENVIAR</InputButton>
        </DivObservations>
    </Div>
     )    
}
export default Checkbox;

const Div = styled.div`
`

const DivInputs = styled.div`
display: flex;
flex-direction: column;
position: relative;
bottom: 130px;
right: 15px;

    #reacttxt{
        position: absolute;
        left: 115px;
        top: 111px;
        font-size: 20px;
    }

    #vuetxt{
        position: absolute;
        top: 160px;
        left: 116px;
        font-size: 20px;
    }

    #angulartxt{
        position: absolute;
        top: 210px;
        left: 117px;
        font-size: 20px;
    }
`

const InputReact = styled.input`
height: 15px;
    margin-top: 15px;
    width: 15px;
    cursor: pointer;
    position: absolute;
    left: 90px;
    top: 99px;
`

const InputVue = styled.input`
height: 15px;
    margin-top: 15px;
    width: 15px;
    cursor: pointer;
    position: absolute;
    left: 90px;
    top: 151px;
`

const InputAngular = styled.input`
height: 15px;
    margin-top: 15px;
    width: 15px;
    cursor: pointer;
    position: absolute;
    left: 90px;
    top: 197px;
`

const DivButtons = styled.div`
position: relative;
font-size: 18px;
bottom: 305px;
right: 225px;

`

const ButtonPlus = styled.button`
position: absolute;
height: 35px;
width: 40px;
left: 300px;
top: 455px;
background: #2f3676;

    strong{
        font-size: 25px;
        color: white;
    }
`

const InputNumber = styled.input`
position: absolute;
height: 35px;
width: 69px;
left: 349px;
top: 455px;
padding: 15px;
border-radius: 10px 10px 10px 10px;
`

const ButtonLess = styled.button`
position: absolute;
height: 35px;
width: 40px;
left: 424px;
top: 455px;
background: #2f3676;
    strong{
        font-size: 25px;
        color: white;
    }
`

const DivObservations = styled.div`
    position: relative;
    top: 245px;
    left: 93px;
    font-size: 18px;

    strong{
        margin-left: -22px;
    }
}
`

const InputObservations = styled.input`   
    left: -24px;
    border: solid 1px #2f3676;
    height: 135px;
    width: 420px;
    position: absolute;
    top: 35px;
    padding: 63px;
    border-radius: 25px;
    background: white;
`

const InputButton = styled.button`
    width: 104px;
    position: absolute;
    top: 187px;
    left: 268px;
    height: 35px;
    border-radius: 10px;
    background: #2f3676;
    color: white;
    box-shadow: 2px 3px 6px 2px #2f367687;
`
