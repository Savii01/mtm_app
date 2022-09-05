import './newInvoice.css'
import axios from 'axios'
import React from 'react';
import {toast} from 'react-toastify'
import { useState, useEffect} from "react";


export default function NewInvoice() {

    const[InvoiceID, setInvoiceID] = useState('');
    const[artistName, setartistName] = useState('');
    const[EventOrgName, setEventOrgName] = useState('');
    const[statuss, setstatuss] = useState('');
    const[amount, setamount] = useState('');
    const[Date, setdate] = useState('');
    const[due, setdue] = useState('');
    const[artistID, setartistID] = useState('');
    const[eventID, seteventID] = useState('');
    const[eventOrgID, seteventOrgID] = useState('');
   
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const[data, setData] = useState(null);
   
    const handleSubmit = () =>{
        setLoading(true);
        setIsError(false);
        
        const data ={
            InvoiceID: InvoiceID,
            artistName: artistName,
            EventOrgName: EventOrgName,
            statuss: statuss,
            amount: amount,
            Date: Date,
            due: due,
            artistID: artistID,
            eventID: eventID,
            eventOrgID: eventOrgID,
        }

        axios.post('http://localhost:8080/api/invoice', data)
        .then (res =>{
            setData(res.data);
            setInvoiceID('');
            setartistName('');
            setamount('');
            setstatuss('');
            setdate('');
            setdue('');
            setartistID('');
            seteventID('');
            seteventOrgID('');
            setLoading(false);
        }).catch(err =>{
            setLoading(false);
            setIsError(true);
        });
    }   

  return (
    <div className="newInvoice" >
        <div className="newInvoiceContainer">
            <h1 className="topTitle">Invoice Form</h1>

    <form className="newInvoiceForm">
        <div className="newInvoiceLeft">
            <div className="flex1">
                <div className="newInvoiceItem">
                    <label>invoiceID</label>
                    <input type="number" placeholder="1" value ={InvoiceID} onChange ={e=>setInvoiceID(e.target.value)}
                    className="newInvoiceInput" />
                    </div>
                    <div className="newInvoiceItem">
                    <label>artist Name</label>
                    <input type="text" placeholder="artistName" value ={artistName} onChange ={e=>setartistName(e.target.value)}
                    className="newInvoiceInput" />
                </div>
                    <div className="newInvoiceItem">
                    <label>Event Org Name</label>
                    <input type="text" placeholder="EventOrgName" value ={EventOrgName} onChange ={e=>setEventOrgName(e.target.value)}
                    className="newInvoiceInput" />
                </div>
                    <div className="newInvoiceItem">
                    <label>amount</label>
                    <input type="text" placeholder="amount" value ={amount} onChange ={e=>setamount(e.target.value)}
                    className="newInvoiceInput" />
                </div>
                    <div className="newInvoiceItem">
                    <label>status</label>
                    <input type="text" placeholder="status" value ={statuss} onChange ={e=>setstatuss(e.target.value)}
                    className="newInvoiceInput" />
                </div>
            </div>
            <div className="flex2">
            <div className="newInvoiceItem">
            <label>Date</label>
            <input type="text" placeholder="Date" value ={Date} onChange ={e=>setdate(e.target.value)}
            className="newInvoiceInput" />
            </div>
            <div className="newInvoiceItem">
            <label>due</label>
            <input type="text" placeholder="due Date" value ={due} onChange ={e=>setdue(e.target.value)}
            className="newInvoiceInput" />
            </div>
            <div className="newInvoiceItem">
            <label>artistID</label>
            <input type="number" placeholder="artistID" value ={artistID} onChange ={e=>setartistID(e.target.value)}
            className="newInvoiceInput" />
            </div>
            <div className="newInvoiceItem">
            <label>eventID</label>
            <input type="number" placeholder="eventID" value ={eventID} onChange ={e=>seteventID(e.target.value)}
            className="newInvoiceInput" />
            </div>
            <div className="newInvoiceItem">
            <label>eventOrgID</label>
            <input type="number" placeholder="eventOrgID" value ={eventOrgID} onChange ={e=>seteventOrgID(e.target.value)}
            className="newInvoiceInput" />
            </div>
       
        </div>
       
        </div>
        
    </form>
    
    {isError && <small >Something went wrong. Please try again later.</small>}
    <button className="CreateButton" type="submit" 
    onClick={handleSubmit}
    disabled ={loading}>
        {loading?'Loading':'Create'}</button>
        </div>
    </div>        
    )
}