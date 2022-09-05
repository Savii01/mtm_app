import React from 'react'
import "./management.css"
import { DataGrid  } from '@material-ui/data-grid'
import {Delete} from "@material-ui/icons"
//import { managementRows } from "../../../dummyData"
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import {toast} from 'react-toastify'

export default function Management() {
  const [data, setData] = useState([]);

  const managementList = async() =>{
    const response = await axios.get('http://localhost:8080/api/management')
    setData(response.data)
  }

  useEffect(()=>{
    managementList();
  },[])

  const handleDelete = (managementID)=>{
      if(window.confirm('Deleting management Data'))
      axios.delete(`http://localhost:8080/api/management/${managementID}`);
      setData(data.filter((item) => item.managementID !==managementID))
      toast.success('management data successfully deleted');
      setTimeout(() => managementList(), 500);
  }

  const columns = [
    { field: 'managementID', headerName: 'managementID',width: 90, },
    { field: 'Month', headerName: 'Month', width: 130 },
    { field: 'totalIncome', headerName: 'totalIncome', width: 150 },
    { field: 'artistPercent', headerName: 'artistPercent', width: 200 },
    { field: 'companyPercent', headerName: 'companyPercent', width: 200 },
    { field: 'expenseID', headerName: 'expenseID', width: 200 },
    { field: 'eventOrgID', headerName: 'eventOrgID', width: 200 },
    { field: 'createdAt', headerName: 'createdAt', width: 200 },
    { field: 'updatedAt', headerName: 'updatedAt', width: 200 },
    {
        field: 'Action',
        headerName: 'Action',
        width:150,
        renderCell: (params) =>{
            return(
                <>
                <Link to={"/management/"+params.row.managementID}>
                    <button className="managementEdit">Edit</button>
                </Link>
                   <Delete className="managementDelete" onClick ={()=> handleDelete(params.row.managementID)}/>

                    
                </>
                
                
            )
                
        }
    }
  ];

  return (
    <div className='management'>
    <div className='Cmanagement'>
    <h1 className="managementProfileTitle">management List</h1>
   <Link to ="/newmanagement">
    <button className="addmanagementButton">Create New management</button>
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
