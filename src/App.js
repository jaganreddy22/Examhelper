
import  './App.css';
import { Routes,Route } from 'react-router-dom';

import Main  from './Mainpage/Main'
import Home from './Mainpage/Home';
import About from './Mainpage/About';
import Contact from './Mainpage/Contact';
import Login from './Mainpage/Login';

function App() {
  return (
   <Routes>
    <Route path='/' element={<Main/>}/>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Login' element={<Login/>}/>
   </Routes>
  );
}

export default App;
