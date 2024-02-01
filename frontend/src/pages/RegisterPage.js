import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {
    const navigate = useNavigate()

    const [ form, setForm ] = useState([])

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setForm({...form, [name]:value})
    }

    const doRegister = async() => {
        const response = await fetch('/api/user/register/', {
            method:"POST",
            headers:{
                "Content-Type":"application/json"   
            },
            body:JSON.stringify(form)
        })

        if (response.ok) {
            navigate('/login/')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        doRegister()
    }

  return (
    <form className="container-sm w-25">
        <div className="mb-3">
            <label for="username" className="form-label">username</label>
            <input onChange={handleInputChange} type="text"className="form-control" name="username" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input onChange={handleInputChange} type="password"  className="form-control" name="password"/>
        </div>
        <div className="mb-3">
            <label for="exampleInputPassword2" className="form-label">Repeat Password</label>
            <input onChange={handleInputChange} type="password"  className="form-control" name="password2"/>
        </div>
        <button onClick={handleSubmit} type="submit" className="btn btn-primary">Register</button>
    </form>
  )
}

export default RegisterPage