import './adminUpdate.css'
import axios from 'axios'
import React from 'react';
import {toast} from 'react-toastify'
import { useState, useEffect} from "react";


export default function AdminUpdate() {
    const[assID, setassID] = useState('');
    const[assName, setassName] = useState('');
    const[gender, setgender] = useState('');
    const[email, setemail] = useState('');
    const[addressID, setaddressID] = useState('');
    const[accountID, setaccountID] = useState('');
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const[data, setData] = useState(null);
   
    const handleSubmit = () =>{
        setLoading(true);
        setIsError(false);
        
        const data ={
            assID: assID,
            assName: assName,
            gender: gender,
            email: email,
            addressID: addressID,
            accountID: accountID,
        }

        axios.put(`http://localhost:8080/api/AdminAssistant/${assID}`, data)
        .then (res =>{
            setData(res.data);
            setassID('');
            setassName('');
            setemail('');
            setgender('');
            setaddressID('');
            setaccountID('');
            setLoading(false);
        }).catch(err =>{
            setLoading(false);
            setIsError(true);
        });

    
     }  
    
  return (
    <div className="adminUpdate" >
        <div className="adminUpdateContainer">
            <h1 className="topTitle">Admin Assistant Form</h1>

    <form className="adminUpdateForm">
        <div className="adminUpdateLeft">
            <div className="flex1">
                <div className="adminUpdateItem">
                    <label>AssID</label>
                    <input type="number" placeholder="1" value ={assID} onChange ={e=>setassID(e.target.value)}
                    className="adminUpdateInput" />
                    </div>
                    <div className="adminUpdateItem">
                    <label>Email</label>
                    <input type="email" placeholder="youremail@email.com" value ={email} onChange ={e=>setemail(e.target.value)}
                    className="adminUpdateInput" />
                </div>
                <div className="adminUpdateItem">
                    <label>addressID</label>
                    <input type="number" placeholder="1" value ={addressID} onChange ={e=>setaddressID(e.target.value)}
                    className="adminUpdateInput" />
                    </div>
            </div>
            <div className="flex2">
                <div className="adminUpdateItem">
                <label>Admin Assistant Name</label>
                <input type="text" placeholder="name" value ={assName} onChange ={e=>setassName(e.target.value)}
                className="adminUpdateInput" />
                </div>
                <div className="adminUpdateItem">
                    <label>Gender</label>
                    <div className="AdminAssGender">
                    <input type="text" placeholder="male/female" value ={gender} onChange ={e=>setgender(e.target.value)}
                className="adminUpdateInput" />
                    </div>
                    <div className="adminUpdateItem">
                    <label>accountID</label>
                    <input type="number" placeholder="1" value ={accountID} onChange ={e=>setaccountID(e.target.value)}
                    className="adminUpdateInput" />
                    </div>
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