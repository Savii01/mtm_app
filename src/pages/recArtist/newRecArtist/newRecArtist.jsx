import './newRecArtist.css'
import axios from 'axios'
import React from 'react';
import {toast} from 'react-toastify'
import { useState, useEffect} from "react";


export default function NewRecArtist() {
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

        axios.post('http://localhost:8080/api/recArtist', data)
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
    <div className="newRecArtist" >
        <div className="newRecArtistContainer">
            <h1 className="topTitle">Rec Artist Form</h1>

    <form className="newRecArtistForm">
        <div className="newRecArtistLeft">
            <div className="flex1">
                <div className="newRecArtistItem">
                    <label>Rec ArtistID</label>
                    <input type="number" placeholder="1" name= 'Rec ArtistID'  value ={recArtistID} onChange ={e=>setrecArtistID(e.target.value)}
                    className="newRecArtistInput" />
                    </div>
                    <div className="newRecArtistItem">
                    <label>rec Artist Name</label>
                    <input type="text" placeholder="recArtistName" name='name'  value ={recArtistName} onChange ={e=>setrecArtistName(e.target.value)}
                    className="newRecArtistInput" />
                </div>
                    <div className="newRecArtistItem">
                    <label>email</label>
                    <input type="text" placeholder="email" name='email'  value ={email} onChange ={e=>setemail(e.target.value)}
                    className="newRecArtistInput" />
                </div>
            </div>
            <div className="flex2">
                <div className="newRecArtistItem">
                <label>description</label>
                <input type="text" placeholder="description" name='description'  value ={description} onChange ={e=>setdescription(e.target.value)}
                className="newRecArtistInput" />
                </div>
                <div className="newRecArtistItem">
                <label>addressID</label>
                <input type="number" placeholder="1" name='addressID'  value ={addressID} onChange ={e=>setaddressID(e.target.value)}
                className="newRecArtistInput" />
                </div>
                <div className="newRecArtistItem">
                <label>managerID</label>
                <input type="number" placeholder="managerID" name='managerID'  value ={managerID} onChange ={e=>setmanagerID(e.target.value)}
                className="newRecArtistInput" />
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