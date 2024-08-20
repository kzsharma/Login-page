import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom'
function Login() {
    return (
        <>

            <div className="form-box">
                <div className="form-value">
                    <form >
                        <div>
                            <h2>Login</h2>
                            <div className="inputbox">

                                <input type="email" required />
                                <label >Email</label>
                            </div>
                            <div className="inputbox">

                                <input type="password" required />
                                <label >Password</label>
                            </div>
                            <div className="forget" >
                                <label  >
                               
                                <input type="checkbox" />Remember Me
                                    <Link to="#">Forget Password</Link></label>
                            </div>
                            <button className='login-button'>Log in</button>
                            <div className="register">
                                <p>Don't have a account <Link to="signup">Register</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Login