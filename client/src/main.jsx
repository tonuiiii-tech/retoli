import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import { BrowserRouter, Route, Routes, } from "react-router";
import Signup from './Pages/Signup.jsx';
import Signin from './Pages/Signin.jsx';

import { Link } from "react-router";
import Homepage from './Pages/Homepage.jsx';
import Dashboard from './Pages/Dashboard.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
  <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path='/sign-up' element={<Signup/>}/>
    <Route path='/sign-in'  element={<Signin/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
  </Routes>
  </BrowserRouter>
  </StrictMode>
)
