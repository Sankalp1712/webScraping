import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home1 from './pages/Home1';
import Result from './pages/Result';
import Result1 from './pages/Result1';
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home1" element={<Home1 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/result" element={<Result />} />
        <Route path="/result1" element={<Result1 />} />
        
      </Routes>
    </BrowserRouter>
  )
}
