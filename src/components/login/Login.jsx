import React, { useState } from 'react'
import "./login.css"
import { Link, useNavigate } from 'react-router-dom'
import Hide from "../signUp/hide.png"
import View from "../SignUp/View.png"
function Login() {
    const [show, setShow] = useState(false)
    const [error, setError] = useState({
        email: '',
        password: '',
    })
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
    const navigate = useNavigate();
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isValidEmail(user.email)) {
            setError(prevState => ({
                ...prevState,
                email: "invalid Email"
            }))
            return
        }
        if (user.password.length < 8) {
            setError(prevState => ({
                ...prevState,
                password: "invalid password"
            }))
            return
        }
       
        navigate("/hero")
    }
    return (
        <>
            <div className="form-box">
                <div className="form-value">
                    <form>
                        <div>
                            <h2>Login</h2>
                            <div className='invalid'>
                                <div className="inputbox">
                                    <input
                                        type='text'
                                        name='email'
                                        value={user.email}
                                        onChange={handleChange}
                                        required />
                                    <label>Email</label>
                                </div>
                                {error.email && <p className='invalid-text'>{error.email}</p>}
                            </div>
                            <div className='invalid'>
                                <div className="inputbox pass-eye">
                                    <input
                                        type={show ? "text" : "password"}
                                        name='password'
                                        value={user.password}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label>Password</label>
                                    {user.password &&
                                        <img
                                            onClick={() => setShow(!show)}
                                            className="hide"
                                            src={show ? Hide : View}>
                                        </img>}
                                </div>
                                {error.password && <p  >{error.password}</p>}
                            </div>
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
                                <p>Don't have a account
                                    <Link to="/signup"> Register</Link>
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