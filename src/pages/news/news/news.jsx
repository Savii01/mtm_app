import React from 'react'
import "./news.css"
import { DataGrid  } from '@material-ui/data-grid'
import {Delete} from "@material-ui/icons"
//import { newsRows } from "../../../dummyData"
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import {toast} from 'react-toastify'

export default function News() {
  const [data, setData] = useState([]);

  const newsList = async() =>{
    const response = await axios.get('http://localhost:8080/api/news')
    setData(response.data)
  }

  useEffect(()=>{
    newsList();
  },[])

  const handleDelete = (newsID)=>{
      if(window.confirm('Deleting news Data'))
      axios.delete(`http://localhost:8080/api/news/${newsID}`);
      setData(data.filter((item) => item.newsID !==newsID))
      toast.success('news data successfully deleted');
      setTimeout(() => newsList(), 500);
  }

  const columns = [
    { field: 'newsID', headerName: 'newsID',width: 130, },
    { field: 'Source', headerName: 'Source', width: 200 },
    { field: 'News', headerName: 'News', width: 200 },
    { field: 'artistName', headerName: 'artistName', width: 200 },
    { field: 'artistID', headerName: 'artistID', width: 200 },
    { field: 'createdAt', headerName: 'createdAt', width: 200 },
    { field: 'updatedAt', headerName: 'updatedAt', width: 200 },
    {
        field: 'Action',
        headerName: 'Action',
        width:150,
        renderCell: (params) =>{
            return(
                <>
                <Link to={"/news/"+params.row.newsID}>
                    <button className="newsEdit">Edit</button>
                </Link>
                   <Delete className="newsDelete" onClick ={()=> handleDelete(params.row.newsID)}/>

                    
                </>
                
                
            )
                
        }
    }
  ];

  return (
    <div className='news'>
    <div className='Cnews'>
    <h1 className="newsProfileTitle">news List</h1>
   <Link to ="/newnews">
    <button className="addnewsButton">Create New news</button>
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
