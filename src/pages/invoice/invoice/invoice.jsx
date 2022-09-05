import React from 'react'
import "./invoice.css"
import { DataGrid  } from '@material-ui/data-grid'
import {Delete} from "@material-ui/icons"
//import { invoiceRows } from "../../../dummyData"
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import {toast} from 'react-toastify'

export default function Invoice() {
  const [data, setData] = useState([]);

  const invoiceList = async() =>{
    const response = await axios.get('http://localhost:8080/api/invoice')
    setData(response.data)
  }

  useEffect(()=>{
    invoiceList();
  },[])

  const handleDelete = (invoiceID)=>{
      if(window.confirm('Deleting invoice Data '))
      axios.delete(`http://localhost:8080/api/invoice/${invoiceID}`);
      setData(data.filter((item) => item.invoiceID !==invoiceID))
      toast.success('invoice data successfully deleted');
      setTimeout(() => invoiceList(), 500);
  }

  const columns = [
    { field: 'invoiceID', headerName: 'invoiceID',width: 90, },
    { field: 'artistName', headerName: 'artistName',width: 90, },
    { field: 'EventOrgName', headerName: 'EventOrgName',width: 90, },
    { field: 'statuss', headerName: 'status', width: 130 },
    { field: 'amount', headerName: 'amount', width: 130 },
    { field: 'Date', headerName: 'Date', width: 130 },
    { field: 'due', headerName: 'due', width: 130 },
    { field: 'artistID', headerName: 'artistID', width: 130 },
    { field: 'eventID', headerName: 'eventID', width: 130 },
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
                <Link to={"/invoice/"+params.row.invoiceID}>
                    <button className="invoiceEdit">Edit</button>
                </Link>
                   <Delete className="invoiceDelete" onClick ={()=> handleDelete(params.row.invoiceID)}/>

                    
                </>
                
                
            )
                
        }
    }
  ];

  return (
    <div className='invoice'>
    <div className='Cinvoice'>
    <h1 className="invoiceProfileTitle">invoice List</h1>
   <Link to ="/newinvoice">
    <button className="addinvoiceButton">Create invoice</button>
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
