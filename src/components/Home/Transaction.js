import React, {useEffect, useState} from 'react'
import styled from "styled-components";


const Container1 =styled.div`
display:flex;
flex-direction: column;
align-items: flex-start;
padding: 10px 22px;
font-size: 18px;
width: 100%;
gap: 10px;
font-weight: bold;
& input{
  padding: 10px 12px;
  border-radius:12px;
  border: 1px solid white;
  outline:none;
  background: lightgrey;
  width: 100%;
}
`; 

const Cell=styled.div`
display: flex;
flex-direction: row;
padding:10px 15px;
font-size:14px;
border: 1px solid lightgrey;
border-radius: 2px;
justify-content: space-between;
font-weight: normal;
align-items:center;
width: 100%;
border-right: 4px solid ${(props) => (props.isExpense ? "red" : "green")};
`;


const TransactionCell = (props) =>{
  return(
    <Cell isExpense={props.payload?.type === "Expense"}>
      <span>{props.payload.desc}</span>
      <span>Rs.{props.payload.amount}</span>
    </Cell>
  )
}
const Transaction =(props) => {
    
  const [searchText, updatesearchText] = useState("");

  const [filtertransction, updatetranscation] = useState(props.transaction);

  const filterData =(searchText) =>
    {
      if(!searchText || !searchText.trim().length)
        {
          updatetranscation(props.transaction);
          return;
        }

        let txn = [...props.transaction];
        txn = txn.filter((payload) => payload.desc.toLowerCase().includes(searchText.toLowerCase().trim()));

        updatetranscation(txn)
    }


useEffect(()=> filterData(searchText),[props.transaction])

  return (
    <Container1>
        Transactions
        <input placeholder="Search" value={searchText} onChange={(e) => {updatesearchText(e.target.value)
          filterData(e.target.value)
        }}/>
        {filtertransction?.length?filtertransction.map((payload) => (
          <TransactionCell payload={payload}/>
        )):""}
    </Container1>
  )
}

export default Transaction