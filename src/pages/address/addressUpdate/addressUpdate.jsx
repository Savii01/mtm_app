import './addressUpdate.css'
import axios from 'axios'
import React from 'react';
import {toast} from 'react-toastify'
import { useState, useEffect} from "react";


export default function AddressUpdate() {

    const[addressID, setaddressID] = useState('');
    const[city, setcity] = useState('');
    const[state, setstate] = useState('');
    const[country, setcountry] = useState('');
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const[data, setData] = useState(null);
   
    const handleSubmit = () =>{
        setLoading(true);
        setIsError(false);
        
        const data ={
            addressID: addressID,
            city: city,
            state: state,
            country: country,
        }

        axios.put(`http://localhost:8080/api/Address/${addressID}`, data)
        .then (res =>{
            setData(res.data);
            setaddressID('');
            setcity('');
            setstate('');
            setcountry('');
            setLoading(false);
        }).catch(err =>{
            setLoading(false);
            setIsError(true);
        });

                  
            
     }  



  
  return (
    <div className="addressUpdate" >
        <div className="addressUpdateContainer">
            <h1 className="topTitle">Address Form</h1>

    <form className="addressUpdateForm">
        <div className="addressUpdateLeft">
            <div className="flex1">
                <div className="addressUpdateItem">
                    <label>AddressID</label>
                    <input type="number" placeholder="1" value ={addressID} onChange ={e=>setaddressID(e.target.value)}
                    className="addressUpdateInput" />
                    </div>
                    <div className="addressUpdateItem">
                    <label>City</label>
                    <input type="text" placeholder="city" value ={city} onChange ={e=>setcity(e.target.value)}
                    className="addressUpdateInput" />
                </div>
            </div>
            <div className="flex2">
            <div className="addressUpdateItem">
            <label>State</label>
            <input type="text" placeholder="Lagos" value ={state} onChange ={e=>setstate(e.target.value)}
            className="addressUpdateInput" />
            </div>
            <div className="addressUpdateItem">
            <label>Country</label>
            <input type="text" placeholder="Nigeria" value ={country} onChange ={e=>setcountry(e.target.value)}
            className="addressUpdateInput" />
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