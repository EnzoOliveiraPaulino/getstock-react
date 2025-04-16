import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/cadastro' element={<FormUser/>}></Route>
        <Route path='/login' element={<ListUser/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
