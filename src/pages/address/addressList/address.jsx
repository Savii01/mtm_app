import React from 'react'
import "./address.css"
import { DataGrid  } from '@material-ui/data-grid'
import {Delete} from "@material-ui/icons"
//import { addressRows } from "../../../dummyData"
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import {toast} from 'react-toastify'

export default function Address() {
  const [data, setData] = useState([]);

  const addressList = async() =>{
    const response = await axios.get('http://localhost:8080/api/Address')
    setData(response.data)
  }

  useEffect(()=>{
    addressList();
  },[])

  const handleDelete = (addressID)=>{
      if(window.confirm('Deleting Address Data '))
      axios.delete(`http://localhost:8080/api/Address/${addressID}`);
      setData(data.filter((item) => item.addressID !==addressID))
      toast.success('Address data successfully deleted');
      setTimeout(() => addressList(), 500);
  }

  const columns = [
    { field: 'addressID', headerName: 'addressID',width: 90 },
    { field: 'city', headerName: 'city', width: 130 },
    { field: 'state', headerName: 'state', width: 130 },
    { field: 'country', headerName: 'country', width: 130 },
    { field: 'createdAt', headerName: 'createdAt', width: 130 },
    { field: 'updatedAt', headerName: 'updatedAt', width: 130 },
    {
        field: 'Action',
        headerName: 'Action',
        width:150,
        renderCell: (params) =>{
            return(
                <>
                <Link to={"/address/"+params.row.addressID}>
                    <button className="addressEdit">Edit</button>
                </Link>
                   <Delete className="addressDelete" onClick ={()=> handleDelete(params.row.addressID)}/>

                    
                </>
                
                
            )
                
        }
    }
  ];

  return (
    <div className='address'>
    <div className='Caddress'>
    <h1 className="addressProfileTitle">address List</h1>
   <Link to ="/newaddress">
    <button className="addaddressButton">Create address</button>
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
