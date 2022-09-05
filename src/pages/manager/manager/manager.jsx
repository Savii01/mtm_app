import React from 'react'
import "./manager.css"
import { DataGrid  } from '@material-ui/data-grid'
import {Delete} from "@material-ui/icons"
//import { managerRows } from "../../../dummyData"
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import {toast} from 'react-toastify'

export default function Manager() {
  const [data, setData] = useState([]);

  const managerList = async() =>{
    const response = await axios.get('http://localhost:8080/api/manager')
    setData(response.data)
  }

  useEffect(()=>{
    managerList();
  },[])

  const handleDelete = (managerID)=>{
      if(window.confirm('Deleting admin Assistant Data '))
      axios.delete(`http://localhost:8080/api/manager/${managerID}`);
      setData(data.filter((item) => item.managerID !==managerID))
      toast.success('admin Assistant data successfully deleted');
      setTimeout(() => managerList(), 500);
  }

  const columns = [
    { field: 'managerID', headerName: 'managerID',width: 90, },
    { field: 'managerName', headerName: 'managerName', width: 130 },
    { field: 'gender', headerName: 'gender', width: 130 },
    { field: 'email', headerName: 'email', width: 130 },
    { field: 'addressID', headerName: 'addressID', width: 130 },
    { field: 'accountID', headerName: 'accountID', width: 130 },
    { field: 'assID', headerName: 'assID', width: 130 },
    { field: 'assName', headerName: 'assName', width: 130 },
    { field: 'createdAt', headerName: 'createdAt', width: 130 },
    { field: 'updatedAt', headerName: 'updatedAt', width: 130 },
    {
        field: 'Action',
        headerName: 'Action',
        width:150,
        renderCell: (params) =>{
            return(
                <>
                <Link to={"/manager/"+params.row.managerID}>
                    <button className="managerEdit">Edit</button>
                </Link>
                   <Delete className="managerDelete" onClick ={()=> handleDelete(params.row.managerID)}/>

                    
                </>
                
                
            )
                
        }
    }
  ];

  return (
    <div className='manager'>
    <div className='Cmanager'>
    <h1 className="managerProfileTitle">Manager List</h1>
   <Link to ="/newManager">
    <button className="addmanagerButton">Create New Manager</button>
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
