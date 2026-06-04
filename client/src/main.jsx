import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import { BrowserRouter, Route, Routes, } from "react-router";
import Signup from './Pages/signup.jsx';
import Signin from './Pages/signin.jsx';

import { Link } from "react-router";
import Homepage from './Pages/Homepage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
  <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path='/sign-up' element={<Signup/>}/>
    <Route path='/sign-in'  element={<Signin/>}/>
  </Routes>
  </BrowserRouter>
  </StrictMode>
)
