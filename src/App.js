import React from 'react'; 
import './App.css'; 
import { Routes, Route } from 'react-router-dom';  
import Main from './Mainpage/Main';
import Home from './Mainpage/Home'; 
import About from './Mainpage/About'; 
import ForgotPassword from './Mainpage/ForgotPassword'; 
import Contact from './Mainpage/Contact'; 
import Login from './Mainpage/Login'; 
import Signup from './Mainpage/Signup'; 
import Dashboard from './Mainpage/Dashboard'; 
import DarkModeToggle from './components/DarkModeToggle';  
import ScrollToTop from './Mainpage/ScrollToTop';  
function App() {  
   return (     <div>              
    <DarkModeToggle /> {/* 🌙 Toggle */}           
      <ScrollToTop />     {/* ✅ Scroll on route change */}             
        <Routes>               

            <Route path="/" element={<Main />} />     
            <Route path="/Home" element={<Home />} />         
            <Route path="/About" element={<About />} />         
            <Route path="/Contact" element={<Contact />} />        
           <Route path="/Login" element={<Login />} />         
           <Route path="/dashboard" element={<Dashboard />} />        
            <Route path="/Signup" element={<Signup />} />         
            <Route path="/forgot" element={<ForgotPassword />} />       
            </Routes>    
             </div> 
             
            ); 
          }  
export default App; 