import React from 'react'
import "./eventOrg.css"
import { DataGrid  } from '@material-ui/data-grid'
import {Delete} from "@material-ui/icons"
//import { eventOrgRows } from "../../../dummyData"
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import {toast} from 'react-toastify'

export default function EventOrg() {
  const [data, setData] = useState([]);

  const eventOrgList = async() =>{
    const response = await axios.get('http://localhost:8080/api/eventOrg')
    setData(response.data)
  }

  useEffect(()=>{
    eventOrgList();
  },[])

  const handleDelete = (eventOrgID)=>{
      if(window.confirm('Deleting eventOrg Data'))
      axios.delete(`http://localhost:8080/api/eventOrg/${eventOrgID}`);
      setData(data.filter((item) => item.eventOrgID !==eventOrgID))
      toast.success('eventOrg data successfully deleted');
      setTimeout(() => eventOrgList(), 500);
  }

  const columns = [
    { field: 'eventOrgID', headerName: 'eventOrgID',width: 90, },
    { field: 'companyName', headerName: 'companyName', width: 130 },
    { field: 'eventOrgName', headerName: 'eventOrgName', width: 130 },
    { field: 'email', headerName: 'email', width: 130 },
    { field: 'phone', headerName: 'phone', width: 130 },
    { field: 'addressID', headerName: 'addressID', width: 130 },
    { field: 'createdAt', headerName: 'createdAt', width: 130 },
    { field: 'updatedAt', headerName: 'updatedAt', width: 130 },
    {
        field: 'Action',
        headerName: 'Action',
        width:150,
        renderCell: (params) =>{
            return(
                <>
                <Link to={"/eventOrg/"+params.row.eventOrgID}>
                    <button className="eventOrgEdit">Edit</button>
                </Link>
                   <Delete className="eventOrgDelete" onClick ={()=> handleDelete(params.row.eventOrgID)}/>

                    
                </>
                
                
            )
                
        }
    }
  ];

  return (
    <div className='eventOrg'>
    <div className='CeventOrg'>
    <h1 className="eventOrgProfileTitle">eventOrg List</h1>
   <Link to ="/neweventOrg">
    <button className="addeventOrgButton">Create New eventOrg</button>
    </Link>
</div>
   <DataGrid
    getRowId={(row) => row.createdAt}
    rows={data}
    columns={columns}
    pageSize={5}
    rowsPerPageOptions={[5]}
    checkboxSelection
    disableSelectionOnClick
  className="table"/>


</div>

  )
}
