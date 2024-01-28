import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const MainPage = () => {

    const [ myLink, setMyLink ] = useState([])
    const [ sourceLink, setSourceLink ] = useState([])

    const createLink = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/link/shortener/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
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
        <form class="d-flex" role="search" onSubmit={handleCreateSubmit}>
            <input onChange={(e) => (handleLinkFieldChange(e.target.value))} class="form-control me-2" name="link_field" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Make Short!</button>
        </form>
        <div className="container-sm mt-5">
        <h2 className="fw-bold">Shorted Link: </h2> 
            <div class="card">
                <div class="card-body">
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