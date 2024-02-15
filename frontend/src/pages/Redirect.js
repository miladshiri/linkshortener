import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'



const Redirect = () => {
    const navigate = useNavigate()
    const { hash } = useParams()
    const [ myLink, setMyLink ] = useState([])

    const getMyLink = async() => {
        const response = await fetch(`/api/link/get-link/${hash}`)
        const data = await response.json()
        setMyLink(data)
    }

    useEffect(()=>{
        getMyLink()
    }, [])

    useEffect(()=>{
        if (myLink.source_link) {
            window.open(myLink.source_link, "_self", "noreferrer");
        }
    }, [ myLink.source_link ])
  return (
    <div>Redirect</div>
  )
}

export default Redirect