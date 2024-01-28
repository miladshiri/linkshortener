import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const MyLinks = () => {
    const [ links, setLinks ] = useState([])
    const getLinks = async() => {
        const response = await fetch('http://127.0.0.1:8000/api/link/get-links/')
        const data = await response.json()
        setLinks(data)
    }

    useEffect(() => {
        getLinks()
    }, [])

    const handleDelete = async(hash) => {
        await fetch(`http://127.0.0.1:8000/api/link/delete-link/${hash}`, {
            method:"DELETE",
            header:{
                "Content-Type":"application/json"
            }
        })
        getLinks()
    }

  return (
    <div className="container-sm mt-5">
        <ul className="list-group">
            {links.map((link, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                    <Link className="w-50" to={link.source_link} target="_blank">{link.source_link.slice(0,50)}{link.source_link.length>50 ? "..." : ""}</Link>
                    <Link className="" to={`/link/${link.hash}`} target="_blank">https://mydomain.com/link/{link.hash}</Link>
                    <div  onClick={()=>(handleDelete(link.hash))} className="btn btn-danger">delete</div>
                </li>
            ))}
            
        </ul>
    </div>
  )
}

export default MyLinks