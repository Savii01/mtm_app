import './newContract.css'
import axios from 'axios'
import React from 'react';
import {toast} from 'react-toastify'
import { useState, useEffect} from "react";


export default function NewContract() {
    const[contractID, setcontractID] = useState('');
    const[statuss, setstatuss] = useState('');
    const[Date, setdate] = useState('');
    const[Expire, setExpire] = useState('');
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const[data, setData] = useState(null);
   
    const handleSubmit = () =>{
        setLoading(true);
        setIsError(false);
        
        const data ={
            contractID: contractID,
            statuss: statuss,
            Date: Date,
            Expire: Expire,
        }

        axios.post('http://localhost:8080/api/contract', data)
        .then (res =>{
            setData(res.data);
            setcontractID('');
            setstatuss('');
            setExpire('');
            setdate('');
            setLoading(false);
        }).catch(err =>{
            setLoading(false);
            setIsError(true);
        });

    
     }  
  return (
    <div className="newContract" >
        <div className="newContractContainer">
            <h1 className="topTitle">contract Form</h1>

    <form className="newContractForm">
        <div className="newContractLeft">
            <div className="flex1">
                <div className="newContractItem">
                    <label>contractID</label>
                    <input type="number" placeholder="1"  value ={contractID} onChange ={e=>setcontractID(e.target.value)}
                    className="newContractInput" />
                    </div>
                    <div className="newContractItem">
                    <label>status</label>
                    <input type="text" placeholder="status"  value ={statuss} onChange ={e=>setstatuss(e.target.value)}
                    className="newContractInput" />
                </div>
            </div>
            <div className="flex2">
            <div className="newContractItem">
            <label>Date</label>
            <input type="text" placeholder="Date"  value ={Date} onChange ={e=>setdate(e.target.value)}
            className="newContractInput" />
            </div>
            <div className="newContractItem">
            <label>Expire</label>
            <input type="text" placeholder="expiry Date"  value ={Expire} onChange ={e=>setExpire(e.target.value)}
            className="newContractInput" />
            </div>
       
        </div>
       
        </div>
        
    </form>
    
    {isError && <small >Something went wrong. Please try again.</small>}
    <button className="CreateButton" type="submit" 
    onClick={handleSubmit}
    disabled ={loading}>
        {loading?'Loading':'Create'}</button>
        </div>
    </div>        
    )
}