import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { useState, useEffect, createContext } from 'react'
import { jwtDecode } from 'jwt-decode'

import Header from './components/Header'
import MainPage from './pages/MainPage'
import MyLinks from './pages/MyLinks'
import Footer from './components/Footer'
import Redirect from './pages/Redirect'
import LoginPage from './pages/LoginPage'
import LogoutPage from './pages/LogoutPage'
import RegisterPage from './pages/RegisterPage'

import UserContext from './context/UserContext'

function App() {
  const [ userInfo, setUserInfo ] = useState([])

  const verifyToken = async() => {
    const access_key = localStorage.getItem('access_key')

    const response = await fetch('/api/user/token/verify/', {
        method:"POST",
        headers:{
            "Content-Type":"application/json"   
        },
        body:JSON.stringify({'token':access_key})
    })

    if (response.ok) {
      setUserInfo({...userInfo, 'access_token':access_key, 'username':jwtDecode(access_key).username})
    } else {
      setUserInfo({...userInfo, 'access_token':null, 'username':null})
    }
  }

  const updateUserInfo = (value) => {
    setUserInfo(value)
  }

  useEffect(()=> {
      verifyToken()
  }, [])

  return (
    <Router>
        <UserContext.Provider value={{ userInfo, updateUserInfo }}>
        <div className="app">
          <div className="header">
            <Header />
          </div>
          <div className="body">
            <Routes>
              <Route path='/' exact element={<MainPage />} />
              <Route path='/login/' element={<LoginPage />} />
              <Route path='/logout/' element={<LogoutPage />} />
              <Route path='/register/' element={<RegisterPage />} />
              <Route path='/mylinks/' element={<MyLinks />} />
              <Route path='/link/:hash' element={<Redirect />} />
            </Routes>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </UserContext.Provider>
    </Router>

  );
}

export default App;
