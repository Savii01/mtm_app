import './artistUpdate.css'
import axios from 'axios'
import React from 'react';
import { useState} from "react";


export default function ArtistUpdate() {
    const[artistID, setartistID] = useState('');
    const[artistName, setartistName] = useState('');
    const[gender, setgender] = useState('');
    const[email, setemail] = useState('');
    const[genre, setgenre] = useState('');
    const[addressID, setaddressID] = useState('');
    const[accountID, setaccountID] = useState('');
    const[contractID, setcontractID] = useState('');
    const[managerID, setmanagerID] = useState('');
    const[managementID, setmanagementID] = useState('');
    const[managerName, setmanagerName] = useState('');
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const[data, setData] = useState(null);
   
    const handleSubmit = () =>{
        setLoading(true);
        setIsError(false);
        
        const data ={
            artistID: artistID,
            artistName: artistName,
            gender: gender,
            email: email,
            addressID: addressID,
            accountID: accountID,
            managerID: managerID,
            contractID: contractID,
            managementID: managementID,
            managerName: managerName,
            genre: genre,
        }

        axios.put(`http://localhost:8080/api/artist${artistID}`, data)
        .then (res =>{
            setData(res.data);
            setartistID('');
            setartistName('');
            setemail('');
            setgender('');
            setaddressID('');
            setaccountID('');
            setmanagerName('');
            setmanagementID('');
            setmanagerID('');
            setcontractID('');
            setgenre('');
            setLoading(false);
        }).catch(err =>{
            setLoading(false);
            setIsError(true);
        });

    
     }  
 
  return (
    <div className="artistUpdate" >
        <div className="artistUpdateContainer">
            <h1 className="topTitle">Artist Form</h1>

    <form className="artistUpdateForm">
        <div className="artistUpdateLeft">
            <div className="flex1">
                <div className="artistUpdateItem">
                    <label>ArtistID</label>
                    <input type="number" placeholder="1" value ={artistID} onChange ={e=>setartistID(e.target.value)}
                    className="artistUpdateInput" />
                    </div>
                    <div className="artistUpdateItem">
                    <label>Email</label>
                    <input type="email" placeholder="youremail@email.com" value ={email} onChange ={e=>setemail(e.target.value)}
                    className="artistUpdateInput" />
                </div>
                    <div className="artistUpdateItem">
                    <label>accountID</label>
                    <input type="number" placeholder="1" value ={accountID} onChange ={e=>setaccountID(e.target.value)}
                    className="artistUpdateInput" />
                </div>
                    <div className="artistUpdateItem">
                    <label>ContractID</label>
                    <input type="number" placeholder="1" value ={contractID} onChange ={e=>setcontractID(e.target.value)}
                    className="artistUpdateInput" />
                </div>
            </div>
            <div className="flex2">
                <div className="artistUpdateItem">
                <label>Artist Name</label>
                <input type="text" placeholder="name" value ={artistName} onChange ={e=>setartistName(e.target.value)}
                className="artistUpdateInput" />
                </div>
                <div className="artistUpdateItem">
                    <label>Gender</label>
                    <input type="text" placeholder="male/female" value ={gender} onChange ={e=>setgender(e.target.value)}
                className="artistUpdateInput" />
                    </div>
                <div className="artistUpdateItem">
                    <label>Genre</label>
                    <input type="text" placeholder="genre" value ={genre} onChange ={e=>setgenre(e.target.value)}
                className="artistUpdateInput" />
                    </div>
                    <div className="artistUpdateItem">
                    <label>addressID</label>
                    <input type="number" placeholder="1" value ={addressID} onChange ={e=>setaddressID(e.target.value)}
                    className="artistUpdateInput" />
                </div>
                </div>
        
            
            <div className="flex3">
                <div className="artistUpdateItem">
                <label>ManagementID</label>
                <input type="number" placeholder="1" value ={managementID} onChange ={e=>setmanagementID(e.target.value)}
                className="artistUpdateInput" />
                </div>
                <div className="artistUpdateItem">
                <label>ManagerID</label>
                <input type="number" placeholder="1" value ={managerID} onChange ={e=>setmanagerID(e.target.value)}
                className="artistUpdateInput" />
                </div>
           
                <div className="artistUpdateItem">
                <label>Manager Name</label>
                <input type="text" placeholder="name" value ={managerName} onChange ={e=>setmanagerName(e.target.value)}
                className="artistUpdateInput" />
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