import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Landingpage from './Landingpage.jsx'
import Signup from './components/Signup.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      {/* <Route path='/' element = {<Landingpage/>}/> */}
      <Route path="/" element={<Signup />} />
      <Route path="/admin/app" element={<App />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
)
