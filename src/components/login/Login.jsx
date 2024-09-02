import React, { useRef, useState } from 'react'
import "./login.css"
import { Link, useNavigate } from 'react-router-dom'
import Input from '../input/Input'
import usevalidate from '../../hooks/useValidate.jsx'
function Login() {
    const navigate = useNavigate()
    const [error, setError] = useState({})
    const [user, setUser] = useState({
        email: '',
        password: '',
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setError({})
        const validateErrors = usevalidate(user)
        setError(validateErrors)
        if (Object.keys(validateErrors).length === 0) {
            navigate("/hero")
        }
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
