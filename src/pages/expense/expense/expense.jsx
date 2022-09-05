import React from 'react'
import "./expense.css"
import { DataGrid  } from '@material-ui/data-grid'
import {Delete} from "@material-ui/icons"
//import { expenseRows } from "../../../dummyData"
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import {toast} from 'react-toastify'

export default function Expense() {
  const [data, setData] = useState([]);

  const expenseList = async() =>{
    const response = await axios.get('http://localhost:8080/api/expenses')
    setData(response.data)
  }

  useEffect(()=>{
    expenseList();
  },[])

  const handleDelete = (expenseID)=>{
      if(window.confirm('Deleting expense Data'))
      axios.delete(`http://localhost:8080/api/expenses/${expenseID}`);
      setData(data.filter((item) => item.expenseID !==expenseID))
      toast.success('Expense data successfully deleted');
      setTimeout(() => expenseList(), 500);
  }

  const columns = [
    { field: 'expenseID', headerName: 'expenseID',width: 90, },
    { field: 'expenses', headerName: 'expenses', width: 130 },
    { field: 'cost', headerName: 'cost', width: 130 },
    { field: 'incuredBy', headerName: 'incuredBy', width: 130 },
    { field: 'createdAt', headerName: 'createdAt', width: 130 },
    { field: 'updatedAt', headerName: 'updatedAt', width: 130 },
    {
        field: 'Action',
        headerName: 'Action',
        width:150,
        renderCell: (params) =>{
            return(
                <>
                <Link to={"/expense/"+params.row.expenseID}>
                    <button className="expenseEdit">Edit</button>
                </Link>
                   <Delete className="expenseDelete" onClick ={()=> handleDelete(params.row.expenseID)}/>

                    
                </>
                
                
            )
                
        }
    }
  ];

  return (
    <div className='expense'>
    <div className='Cexpense'>
    <h1 className="expenseProfileTitle">expense List</h1>
   <Link to ="/newexpense">
    <button className="addexpenseButton">Create New expense</button>
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
