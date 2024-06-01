import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from '../layout/Navbar';

import { Link, useParams } from 'react-router-dom';
export default function Home() {

   const [users, setUsers] = useState([])
   const {cid}=useParams()

    useEffect(()=>{
       loadUsers(); 
    },[]);

    const loadUsers=async()=>{
    const result=await axios.get("http://localhost:8080/get2");
    setUsers(result.data);
    };

    const deleteUser = async (cid) => {
        await axios.delete(`http://localhost:8080/del2/${cid}`);
        loadUsers();
      };
    

  return (
    <div>
        <Navbar/>
   
    <div className='container'>
    <div className='py-4'>
    <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">Medicine No</th>
      <th scope="col">Medicine Name</th>
      <th scope="col">Pharmacy Store Name</th>
      <th scope="col"> Owner Name</th>
      <th scope="col">Expdate</th>
      <th scope="col">Opentime</th>
      <th scope="col">Closetime</th>
      
      
    </tr>
  </thead>
  <tbody>
    {
        users?.map((user,index)=>(
      <tr>
      
      <td>{user.medicineno}</td>
      <td>{user.medicinename}</td>
      <td>{user.pharmacystorename}</td>
      <td>{user.ownername}</td>
      <td>{user.expdate}</td>
      <td>{user.opentime}</td>
      <td>{user.closetime}</td>
     
      
      <td>
        <Link className="btn btn-primary mx-2" to={`/viewuser/${user.medicineno}`}>
          View </Link>
       <Link className="btn btn-outline-primary mx-2"
                    to={`/edituser/${user.medicineno}`}
                  >Edit</Link>
        <button className="btn btn-danger mx-2"
        onClick={()=>deleteUser(user.medicineno)}
        >Delete</button>
        
      </td>
    </tr>
        ))
        }
  </tbody>
</table>
    </div>
    </div>
    </div>
  );
}