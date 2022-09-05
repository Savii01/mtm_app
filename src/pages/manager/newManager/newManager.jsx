import './newManager.css'
import axios from 'axios'
import React from 'react';
import {toast} from 'react-toastify'
import { useState, useEffect} from "react";


export default function NewManager() {
    const[managerID, setmanagerID] = useState('');
    const[managerName, setmanagerName] = useState('');
    const[gender, setgender] = useState('');
    const[email, setemail] = useState('');
    const[accountID, setaccountID] = useState('');
    const[addressID, setaddressID] = useState('');
    const[assID, setassID] = useState('');
    const[assName, setassName] = useState('');
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const[data, setData] = useState(null);
   
    const handleSubmit = () =>{
        setLoading(true);
        setIsError(false);
        
        const data ={
            managerID: managerID,
            managerName: managerName,
            gender: gender,
            email: email,
            accountID: accountID,
            addressID: addressID,
            assID: assID,
            assName: assName,
        }
  
        axios.post('http://localhost:8080/api/manager', data)
        .then (res =>{
            setData(res.data);
            setmanagerID('');
            setmanagerName('');
            setemail('');
            setgender('');
            setaccountID('');
            setaddressID('');
            setLoading(false);
        }).catch(err =>{
            setLoading(false);
            setIsError(true);
        });
  
    
     }  
  
  


  return (
    <div className="newManager" >
        <div className="newManagerContainer">
            <h1 className="topTitle">Manager Form</h1>

    <form className="newManagerForm">
        <div className="newManagerLeft">
            <div className="flex1">
                <div className="newManagerItem">
                    <label>ManagerID</label>
                    <input type="number" placeholder="1"  value ={managerID} onChange ={e=>setmanagerID(e.target.value)}
                    className="newManagerInput" />
                    </div>
                    <div className="newManagerItem">
                    <label>Email</label>
                    <input type="email" placeholder="youremail@email.com"  value ={email} onChange ={e=>setemail(e.target.value)}
                    className="newManagerInput" />
                </div>
                <div className="newManagerItem">
                    <label>AssID</label>
                    <input type="number" placeholder="1"  value ={assID} onChange ={e=>setassID(e.target.value)}
                    className="newManagerInput" />
                    </div>
                <div className="newManagerItem">
                    <label>accountID</label>
                    <input type="number" placeholder="1"  value ={accountID} onChange ={e=>setaccountID(e.target.value)}
                    className="newManagerInput" />
                    </div>
            </div>
            <div className="flex2">
                <div className="newManagerItem">
                <label>Manager Name</label>
                <input type="text" placeholder="name"  value ={managerName} onChange ={e=>setmanagerName(e.target.value)}
                className="newManagerInput" />
                </div>
                <div className="newManagerItem">
                    <label>Gender</label>
                    <input type="text" placeholder="malae/female"  value ={gender} onChange ={e=>setgender(e.target.value)}
                className="newManagerInput" />
                    </div>
                    <div className="newManagerItem">
                <label>Admin Assistant Name</label>
                <input type="text" placeholder="name"  value ={assName} onChange ={e=>setassName(e.target.value)}
                className="newManagerInput" />
                </div>    
                <div className="newManagerItem">
                    <label>addressID</label>
                    <input type="number" placeholder="1"  value ={addressID} onChange ={e=>setaddressID(e.target.value)}
                    className="newManagerInput" />
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