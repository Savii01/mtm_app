import React from 'react'
import "./artist.css"
import { DataGrid  } from '@material-ui/data-grid'
import {Delete} from "@material-ui/icons"
//import { artistRows } from "../../../dummyData"
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import {toast} from 'react-toastify'

export default function Artist() {
  const [data, setData] = useState([]);

  const artistList = async() =>{
    const response = await axios.get('http://localhost:8080/api/artist')
    setData(response.data)
  }

  useEffect(()=>{
    artistList();
  },[])

  const handleDelete = (artistID)=>{
      if(window.confirm('Deleting Artist Data'))
      axios.delete(`http://localhost:8080/api/artist/${artistID}`);
      setData(data.filter((item) => item.artistID !==artistID))
      toast.success('admin Assistant data successfully deleted');
      setTimeout(() => artistList(), 500);
  }

  const columns = [
    { field: 'artistID', headerName: 'artistID',width: 90, },
    { field: 'artistName', headerName: 'artistName', width: 130 },
    { field: 'gender', headerName: 'gender', width: 130 },
    { field: 'email', headerName: 'email', width: 130 },
    { field: 'genre', headerName: 'genre', width: 130 },
    { field: 'addressID', headerName: 'addressID', width: 130 },
    { field: 'contractID', headerName: 'contractID', width: 130 },
    { field: 'accountID', headerName: 'accountID', width: 130 },
    { field: 'managementID', headerName: 'managementID', width: 130 },
    { field: 'managerID', headerName: 'managerID', width: 130 },
    { field: 'managerName', headerName: 'managerName', width: 130 },
    { field: 'createdAt', headerName: 'createdAt', width: 130 },
    { field: 'updatedAt', headerName: 'updatedAt', width: 130 },
    {
        field: 'Action',
        headerName: 'Action',
        width:150,
        renderCell: (params) =>{
            return(
                <>
                <Link to={"/artist/"+params.row.artistID}>
                    <button className="artistEdit">Edit</button>
                </Link>
                   <Delete className="artistDelete" onClick ={()=> handleDelete(params.row.artistID)}/>

                    
                </>
                
                
            )
                
        }
    }
  ];

  return (
    <div className='artist'>
    <div className='Cartist'>
    <h1 className="artistProfileTitle">artist List</h1>
   <Link to ="/newartist">
    <button className="addartistButton">Create New artist</button>
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
