import React from "react";
import './ExpenseItem.css';
import Card from "./Card";
import ExpenseDate from "./ExpenseDate.js";

function ExpenseItem(props){
    return(
       <div className="expense-item">
           {/* <div>{expenseDate.toISOString()}</div> */}
          <ExpenseDate fecha={props.date}/>
           <div className="expense-item__descritpion">
               <h2>{props.title}</h2>
               <div className="expense-item__price">${props.amount}</div>
           </div>
       </div>
    );
}
 
export default ExpenseItem;