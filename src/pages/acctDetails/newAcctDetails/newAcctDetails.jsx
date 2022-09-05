import './newAcctDetails.css'
import axios from 'axios'
import React from 'react';
import {toast} from 'react-toastify'
import { useState, useEffect} from "react";


export default function NewAcctDetails() {

    const[accountID, setAccountID] = useState('');
    const[accountName, setAccountName] = useState('');
    const[accountNumber, setAccountNumber] = useState('');
    const[bank, setBank] = useState('');
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const[data, setData] = useState(null);
   
    const handleSubmit = () =>{
        setLoading(true);
        setIsError(false);
        
        const data ={
            accountID: accountID,
            accountName: accountName,
            accountNumber: accountNumber,
            bank: bank,
        }

        axios.post('http://localhost:8080/api/acctDetails', data)
        .then (res =>{
            setData(res.data);
            setAccountID('');
            setAccountName('');
            setAccountNumber('');
            setBank('');
            setLoading(false);
        }).catch(err =>{
            setLoading(false);
            setIsError(true);
        });
    }   


  return (
    <div className="newAcctDetails" >
        <div className="newAcctDetailsContainer">
            <h1 className="topTitle">Bank Account Form</h1>

    <form className="newAcctDetailsForm">
        <div className="newAcctDetailsLeft">
            <div className="flex1">
                <div className="newAcctDetailsItem">
                    <label>AccountID</label>
                    <input type="number" placeholder="1" value ={accountID} onChange ={e=>setAccountID(e.target.value)}
                    className="newAcctDetailsInput" />
                    </div>
                    <div className="newAcctDetailsItem">
                    <label>Account Name</label>
                    <input type="text" placeholder="name" value ={accountName} onChange ={e=>setAccountName(e.target.value)}
                    className="newAcctDetailsInput" />
                </div>
            </div>
            <div className="flex2">
            <div className="newAcctDetailsItem">
            <label>Account Number</label>
            <input type="text" placeholder="your account number" value ={accountNumber} onChange ={e=>setAccountNumber(e.target.value)}
            className="newAcctDetailsInput" />
            </div>
            <div className="newAcctDetailsItem">
            <label>Bank</label>
            <input type="text" placeholder="bank" value ={bank} onChange ={e=>setBank(e.target.value)}
            className="newAcctDetailsInput" />
            </div>
       
        </div>
       
        </div>
        
    </form>
    {isError && <small >Something went wrong. Please try again later.</small>}
    <button className="CreateButton" type="submit" 
    onClick={handleSubmit}
    disabled ={loading}>
        {loading?'Loading':'Create'}</button>

        </div>
    </div>        
    )
}