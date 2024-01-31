import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const navigate = useNavigate()
    const [ form, setForm ] = useState([])
    const doLogin = async() => {
        const response = await fetch('/api/user/token/', {
            method:"POST",
            headers:{
                "Content-Type":"application/json"   
            },
            body:JSON.stringify(form)
        })

        if (response.ok) {
            const data = await response.json()
            localStorage.setItem('access_key', data.access);
            navigate('/')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        doLogin()
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setForm({...form, [name]:value})
    }
  return (
    <form className="container-sm w-25">
        <div className="mb-3">
            <label for="username" className="form-label">Email address</label>
            <input onChange={handleInputChange} type="text"className="form-control" name="username" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input onChange={handleInputChange} type="password"  className="form-control" name="password"/>
        </div>
        <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default LoginPage