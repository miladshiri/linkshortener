import React, { useEffect, useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import UserContext from '../context/UserContext'

const MyLinks = () => {
    const [ links, setLinks ] = useState([])
    const { userInfo, updateUserInfo } = useContext(UserContext);
    const navigate = useNavigate()

    const getLinks = async() => {
        const response = await fetch('http://127.0.0.1:8000/api/link/get-links/',{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "Authorization": `Bearer ${userInfo.access_token}`,
            }
        })
        const data = await response.json()
        setLinks(data)
    }

    useEffect(() => {
        if (userInfo.access_token) {
            getLinks()
        }
        else {
            navigate('/login/')
        }
    }, [])

    const handleDelete = async(hash) => {
        await fetch(`http://127.0.0.1:8000/api/link/delete-link/${hash}`, {
            method:"DELETE",
            headers:{
                "Content-Type":"application/json",
                "Authorization": `Bearer ${userInfo.access_token}`,
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