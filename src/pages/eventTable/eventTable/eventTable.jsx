import React from 'react'
import "./eventTable.css"
import { DataGrid  } from '@material-ui/data-grid'
import {Delete} from "@material-ui/icons"
//import { eventRows } from "../../../dummyData"
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import {toast} from 'react-toastify'

export default function EventTable() {
  const [data, setData] = useState([]);

  const eventList = async() =>{
    const response = await axios.get('http://localhost:8080/api/eventTable')
    setData(response.data)
  }

  useEffect(()=>{
    eventList();
  },[])

  const handleDelete = (eventID)=>{
      if(window.confirm('Deleting eventTable Data'))
      axios.delete(`http://localhost:8080/api/eventTable/${eventID}`);
      setData(data.filter((item) => item.eventID !==eventID))
      toast.success('eventTable data successfully deleted');
      setTimeout(() => eventList(), 500);
  }

  const columns = [
    { field: 'eventID', headerName: 'eventID',width: 90, },
    { field: 'eventType', headerName: 'eventType', width: 130 },
    { field: 'description', headerName: 'description', width: 200 },
    { field: 'date', headerName: 'date', width: 130 },
    { field: 'time', headerName: 'time', width: 130 },
    { field: 'location', headerName: 'location', width: 200 },
    { field: 'artistID', headerName: 'artistID', width: 130 },
    { field: 'eventOrgID', headerName: 'eventOrgID', width: 130 },
    { field: 'createdAt', headerName: 'createdAt', width: 130 },
    { field: 'updatedAt', headerName: 'updatedAt', width: 130 },
    {
        field: 'Action',
        headerName: 'Action',
        width:150,
        renderCell: (params) =>{
            return(
                <>
                <Link to={"/eventTable/"+params.row.eventID}>
                    <button className="eventTableEdit">Edit</button>
                </Link>
                   <Delete className="eventTableDelete" onClick ={()=> handleDelete(params.row.eventID)}/>

                    
                </>
                
                
            )
                
        }
    }
  ];

  return (
    <div className='eventTable'>
    <div className='CeventTable'>
    <h1 className="eventTableProfileTitle">eventTable List</h1>
   <Link to ="/neweventTable">
    <button className="addeventTableButton">Create New eventTable</button>
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
