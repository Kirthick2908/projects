import React, { useState,useEffect } from 'react'
import axios from 'axios';
import {Link ,useParams} from 'react-router-dom';

export default function ViewUser() {
    const{medicineno}=useParams();
    const [user, setUser] = useState({
        
        medicineno:medicineno,
        medicinename:"",
        pharmacystorename:"",
        ownername:"",
        expdate:"",
        opentime:"",
        closetime:"",
        
      });

      

      useEffect(() => {
        loadUser();
      }, []);

      const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/get1/${medicineno}`);
        setUser(result.data);
      };


  return (
    <div className="container">
    <div className="row">
<div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
<h2 className="test-center m-4">User Details</h2>
<div className="card">
    <div className="card-header">
        Details of  Customer:
        <ul className="List-group list-group-flush">
            <li className="list-group-item">
                <b>Medicine No:</b>
                {user.medicineno}
            </li>
            <li className="list-group-item">
                <b>Medicine Name:</b>
                {user.medicinename}
            </li>
            <li className="list-group-item">
                <b>pharmacy store name:</b>
                {user.pharmacystorename}
            </li>
            <li className="list-group-item">
                <b>Owner:</b>
                {user.ownername}
            </li>
            <li className="list-group-item">
                <b>Expdate:</b>
                {user.expdate}
            </li>
            <li className="list-group-item">
                <b>Opentime:</b>
                {user.opentime}
            </li>
            <li className="list-group-item">
                <b>Closetime:</b>
                {user.closetime}
            </li>
            
        </ul>
    </div>
</div>
<Link className="btn btn-outline-danger mx-2" to="/details">
      Cancel
    </Link>

</div>
</div>
</div>
  )
}