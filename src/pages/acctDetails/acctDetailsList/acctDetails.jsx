import React from 'react'
import "./acctDetails.css"
import { DataGrid  } from '@material-ui/data-grid'
import {Delete} from "@material-ui/icons"
//import { acctDetailsRows } from "../../../dummyData"
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import {toast} from 'react-toastify'

export default function AcctDetails() {
  const [data, setData] = useState([]);

  const acctDetailsList = async() =>{
    const response = await axios.get('http://localhost:8080/api/acctDetails')
    setData(response.data)
  }

  useEffect(()=>{
    acctDetailsList();
  },[])

  const handleDelete = (accountID)=>{
      if(window.confirm('Deleting acctDetails Data '))
      axios.delete(`http://localhost:8080/api/acctDetails/${accountID}`);
      setData(data.filter((item) => item.accountID !==accountID))
      toast.success('acctDetails data successfully deleted');
      setTimeout(() => acctDetailsList(), 500);
  }

  const columns = [
    { field: 'accountID', headerName: 'accountID',width: 90, },
    { field: 'accountName', headerName: 'accountName', width: 130 },
    { field: 'accountNumber', headerName: 'accountNumber', width: 130 },
    { field: 'bank', headerName: 'bank', width: 130 },
    { field: 'createdAt', headerName: 'createdAt', width: 130 },
    { field: 'updatedAt', headerName: 'updatedAt', width: 130 },
    {
        field: 'Action',
        headerName: 'Action',
        width:150,
        renderCell: (params) =>{
            return(
                <>
                <Link to={"/acctDetails/"+params.row.id}>
                    <button className="acctDetailsEdit">Edit</button>
                </Link>
                   <Delete className="acctDetailsDelete" onClick ={()=> handleDelete(params.row.accountID)}/>

                    
                </>
                
                
            )
                
        }
    }
  ];

  return (
    <div className='acctDetails'>
    <div className='CacctDetails'>
    <h1 className="acctDetailsProfileTitle">Bank Account List</h1>
   <Link to ="/newacctDetails">
    <button className="addacctDetailsButton">Create New Bank Account</button>
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
