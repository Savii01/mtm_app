import React from 'react'
import "./recArtist.css"
import { DataGrid  } from '@material-ui/data-grid'
import {Delete} from "@material-ui/icons"
//import { recArtistRows } from "../../../dummyData"
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import {toast} from 'react-toastify'

export default function RecArtist() {
  const [data, setData] = useState([]);

  const recArtistList = async() =>{
    const response = await axios.get('http://localhost:8080/api/recArtist')
    setData(response.data)
  }


  useEffect(()=>{
    recArtistList();
  },[])

  const handleDelete = (recArtistID)=>{
      if(window.confirm('Deleting recArtist Data'))
      axios.delete(`http://localhost:8080/api/recArtist/${recArtistID}`);
      setData(data.filter((item) => item.recArtistID !==recArtistID))
      toast.success('recArtist data successfully deleted');
      setTimeout(() => recArtistList(), 500);
  }

  const columns = [
    { field: 'recArtistID', headerName: 'recArtistID',width: 90, },
    { field: 'recArtistName', headerName: 'recArtistName', width: 130 },
    { field: 'email', headerName: 'email', width: 130 },
    { field: 'description', headerName: 'description', width: 130 },
    { field: 'addressID', headerName: 'addressID', width: 130 },
    { field: 'managerID', headerName: 'managerID', width: 130 },
    { field: 'createdAt', headerName: 'createdAt', width: 130 },
    { field: 'updatedAt', headerName: 'updatedAt', width: 130 },
    {
        field: 'Action',
        headerName: 'Action',
        width:150,
        renderCell: (params) =>{
            return(
                <>
                <Link to={"/recArtist/"+params.row.recArtistID}>
                    <button className="recArtistEdit">Edit</button>
                </Link>
               
                   <Delete className="recArtistDelete" onClick ={()=> handleDelete(params.row.recArtistID)}/>
                    
                </>
                
                
            )
                
        }
    }
  ];

  return (
    <div className='recArtist'>
    <div className='CrecArtist'>
    <h1 className="recArtistProfileTitle">recArtist List</h1>
   <Link to ="/newrecArtist">
    <button className="addrecArtistButton">Create New recArtist</button>
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
