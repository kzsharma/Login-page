import React, { useState } from 'react'
import "./login.css"
import {Link, useNavigate} from 'react-router-dom'
import Hide from "../signUp/hide.png"
function Login() {
    const [show, setShow] = useState(false)
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    function isValidEmail(email){
    return /\S+@\S+\.\S+/.test(email);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(! isValidEmail(email)){
            alert("Invalid Email")
            return
        }
        if(password.length<8){
            alert("password is less than 8 characters")
            return
        }
        navigate("/hero")               
    }
    return(
        <>
            <div className="form-box">
                <div className="form-value">
                    <form>
                        <div>
                            <h2>Login</h2>
                            <div className="inputbox">
                            <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} required />
                                <label>Email</label>
                            </div>
                            <div className="inputbox pass-eye">
                            <input type={show? "text":"password"} value={password} onChange={(e)=>setPassword(e.target.value)} required />
                                <label>Password</label>
                                <img onMouseDown={(e)=>setShow(!show)} onMouseUp={(e)=>setShow(!show)} className="hide"src={Hide}></img>
                            </div>
                            <div className="forget" >
                                <label><input type="checkbox" />Remember Me <Link to="#">Forget Password</Link></label>
                            </div>
                            <button className='login-button' onClick={handleSubmit}>Log in</button>
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