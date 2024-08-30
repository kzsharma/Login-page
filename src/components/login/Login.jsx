import React, { useRef, useState } from 'react'
import "./login.css"
import { Link, useNavigate } from 'react-router-dom'
import Input from '../input/Input'
import usevalidate from '../../hooks/usevalidate'

function Login() {
    const navigate = useNavigate()
    const [error, setError] = useState({})
    const [user, setUser] = useState({
        email: '',
        password: '',
    })
    const handleChange = (e) => {
        // console.log(e.target.name)
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setError({})
        console.log(user)
        const validateErrors = usevalidate(user)
        setError(validateErrors)
        console.log("abc",error)
        if(Object.keys(validateErrors).length === 0)
        {
            navigate("/hero")
        }
                // setError(usevalidate(user));
        //     console.log(error);
        //     if (Object.keys(error).length === 0) {
        //         console.log("ABC")
        //         navigate("/hero")
        //     }
        // console.log(Object.keys(error))
        
    }

    return (
        <>
            <div className='positioning'>
                <div className="form-box">
                    <div className="form-value">
                        <form>
                            <div>
                                <h2>Login</h2>
                                <Input
                                    type='text'
                                    name='email'
                                    value={user.email}
                                    onChange={handleChange}
                                    label="Email"
                                    error={error.email}
                                />
                                <Input
                                    type='password'
                                    name='password'
                                    value={user.password}
                                    onChange={handleChange}
                                    label="Password"
                                    error={error.password}
                                />
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
