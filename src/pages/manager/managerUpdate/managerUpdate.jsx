import './managerUpdate.css'
import axios from 'axios'
import React from 'react';
import { useState} from "react";


export default function ManagerUpdate() {
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
  
        axios.put(`http://localhost:8080/api/manager/${managerID}`, data)
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
    <div className="managerUpdate" >
        <div className="managerUpdateContainer">
            <h1 className="topTitle">Manager Form</h1>

    <form className="managerUpdateForm">
        <div className="managerUpdateLeft">
            <div className="flex1">
                <div className="managerUpdateItem">
                    <label>ManagerID</label>
                    <input type="number" placeholder="1"  value ={managerID} onChange ={e=>setmanagerID(e.target.value)}
                    className="managerUpdateInput" />
                    </div>
                    <div className="managerUpdateItem">
                    <label>Email</label>
                    <input type="email" placeholder="youremail@email.com"  value ={email} onChange ={e=>setemail(e.target.value)}
                    className="managerUpdateInput" />
                </div>
                <div className="managerUpdateItem">
                    <label>AssID</label>
                    <input type="number" placeholder="1"  value ={assID} onChange ={e=>setassID(e.target.value)}
                    className="managerUpdateInput" />
                    </div>
                <div className="managerUpdateItem">
                    <label>accountID</label>
                    <input type="number" placeholder="1"  value ={accountID} onChange ={e=>setaccountID(e.target.value)}
                    className="managerUpdateInput" />
                    </div>
            </div>
            <div className="flex2">
                <div className="managerUpdateItem">
                <label>Manager Name</label>
                <input type="text" placeholder="name"  value ={managerName} onChange ={e=>setmanagerName(e.target.value)}
                className="managerUpdateInput" />
                </div>
                <div className="managerUpdateItem">
                    <label>Gender</label>
                    <input type="text" placeholder="malae/female"  value ={gender} onChange ={e=>setgender(e.target.value)}
                className="managerUpdateInput" />
                    </div>
                    <div className="managerUpdateItem">
                <label>Admin Assistant Name</label>
                <input type="text" placeholder="name"  value ={assName} onChange ={e=>setassName(e.target.value)}
                className="managerUpdateInput" />
                </div>    
                <div className="managerUpdateItem">
                    <label>addressID</label>
                    <input type="number" placeholder="1"  value ={addressID} onChange ={e=>setaddressID(e.target.value)}
                    className="managerUpdateInput" />
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