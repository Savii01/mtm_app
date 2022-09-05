import './managementUpdate.css'
import axios from 'axios'
import React from 'react';
import {toast} from 'react-toastify'
import { useState, useEffect} from "react";


export default function ManagementUpdate() {
  const[managementID, setmanagementID] = useState('');
  const[Month, setMonth] = useState('');
  const[totalIncome, settotalIncome] = useState('');
  const[artistPercent, setartistPercent] = useState('');
  const[companyPercent, setcompanyPercent] = useState('');
  const[expenseID, setexpenseID] = useState('');
  const[eventOrgID, seteventOrgID] = useState('');
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const[data, setData] = useState(null);
 
  const handleSubmit = () =>{
      setLoading(true);
      setIsError(false);
      
      const data ={
          managementID: managementID,
          Month: Month,
          totalIncome: totalIncome,
          artistPercent: artistPercent,
          companyPercent: companyPercent,
          eventOrgID: eventOrgID,
          expenseID: expenseID,
      }

      axios.put(`http://localhost:8080/api/management/${managementID}`, data)
      .then (res =>{
          setData(res.data);
          setmanagementID('');
          setMonth('');
          settotalIncome('');
          setartistPercent('');
          setcompanyPercent('');
          seteventOrgID('');
          setexpenseID('');
          setLoading(false);
      }).catch(err =>{
          setLoading(false);
          setIsError(true);
      });

  
   }  


  return (
    <div className="managementUpdate" >
        <div className="managementUpdateContainer">
            <h1 className="topTitle">Management Form</h1>

    <form className="managementUpdateForm" >
        <div className="managementUpdateLeft">
            <div className="flex1">
                <div className="managementUpdateItem">
                    <label>ManagementID</label>
                    <input type="number" placeholder="1" name= 'managementID' value ={managementID} onChange ={e=>setmanagementID(e.target.value)}
                    className="managementUpdateInput" />
                    </div>
                    <div className="managementUpdateItem">
                    <label>Month</label>
                    <input type="text" placeholder="Month" name='Month' value ={Month} onChange ={e=>setMonth(e.target.value)}
                    className="managementUpdateInput" />
                </div>
                    <div className="managementUpdateItem">
                    <label>Total Income</label>
                    <input type="text" placeholder="totalIncome" name='totalIncome'  value ={totalIncome} onChange ={e=>settotalIncome(e.target.value)}
                    className="managementUpdateInput" />
                </div>
            </div>
            <div className="flex2">
                <div className="managementUpdateItem">
                <label>Artist Percent</label>
                <input type="text" placeholder="name" name='artistPercent' value ={artistPercent} onChange ={e=>setartistPercent(e.target.value)}
                className="managementUpdateInput" />
                </div>
                <div className="managementUpdateItem">
                <label>Company Percent</label>
                <input type="text" placeholder="name" name='companyPercent' value ={companyPercent} onChange ={e=>setcompanyPercent(e.target.value)}
                className="managementUpdateInput" />
                </div>
                <div className="managementUpdateItem">
                <label>expenseID</label>
                <input type="text" placeholder="1" name='expenseID' value ={expenseID} onChange ={e=>setexpenseID(e.target.value)}
                className="managementUpdateInput" />
                </div>
                <div className="managementUpdateItem">
                <label>eventOrgID</label>
                <input type="text" placeholder="1" name='eventOrgID' value ={eventOrgID} onChange ={e=>seteventOrgID(e.target.value)}
                className="managementUpdateInput" />
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