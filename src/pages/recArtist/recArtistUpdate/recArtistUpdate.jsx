import './recArtistUpdate.css'
import axios from 'axios'
import React from 'react';
import {toast} from 'react-toastify'
import { useState} from "react";


export default function RecArtistUpdate() {
    const[recArtistID, setrecArtistID] = useState('');
    const[recArtistName, setrecArtistName] = useState('');
    const[email, setemail] = useState('');
    const[description, setdescription] = useState('');
    const[addressID, setaddressID] = useState('');
    const[managerID, setmanagerID] = useState('');
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const[data, setData] = useState(null);
   
    const handleSubmit = () =>{
        setLoading(true);
        setIsError(false);
        
        const data ={
            recArtistID: recArtistID,
            recArtistName: recArtistName,
            email: email,
            addressID: addressID,
            managerID: managerID,
            description: description,
        }

        axios.put(`http://localhost:8080/api/recArtist/${recArtistID}`, data)
        .then (res =>{
            setData(res.data);
            setrecArtistID('');
            setrecArtistName('');
            setdescription('');
            setemail('');
            setaddressID('');
            setmanagerID('');
            setLoading(false);
        }).catch(err =>{
            setLoading(false);
            setIsError(true);
        });

    
     }  

  return (
    <div className="recArtistUpdate" >
        <div className="recArtistUpdateContainer">
            <h1 className="topTitle">Rec Artist Form</h1>

    <form className="recArtistUpdateForm">
        <div className="recArtistUpdateLeft">
            <div className="flex1">
                <div className="recArtistUpdateItem">
                    <label>Rec ArtistID</label>
                    <input type="number" placeholder="1" name= 'Rec ArtistID'  value ={recArtistID} onChange ={e=>setrecArtistID(e.target.value)}
                    className="recArtistUpdateInput" />
                    </div>
                    <div className="recArtistUpdateItem">
                    <label>rec Artist Name</label>
                    <input type="text" placeholder="recArtistName" name='name'  value ={recArtistName} onChange ={e=>setrecArtistName(e.target.value)}
                    className="recArtistUpdateInput" />
                </div>
                    <div className="recArtistUpdateItem">
                    <label>email</label>
                    <input type="text" placeholder="email" name='email'  value ={email} onChange ={e=>setemail(e.target.value)}
                    className="recArtistUpdateInput" />
                </div>
            </div>
            <div className="flex2">
                <div className="recArtistUpdateItem">
                <label>description</label>
                <input type="text" placeholder="description" name='description'  value ={description} onChange ={e=>setdescription(e.target.value)}
                className="recArtistUpdateInput" />
                </div>
                <div className="recArtistUpdateItem">
                <label>addressID</label>
                <input type="number" placeholder="1" name='addressID'  value ={addressID} onChange ={e=>setaddressID(e.target.value)}
                className="recArtistUpdateInput" />
                </div>
                <div className="recArtistUpdateItem">
                <label>managerID</label>
                <input type="number" placeholder="managerID" name='managerID'  value ={managerID} onChange ={e=>setmanagerID(e.target.value)}
                className="recArtistUpdateInput" />
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