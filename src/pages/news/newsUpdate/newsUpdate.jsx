import './newsUpdate.css'
import axios from 'axios'
import React from 'react';
import {toast} from 'react-toastify'
import { useState, useEffect} from "react";


export default function NewsUpdate() {
    const[newsID, setnewsID] = useState('');
    const[Source, setSource] = useState('');
    const[News, setNews] = useState('');
    const[artistName, setartistName] = useState('');
    const[artistID, setartistID] = useState('');
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const[data, setData] = useState(null);
   
    const handleSubmit = () =>{
        setLoading(true);
        setIsError(false);
        
        const data ={
            newsID: newsID,
            Source: Source,
            News: News,
            artistName: artistName,
            artistID: artistID,
        }

        axios.put(`http://localhost:8080/api/news/${newsID}`, data)
        .then (res =>{
            setData(res.data);
            setnewsID('');
            setSource('');
            setartistName('');
            setNews('');
            setartistID('');
            setLoading(false);
        }).catch(err =>{
            setLoading(false);
            setIsError(true);
        });

    
     }  
 

  return (
    <div className="newsUpdate" >
        <div className="newsUpdateContainer">
            <h1 className="topTitle">News Form</h1>

    <form className="newsUpdateForm">
        <div className="newsUpdateLeft">
            <div className="flex1">
                <div className="newsUpdateItem">
                    <label>newsID</label>
                    <input type="number" placeholder="1" name= 'newsID'  value ={newsID} onChange ={e=>setnewsID(e.target.value)}
                    className="newsUpdateInput" />
                    </div>
                    <div className="newsUpdateItem">
                    <label>Source</label>
                    <input type="text" placeholder="Source" name='name'  value ={Source} onChange ={e=>setSource(e.target.value)}
                    className="newsUpdateInput" />
                </div>
                    <div className="newsUpdateItem">
                    <label>News</label>
                    <input type="text" placeholder="News" name='News'  value ={News} onChange ={e=>setNews(e.target.value)}
                    className="newsUpdateInput" />
                </div>
            </div>
            <div className="flex2">
                <div className="newsUpdateItem">
                <label>artistName</label>
                <input type="text" placeholder="artistName" name='artistName'  value ={artistName} onChange ={e=>setartistName(e.target.value)}
                className="newsUpdateInput" />
                </div>
                
                <div className="newsUpdateItem">
                <label>artistID</label>
                <input type="text" placeholder="artistID" name='artistID'  value ={artistID} onChange ={e=>setartistID(e.target.value)}
                className="newsUpdateInput" />
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