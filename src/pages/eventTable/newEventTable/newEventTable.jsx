import './newEventTable.css'
import axios from 'axios'
import React from 'react';
import {toast} from 'react-toastify'
import { useState, useEffect} from "react";


export default function NewEventTable() {
    const[eventID, seteventID] = useState('');
    const[artistName, setartistName] = useState('');
    const[eventType, seteventType] = useState('');
    const[location, setlocation] = useState('');
    const[artistID, setartistID] = useState('');
    const[description, setdescription] = useState('');
    const[date, setdate] = useState('');
    const[time, settime] = useState('');
    const[eventOrgID, seteventOrgID] = useState('');
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const[data, setData] = useState(null);
   
    const handleSubmit = () =>{
        setLoading(true);
        setIsError(false);
        
        const data ={
            eventID: eventID,
            artistName: artistName,
            eventType: eventType,
            location: location,
            description: description,
            date: date,
            eventOrgID: eventOrgID,
            time: time,
            artistID: artistID,
        }

        axios.post('http://localhost:8080/api/eventTable', data)
        .then (res =>{
            setData(res.data);
            seteventID('');
            setartistName('');
            setlocation('');
            seteventType('');
            setdescription('');
            setdate('');
            seteventOrgID('');
            settime('');
            setartistID('');
            setLoading(false);
        }).catch(err =>{
            setLoading(false);
            setIsError(true);
        });

    
     }  
 

  return (
    <div className="newEventTable" >
        <div className="newEventTableContainer">
            <h1 className="topTitle">Event Form</h1>

    <form className="newEventTableForm">
        <div className="newEventTableLeft">
            <div className="flex1">
                <div className="newEventTableItem">
                    <label>eventID</label>
                    <input type="number" placeholder="1" name= 'eventID'  value ={eventID} onChange ={e=>seteventID(e.target.value)}
                    className="newEventTableInput" />
                    </div>
                
                    <div className="newEventTableItem">
                    <label>Event Type</label>
                    <input type="text" placeholder="eventType" name='eventType'  value ={eventType} onChange ={e=>seteventType(e.target.value)}
                    className="newEventTableInput" />
                </div>
                    <div className="newEventTableItem">
                    <label>Location</label>
                    <input type="text" placeholder="location" name='location'  value ={location} onChange ={e=>setlocation(e.target.value)}
                    className="newEventTableInput" />
                </div>
                    <div className="newEventTableItem">
                    <label>artistID</label>
                    <input type="number" placeholder="1" name='artistID'  value ={artistID} onChange ={e=>setartistID(e.target.value)}
                    className="newEventTableInput" />
                </div>
            </div>
            <div className="flex2">
                
                <div className="newEventTableItem">
                <label>Description</label>
                <input type="text" placeholder="description" name='description'  value ={description} onChange ={e=>setdescription(e.target.value)}
                className="newEventTableInput" />
                </div>
                <div className="newEventTableItem">
                <label>date</label>
                <input type="text" placeholder="date" name='date'  value ={date} onChange ={e=>setdate(e.target.value)}
                className="newEventTableInput" />
                </div>
                <div className="newEventTableItem">
                    <label>Time</label>
                    <input type="text" placeholder="time" name= 'time'  value ={time} onChange ={e=>settime(e.target.value)}
                    className="newEventTableInput" />
                    </div>
                    <div className="newEventTableItem">
                    <label>eventOrgID</label>
                    <input type="number" placeholder="1" name='eventOrgID'  value ={eventOrgID} onChange ={e=>seteventOrgID(e.target.value)}
                    className="newEventTableInput" />
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