import React, { useState } from 'react';
import styled from "styled-components";

const Container1 =styled.div`
display:flex;
flex-direction: column;
align-items: center;
margin: 10px;
width: 100%;

`;

const BalanceBox =styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
align-items:center;
width: 100%;
font-weight:bold;
font-size: 18px;
`
;

const Addtransaction =styled.div`
background:green;
color: white;
text-align:center;
padding: 5px 10px;
border-radius: 4px;
cursor:pointer;
font-weight:bold;
font-size: small;
border: green;

`;

const AddTransactioncontainer =styled.div`
display: flex;
flex-direction: column;
border: 1px solid grey;
margin: 15px 20px;
padding: 10px 15px;
width:100%;
gap:10px;
& input{
    outline: none;
    padding:10px 12px;
    border: 1px solid grey;
    border-radius: 4px;

}
`;

const RadioBox=styled.div`
 display:flex;
 flex-direction: row;
 width: 100%;
 align-items: center;
 & input{
    margin:0 10px;
    width:unset;
 }
`;

const ExpenseContainer=styled.div`
display: flex;
flex-direction: row;
gap: 12px;
margin: 20px;
`;

const ExpenseBox=styled.div`
display: flex;
flex-direction: column;
border: 1px solid grey;
padding : 15px 20px;
width: 135px;
font-size: 14px;
border-radius:4px;

& span{
    font-size: 20px;
    font-weight: bold;
    color: ${(props) => (props.isIncome ? "green":"red")};
}

`;





const AddTransactionview = (props) => {


    const [amount,setamount]=useState();
    const [desc,setDesc]=useState();
    const [type,setType]=useState("Expense");

    const adddata = () =>{
        props.addTransaction({amount:Number(amount),desc,type,id:Date.now()})
        console.log();
        props.toggleaddTransction();
    }



    return ( 
        <AddTransactioncontainer>
            <input placeholder='Amount' type='number' name='amount' value={amount} onChange={(e)=>setamount(e.target.value)}/>
            <input placeholder='Decription' type='text' name='Decription' value={desc} onChange={(e)=> setDesc(e.target.value)}/>
            <RadioBox>
                <input type='radio' id='expense' name='type' value='Expense' checked={type === "Expense"} onChange={(e)=> setType(e.target.value)}/>Expense
                <input type='radio' id='income' name='type' value='Income' checked={type === "Income"} onChange={(e)=> setType(e.target.value)}/>Income
            </RadioBox>
            <Addtransaction onClick={adddata}>ADD TRANSACTION</Addtransaction>

        </AddTransactioncontainer>
    )
}

function Overview(props) {

    const [inputTrans, toggleaddTransction] =useState(false);

  return (
    <Container1>
        <BalanceBox>
            Balance : Rs.{props.income - props.expense}
            <Addtransaction onClick={() => toggleaddTransction(!inputTrans) }>{inputTrans ? "CANCEL": "ADD"}</Addtransaction>
        </BalanceBox>
        {inputTrans && <AddTransactionview toggleaddTransction={toggleaddTransction} addTransaction={props.addTransaction}/>}

        <ExpenseContainer>
         <ExpenseBox isIncome={false}>
            <b>Expense</b><span>
                Rs.{props.expense}</span>
         </ExpenseBox>
         <ExpenseBox isIncome={true}>
            Income<span>Rs.{props.income}</span>
         </ExpenseBox>

        </ExpenseContainer>

        

    </Container1>


  )
}

export default Overview