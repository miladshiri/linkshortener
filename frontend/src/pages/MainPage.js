import React, { useState, useEffect, createContext, useContext } from 'react'
import { Link } from 'react-router-dom'

import UserContext from '../context/UserContext'

const MainPage = () => {

    const [ myLink, setMyLink ] = useState([])
    const [ sourceLink, setSourceLink ] = useState([])
    const { userInfo, updateUserInfo } = useContext(UserContext);

    const createLink = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/link/shortener/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${userInfo.access_token}`,
            },
            body:JSON.stringify({
                "source_link": sourceLink,
            })
        })
        const data = await response.json()
        setMyLink(data)
    }

    const handleLinkFieldChange = (value) => {
        setSourceLink(value)
    } 

    const handleCreateSubmit = (event) => {
        event.preventDefault();

        createLink()
    }


  return (
    <div className="container-md mt-5">
        <form className="d-flex" role="search" onSubmit={handleCreateSubmit}>
            <input onChange={(e) => (handleLinkFieldChange(e.target.value))} className="form-control me-2" name="link_field" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Make Short!</button>
        </form>
        <div className="container-sm mt-5">
        <h2 className="fw-bold">Shorted Link: </h2>
            <div className="card">
                <div className="card-body">
                    <Link to={`/link/${myLink.hash }`} target="_blank">
                    https://mydomain.com/link/{ myLink?.hash }
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainPage