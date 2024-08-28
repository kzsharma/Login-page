import React, { useState } from 'react'
import "./login.css"
import { Link, useNavigate } from 'react-router-dom'
import Input from '../input/Input'

function Login() {
    const [error, setError] = useState({
        email: '',
        password: '',
    })
    const [user, setUser] = useState({
        email: '',
        password: '',
    })
    const handleChange = (e) => {
        console.log(e.target.name)
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    const navigate = useNavigate();
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let isdataValid = true
        setError(prevState => ({
            ...prevState,
            email: "",
            password: ""
        }))
        if (!isValidEmail(user.email)) {
            setError(prevState => ({
                ...prevState,
                email: "Invalid Email"
            }))
            isdataValid = false
        }
        if (user.password.length < 8) {
            setError(prevState => ({
                ...prevState,
                password: "Invalid Password"
            }))
            isdataValid = false
        }
        if (isdataValid) {
            navigate("/hero")
        }
    }
    return (
        <>
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
        </>
    )
}
export default Login
