import React, { useState } from 'react'
import axios from 'axios';
import {Link, useNavigate } from 'react-router-dom';

export default function AddUser() {

    let navigate=useNavigate()

    const [user, setUser] = useState({
        medicineno:"",
        medicinename:"",
        pharmacystorename:"",
        ownername:"",
        expdate:"",
        opentime:"",
        closetime:"",
        
    });
  
   
    const {medicineno,medicinename,pharmacystorename,ownername,expdate,opentime,closetime } = user;
  
    
       const onInputChange=(e)=>{
        setUser({ ...user, [e.target.name]: e.target.value });
       };
        const onSubmit = async (e) => {
            e.preventDefault();
            await axios.post("http://localhost:8080/post2", user);
            navigate("/");
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
     placeholder="Enter med Number"
     name="medicineno"
     value={medicineno}
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
     placeholder="Enter medicine Name"
     name="medicinename"
     value={medicinename}
     onChange={(e)=>onInputChange(e)}
     />
    </div>

    <div className="mb-3">
     <label htmlfor="Name" className="form-label" >
        Pharmacy store name
     </label>
     <input 
     type={"text"}
     className="form-control"
     placeholder="Enter store name"
     name="pharmacystorename"
     value={pharmacystorename}
     onChange={(e)=>onInputChange(e)}
     />
    </div>

    <div className="mb-3">
     <label htmlfor="Name" className="form-label" >
        Ownername
     </label>
     <input 
     type={"text"}
     className="form-control"
     placeholder="Enter Owner name"
     name="ownername"
     value={ownername}
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
     placeholder="Enter expdate "
     name="expdate"
     value={expdate}
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
     placeholder="Enter  Opentime"
     name="opentime"
     value={opentime}
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
     placeholder="Enter your  closetime"
     name="closetime"
     value={closetime}
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