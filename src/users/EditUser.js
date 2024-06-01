import React, { useState,useEffect } from 'react'
import axios from 'axios';
import {Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {

    let navigate=useNavigate()

    const {medicineno}=useParams()

    const [user, setUser] = useState({
        medicineno:medicineno,
        medicinename:"",
        pharmacystorename:"",
        ownername:"",
        expdate:"",
        opentime:"",
        closetime:"",
        
    });
  
   
  
    
       const onInputChange=(e)=>{
        setUser({ ...user, [e.target.name]: e.target.value });
       };

       useEffect(() => {
        loadUser();
      }, []);

        const onSubmit = async (e) => {
            e.preventDefault();
            await axios.put(`http://localhost:8080/put2`, user);
            navigate("/details");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/get1/${medicineno}`);
    setUser(result.data);
  };
       
  return (
   <div className="container">
       <div className="row">
   <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
   <h2 className="test-center m-4"> Customer Details</h2>
   <form onSubmit={(e) => onSubmit(e)}>
   <div className="mb-3">
    <label htmlfor="Name" className="form-label" >
      Medicine No
    </label>
    <input 
    type={"text"}
    className="form-control"
    placeholder="Enter medicine Number"
    name="medicineno"
    value={user.medicineno}
    onChange={(e)=>onInputChange(e)}
    />

   </div>

   <div className="mb-3">
    <label htmlfor="Name" className="form-label" >
       Medicine Name
    </label>
    <input 
    type={"text"}
    className="form-control"
    placeholder="Enter your Medicine Name"
    name="Medicinename"
    value={user.medicinename}
    onChange={(e)=>onInputChange(e)}
    />
   </div>

   <div className="mb-3">
    <label htmlfor="Name" className="form-label" >
       Pharmacy store Name
    </label>
    <input 
    type={"text"}
    className="form-control"
    placeholder="Enter pharmacystore name"
    name="Enter pharmacystore name"
    value={user.pharmacystorename}
    onChange={(e)=>onInputChange(e)}
    />
   </div>


   <div className="mb-3">
    <label htmlfor="Name" className="form-label" >
        Owner
    </label>
    <input 
    type={"text"}
    className="form-control"
    placeholder="Enter  Owner name"
    name="ownername"
    value={user.ownername}
    onChange={(e)=>onInputChange(e)}
    />
   </div>

   <div className="mb-3">
    <label htmlfor="Name" className="form-label" >
        Expdate
    </label>
    <input 
    type={"text"}
    className="form-control"
    placeholder="Enter expdate"
    name="expdate"
    value={user.expdate}
    onChange={(e)=>onInputChange(e)}
    />
   </div>

   <div className="mb-3">
    <label htmlfor="Name" className="form-label" >
       Opentime
    </label>
    <input 
    type={"text"}
    className="form-control"
    placeholder="Enter Opentime"
    name="opentime"
    value={user.opentime}
    onChange={(e)=>onInputChange(e)}
    />
   </div>

   <div className="mb-3">
    <label htmlfor="Name" className="form-label" >
       Closetime
    </label>
    <input 
    type={"text"}
    className="form-control"
    placeholder="Enter your closetime"
    name="closetime"
    value={user.closetime}
    onChange={(e)=>onInputChange(e)}
    />
   </div>

   <button type="submit" className="btn btn-outline-primary">
       Submit
   </button>
   <Link className="btn btn-outline-danger mx-2" to="/">
     Cancel
     
      
   </Link>
  
   </form>
   </div>
   </div>
   </div>
  );
  }