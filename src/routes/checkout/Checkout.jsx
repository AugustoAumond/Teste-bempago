import {useState} from 'react';
import styled from 'styled-components';
import {useHistory} from "react-router-dom";

function Checkout(){
    const [name, setName] = useState();
    const [cpf, setCPF] = useState();
    const [numberCard, setNumberCard] = useState();
    const [dataVencimento, setDataVencimento] = useState();
    const [securityCode, setSecurityCode] = useState();
    const [value, setValue] = useState();
    const [parcel, setParcel] = useState(1);

    const history = useHistory();

    function Pay (){
        if (name === undefined || name.length < 6){
            window.alert('Nome inválido!')
        } else if (cpf === undefined || cpf.length < 11){
            window.alert('CPF inválido')
        }else if (numberCard === undefined || numberCard.length < 13 && numberCard.length > 16){
            window.alert('Cartão de crédito inválido')
        } else if (securityCode === undefined || securityCode.length < 3){
            window.alert('Código inválido')
        } else {
            let object = {name: name, cpf: cpf, numberCard: numberCard, dataVencimento: dataVencimento, securityCode: securityCode, value:value, parcel: parcel}
            localStorage.setItem('datasClient', JSON.stringify(object) );
            history.push('/');
        }     
    }

    return (
    <DivBox>
        <Datas>Dados pessoais</Datas>
        <Line></Line>   
        <Name> Nome: <InputName type='string' onChange={((e)=>setName(e.currentTarget.value))}/></Name> 
        <CPF type='number' placeholder='Digite o cpf sem o hifen'>CPF: <InputCPF onChange={((e)=>setCPF(e.currentTarget.value))}/> </CPF>
        <NumberCard>Número do Cartão: </NumberCard> 
        <InputNumberCard onChange={((e)=> setNumberCard(e.currentTarget.value))}/>
        <DataVencimento> Data de Vencimento</DataVencimento>
        <InputDataVencimento onChange={((e)=>setDataVencimento(e.currentTarget.value))}/>
        <SecurityCode> Código de Segurança</SecurityCode>
        <InputSecurityCode onChange={((e)=>setSecurityCode(e.currentTarget.value))}/>
        <Value> Valor</Value>
        <InputValue onChange={((e)=> setValue(e.currentTarget.value))}/>
        <Installment>Parcelas</Installment>
        <InputInstallment onClick={((e)=>setParcel(e.currentTarget.value))}>
            <option value="1 vez"> 1 X NO CARTÃO </option>
            <option value="2 vezes"> 2 X NO CARTÃO </option>
            <option value="3 vezes"> 3 X NO CARTÃO </option>
            <option value="4 vezes"> 4 X NO CARTÃO </option>
            <option value="5 vezes"> 5 X NO CARTÃO </option>
            <option value="6 vezes"> 6 X NO CARTÃO </option>
            <option value="7 vezes"> 7 X NO CARTÃO </option>
            <option value="8 vezes"> 8 X NO CARTÃO </option>
            <option value="9 vezes"> 9 X NO CARTÃO </option>
            <option value="10 vezes"> 10 X NO CARTÃO </option>
            <option value="11 vezes"> 11 X NO CARTÃO </option>
            <option value="12 vezes"> 12 X NO CARTÃO </option>
        </InputInstallment>
        <Button onClick={(()=>Pay())}>PAGAR</Button>
    </DivBox>
    )   
}
export default Checkout;

const DivBox = styled.div`
background: white;
width: 524px;
margin-top: 70px;
height: 780px;
margin-left: 24%;
border-radius: 5px;
`

const Datas = styled.p`
border: solid 1px #0c0c0c30;
width: 440px;
left: 65px;
height: 50px;
font-weight: 600;
padding: 13px;
position: relative;
top: 60px;
color: #2f3676;
font-size: 25px;
`

const Line = styled.div`
left: 65px;
width: 440px;
position: relative;
top: 70px;
border-bottom: solid 1px #2f3676;`

const Name = styled.div`
position: relative;
top: 95px;
left: 60px;
font-size: 22px;
font-weight: 600;
color: #2f3676;
`

const InputName = styled.input`
width: 320px;
border: solid 1px #2f36764f;
height: 35px;
border-radius: 7px;
padding: 5px;
`

const CPF = styled.div`
position: relative;
top: 130px;
left: 60px;
font-size: 22px;
font-weight: 600;
color: #2f3676;
`

const InputCPF = styled.input`
width: 331px;
border: solid 1px #2f36764f;
height: 35px;
border-radius: 7px;
padding: 5px;
`

const NumberCard = styled.div`
position: relative;
top: 170px;
width: 100px;
left: 62px;
font-size: 20px;
font-weight: 600;
color: #2f3676;
`

const InputNumberCard = styled.input`
position: relative;
top: 128px;
left: 171px;
width: 275px;
border: solid 1px #2f36764f;
height: 35px;
border-radius: 7px;
padding: 5px;
`

const DataVencimento = styled.div`
position: relative;
top: 180px;
left: 100px;
font-size: 20px;
width: 70px;
font-weight: 600;
color: #2f3676;
`

const InputDataVencimento = styled.input`
position: relative;
top: 200px;
left: 58px;
width: 184px;
border: solid 1px #2f36764f;
height: 35px;
border-radius: 7px;
padding: 5px;
`

const SecurityCode = styled.div`
position: relative;
top: 96px;
font-size: 20px;
width: 95px;
font-weight: 600;
color: #2f3676;
left: 335px;
`

const InputSecurityCode = styled.input`
position: relative;
top: 120px;
left: 292px;
width: 184px;
border: solid 1px #2f36764f;
height: 35px;
border-radius: 7px;
padding: 5px;
`

const Value = styled.div`
position: relative;
top: 155px;
font-size: 20px;
width: 95px;
font-weight: 600;
color: #2f3676;
left: 120px;
`

const InputValue = styled.input`
position: relative;
top: 158px;
left: 58px;
width: 184px;
border: solid 1px #2f36764f;
height: 35px;
border-radius: 7px;
padding: 5px;
`

const Installment = styled.div`
position: relative;
top: 96px;
font-size: 20px;
width: 95px;
font-weight: 600;
color: #2f3676;
left: 335px;
`

const InputInstallment = styled.select`
position: relative;
top: 91px;
left: 292px;
width: 184px;
border: solid 1px #2f36764f;
height: 35px;
border-radius: 7px;
padding: 5px;
`

const Button = styled.button`
left: 35px;
font-weight: 600;
position: relative;
width: 100px;
height: 40px;
background: #2f3676;
color: white;
font-size: 16px;
top: 165px;
border: solid white;
border-radius: 13px;
`