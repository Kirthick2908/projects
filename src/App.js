import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route,BrowserRouter } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import Navbar1 from "./components/Navbar1";
//import Footer from "./components/Footer";
import Home1 from "./pages/Home1";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Details from "./pages/details";
import SignUp from './components/SignUp';
import Login from './components/Login';
import {Button,TextField} from '@mui/material';
import MenuList
 from './helpers/MenuList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar1 />

        <Routes>
        <Route exact path="/" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
          <Route exact path="/h1" element={<Home1 />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:medicineno" element={<EditUser />} />
          <Route exact path="/viewuser/:medicineno" element={<ViewUser />} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/h" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/details" element={<Details/>} />
         
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;