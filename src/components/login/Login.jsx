import React, { useRef, useState } from 'react'
import "./login.css"
import { Link, useNavigate } from 'react-router-dom'
import Input from '../input/Input'
import usevalidate from '../../hooks/useValidate.jsx'
function Login() {
    const navigate = useNavigate()
   
    const {user,error,handleChange,validateEmail,validatePassword}= usevalidate()
    const inputFields = [
        { type: 'text', name: 'email', label: 'Email' },
        { type: 'password', name: 'password', label: 'Password' }
    ]
    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setUser(prevState => ({
    //         ...prevState,
    //         [name]: value
    //     }));
    // }
    const handleSubmit = (e) => {
        
        e.preventDefault();
        let flag =true
        if(!validateEmail(user.email))
        {
          flag=false
        }
        if(!validatePassword(user.password)){
            flag= false
        }
        if(flag)
        navigate("/hero") 
    }
    return (
        <>
            <div className='positioning'>
                <div className="form-box">
                    <div className="form-value">
                        <form>
                            <div>
                                <h2>Login</h2>
                                {inputFields.map((field, index) => (
                                    <Input
                                        key={index}
                                        type={field.type}
                                        name={field.name}
                                        value={user[field.name]}
                                        onChange={handleChange}
                                        label={field.label}
                                        error={error[field.name]}
                                    />
                                ))}
                                <div className="forget" >
                                    <label>
                                        <input
                                            type="checkbox" />Remember Me <Link to="#">Forget Password</Link>
                                    </label>
                                </div>
                                <button
                                    className='login-button'
                                    onClick={handleSubmit}>Log in
                                </button>
                                <div className="register">
                                    <p>Don't have a account &nbsp;
                                        <Link to="/signup">Register</Link>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login
