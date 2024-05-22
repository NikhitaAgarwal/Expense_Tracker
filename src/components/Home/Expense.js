import React,{useEffect, useState} from 'react'
import styled from "styled-components";
import Overview from "./Overview";
import Transaction from "./Transaction";


const Container=styled.div` display:flex;
flex-direction: column;
align-items: center;
margin: 40px 0 10px;
width:360px;
`;

function Expense(props) {

  const [transaction, updatetrans]=useState([]);
  const [expense, updateExpense]=useState(0);
  const [income, updateIncome]=useState(0);


  const addTransaction=(payload)=> {
    const transactionArray=[...transaction];
    transactionArray.push(payload);
    updatetrans(transactionArray);

  }

  const calculateBalance = () => {
    let exp=0;
    let inc=0;
    transaction.map((payload) => {
      payload.type === "Expense" ? exp=exp+payload.amount : inc=inc+payload.amount;

    })
    updateExpense(exp);
    updateIncome(inc);
  }

  useEffect(() => calculateBalance(), [transaction]);

  return(<Container> <Overview addTransaction= {
      addTransaction
    } expense={expense} income={income}

    /> <Transaction transaction= {
      transaction
    }

    /> </Container>);
}

export default Expense