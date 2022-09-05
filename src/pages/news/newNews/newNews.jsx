import './newNews.css'
import axios from 'axios'
import React from 'react';
import { useState} from "react";


export default function NewNews() {
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

        axios.post('http://localhost:8080/api/news', data)
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
    <div className="newNews" >
        <div className="newNewsContainer">
            <h1 className="topTitle">News Form</h1>

    <form className="newNewsForm">
        <div className="newNewsLeft">
            <div className="flex1">
                <div className="newNewsItem">
                    <label>newsID</label>
                    <input type="number" placeholder="1" name= 'newsID'  value ={newsID} onChange ={e=>setnewsID(e.target.value)}
                    className="newNewsInput" />
                    </div>
                    <div className="newNewsItem">
                    <label>Source</label>
                    <input type="text" placeholder="Source" name='name'  value ={Source} onChange ={e=>setSource(e.target.value)}
                    className="newNewsInput" />
                </div>
                    <div className="newNewsItem">
                    <label>News</label>
                    <input type="text" placeholder="News" name='News'  value ={News} onChange ={e=>setNews(e.target.value)}
                    className="newNewsInput" />
                </div>
            </div>
            <div className="flex2">
                <div className="newNewsItem">
                <label>artistName</label>
                <input type="text" placeholder="artistName" name='artistName'  value ={artistName} onChange ={e=>setartistName(e.target.value)}
                className="newNewsInput" />
                </div>
                
                <div className="newNewsItem">
                <label>artistID</label>
                <input type="text" placeholder="artistID" name='artistID'  value ={artistID} onChange ={e=>setartistID(e.target.value)}
                className="newNewsInput" />
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