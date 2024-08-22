import React, { useState } from 'react'
import "./login.css"
import {Link} from 'react-router-dom'
import Hide from "../signUp/hide.png"
function Login() {
    const [show, setShow] = useState(false)
    return(
        <>
            <div className="form-box">
                <div className="form-value">
                    <form>
                        <div>
                            <h2>Login</h2>
                            <div className="inputbox">
                                <input type="text" required />
                                <label>Email</label>
                            </div>
                            <div className="inputbox pass-eye">
                                <input type={show? "text":"password"} required />
                                <label>Password</label>
                                <img onClick={(e)=>setShow(!show)} className="hide"src={Hide}></img>
                            </div>
                            <div className="forget" >
                                <label><input type="checkbox" />Remember Me <Link to="#">Forget Password</Link></label>
                            </div>
                            <button className='login-button'>Log in</button>
                            <div className="register">
                                <p>Don't have a account 
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