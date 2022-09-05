import React from 'react'
import "./adminAss.css"
import { DataGrid  } from '@material-ui/data-grid'
import {Delete} from "@material-ui/icons"
//import { adminAssRows } from "../../../dummyData"
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import {toast} from 'react-toastify'

export default function AdminAss() {
  const [data, setData] = useState([]);

  const adminAssList = async() =>{
    const response = await axios.get('http://localhost:8080/api/AdminAssistant')
    setData(response.data)
  }

  useEffect(()=>{
    adminAssList();
  },[])

  const handleDelete = (assID)=>{
      if(window.confirm('Deleting admin Assistant Data '))
      axios.delete(`http://localhost:8080/api/AdminAssistant/${assID}`);
      setData(data.filter((item) => item.assID !==assID))
      toast.success('admin Assistant data successfully deleted');
      setTimeout(() => adminAssList(), 500);
  }

  const columns = [
    { field: 'assID', headerName: 'assID',width: 90, },
    { field: 'assName', headerName: 'assName', width: 130 },
    { field: 'gender', headerName: 'gender', width: 130 },
    { field: 'email', headerName: 'email', width: 130 },
    { field: 'addressID', headerName: 'addressID', width: 130 },
    { field: 'accountID', headerName: 'accountID', width: 130 },
    { field: 'createdAt', headerName: 'createdAt', width: 130 },
    { field: 'updatedAt', headerName: 'updatedAt', width: 130 },
    {
        field: 'Action',
        headerName: 'Action',
        width:150,
        renderCell: (params) =>{
            return(
                <>
                <Link to={"/adminAss/"+params.row.id}>
                    <button className="adminAssEdit">Edit</button>
                </Link>
                   <Delete className="adminAssDelete" onClick ={()=> handleDelete(params.row.assID)}/>

                    
                </>
                
                
            )
                
        }
    }
  ];

  return (
    <div className='adminAss'>
    <div className='CadminAss'>
    <h1 className="adminAssProfileTitle">Admin Assistant List</h1>
   <Link to ="/newadminAss">
    <button className="addadminAssButton">Create New Admin Assistant</button>
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
