import './newEventOrg.css'
import axios from 'axios'
import React from 'react';
import {toast} from 'react-toastify'
import { useState} from "react";


export default function NewEventOrg() {
  const[eventOrgID, seteventOrgID] = useState('');
  const[companyName, setcompanyName] = useState('');
  const[eventOrgName, seteventOrgName] = useState('');
  const[email, setemail] = useState('');
  const[phone, setphone] = useState('');
  const[addressID, setaddressID] = useState('');
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const[data, setData] = useState(null);
 
  const handleSubmit = () =>{
      setLoading(true);
      setIsError(false);
      
      const data ={
          eventOrgID: eventOrgID,
          companyName: companyName,
          eventOrgName: eventOrgName,
          email: email,
          addressID: addressID,
          phone: phone,
      }

      axios.post('http://localhost:8080/api/eventOrg', data)
      .then (res =>{
          setData(res.data);
          seteventOrgID('');
          setcompanyName('');
          setemail('');
          seteventOrgName('');
          setaddressID('');
          setphone('');
          setLoading(false);
      }).catch(err =>{
          setLoading(false);
          setIsError(true);
      });

  
   }  

  return (
    <div className="newEventOrg" >
        <div className="newEventOrgContainer">
            <h1 className="topTitle">Event Organiser Form</h1>

    <form className="newEventOrgForm" onSubmit={handleSubmit}>
        <div className="newEventOrgLeft">
            <div className="flex1">
                <div className="newEventOrgItem">
                    <label>eventOrgID</label>
                    <input type="number" placeholder="1" name= 'eventOrgID'  value ={eventOrgID} onChange ={e=>seteventOrgID(e.target.value)}
                    className="newEventOrgInput" />
                    </div>
                
                    <div className="newEventOrgItem">
                    <label>Company Name</label>
                    <input type="text" placeholder="companyName" name='companyName'   value ={companyName} onChange ={e=>setcompanyName(e.target.value)}
                    className="newEventOrgInput" />
                </div>
                    <div className="newEventOrgItem">
                    <label>eventOrg Name</label>
                    <input type="text" placeholder="eventOrgName" name='eventOrgName'  value ={eventOrgName} onChange ={e=>seteventOrgName(e.target.value)}
                    className="newEventOrgInput" />
                </div>
            </div>
            <div className="flex2">
                
                <div className="newEventOrgItem">
                <label>email</label>
                <input type="text" placeholder="email" name='email'  value ={email} onChange ={e=>setemail(e.target.value)}
                className="newEventOrgInput" />
                </div>
                <div className="newEventOrgItem">
                <label>phone</label>
                <input type="text" placeholder="phone" name='phone'  value ={phone} onChange ={e=>setphone(e.target.value)}
                className="newEventOrgInput" />
                </div>
                <div className="newEventOrgItem">
                    <label>address ID</label>
                    <input type="number" placeholder="1" name= 'addressID'  value ={addressID} onChange ={e=>setaddressID(e.target.value)}
                    className="newEventOrgInput" />
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