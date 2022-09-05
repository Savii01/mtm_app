import React from 'react'
import "./contract.css"
import { DataGrid  } from '@material-ui/data-grid'
import {Delete} from "@material-ui/icons"
//import { contractRows } from "../../../dummyData"
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import {toast} from 'react-toastify'

export default function Contract() {
  const [data, setData] = useState([]);

  const contractList = async() =>{
    const response = await axios.get('http://localhost:8080/api/contract')
    setData(response.data)
  }

  useEffect(()=>{
    contractList();
  },[])

  const handleDelete = (contractID)=>{
      if(window.confirm('Deleting contract Data '))
      axios.delete(`http://localhost:8080/api/contract/${contractID}`);
      setData(data.filter((item) => item.contractID !==contractID))
      toast.success('contract data successfully deleted');
      setTimeout(() => contractList(), 500);
  }

  const columns = [
    { field: 'contractID', headerName: 'contractID',width: 90, },
    { field: 'statuss', headerName: 'status', width: 130 },
    { field: 'Date', headerName: 'Date', width: 130 },
    { field: 'Expire', headerName: 'Expire', width: 130 },
    { field: 'createdAt', headerName: 'createdAt', width: 130 },
    { field: 'updatedAt', headerName: 'updatedAt', width: 130 },
    {
        field: 'Action',
        headerName: 'Action',
        width:150,
        renderCell: (params) =>{
            return(
                <>
                <Link to={"/contract/"+params.row.contractID}>
                    <button className="contractEdit">Edit</button>
                </Link>
                   <Delete className="contractDelete" onClick ={()=> handleDelete(params.row.contractID)}/>

                    
                </>
                
                
            )
                
        }
    }
  ];

  return (
    <div className='contract'>
    <div className='Ccontract'>
    <h1 className="contractProfileTitle">contract List</h1>
   <Link to ="/newcontract">
    <button className="addcontractButton">Create contract</button>
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
