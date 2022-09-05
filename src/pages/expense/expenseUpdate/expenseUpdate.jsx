import './expenseUpdate.css'
import axios from 'axios'
import React from 'react';
import { useState} from "react";


export default function ExpenseUpdate() {
  const[expenseID, setexpenseID] = useState('');
    const[artistName, setartistName] = useState('');
    const[expenses, setexpenses] = useState('');
    const[cost, setcost] = useState('');
    const[incuredBy, setincuredBy] = useState('');
    const[dateIncured, setdateIncured] = useState('');
    const[date, setdate] = useState('');
    const[time, settime] = useState('');
    const[eventOrgID, seteventOrgID] = useState('');
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const[data, setData] = useState(null);
   
    const handleSubmit = () =>{
        setLoading(true);
        setIsError(false);
        
        const data ={
            expenseID: expenseID,
            artistName: artistName,
            expenses: expenses,
            cost: cost,
            dateIncured: dateIncured,
            date: date,
            eventOrgID: eventOrgID,
            time: time,
            incuredBy: incuredBy,
        }

        axios.put(`http://localhost:8080/api/expenses/${expenseID}`, data)
        .then (res =>{
            setData(res.data);
            setexpenseID('');
            setartistName('');
            setcost('');
            setexpenses('');
            setdateIncured('');
            setdate('');
            seteventOrgID('');
            settime('');
            setincuredBy('');
            setLoading(false);
        }).catch(err =>{
            setLoading(false);
            setIsError(true);
        });

    
     }  
 
  return (
    <div className="expenseUpdate" >
        <div className="expenseUpdateContainer">
            <h1 className="topTitle">Expense Form</h1>

    <form className="expenseUpdateForm" onSubmit={handleSubmit}>
        <div className="expenseUpdateLeft">
            <div className="flex1">
                <div className="expenseUpdateItem">
                    <label>ExpenseID</label>
                    <input type="number" placeholder="1" name= 'expenseID'  value ={expenseID} onChange ={e=>setexpenseID(e.target.value)}
                    className="expenseUpdateInput" />
                    </div>
                    <div className="expenseUpdateItem">
                    <label>Expenses</label>
                    <input type="text" placeholder="expenses" name='expenses'  value ={expenses} onChange ={e=>setexpenses(e.target.value)}
                    className="expenseUpdateInput" />
                </div>
                    <div className="expenseUpdateItem">
                    <label>Cost</label>
                    <input type="text" placeholder="cost" name='cost'  value ={cost} onChange ={e=>setcost(e.target.value)}
                    className="expenseUpdateInput" />
                </div>
            </div>
            <div className="flex2">
                <div className="expenseUpdateItem">
                <label>Incured By</label>
                <input type="text" placeholder="name" name='incuredBy' value ={incuredBy} onChange ={e=>setincuredBy(e.target.value)}
                className="expenseUpdateInput" />
                </div>
                <div className="expenseUpdateItem">
                <label>Date Incured</label>
                <input type="text" placeholder="date" name='dateIncured'  value ={dateIncured} onChange ={e=>setdateIncured(e.target.value)}
                className="expenseUpdateInput" />
                </div>
                
            </div>
        </div>
        </form>
        {isError && <small >Something went wrong. Please try again.</small>}
    <button className="CreateButton" type="submit" 
    onClick={handleSubmit}
    disabled ={loading}>
        {loading?'Loading':'Update'}</button>
        </div>
    </div>        
    )
}