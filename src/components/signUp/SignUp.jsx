import React, { useState } from 'react'
import "./signUp.css"
import {Link, useNavigate} from 'react-router-dom'

function SignUp() {
        const [name , setName] = useState("")
        const [user, setUser] = useState("")
        const [email, setEmail] = useState("")
        const [number, setNumber] = useState("")
        const [password, setPassword] = useState("")
        const [confirmPassword, setConfirmPassword] = useState("")
        const navigate = useNavigate();
        function isValidEmail(email){
            return /\S+@\S+\.\S+/.test(email);
        }
        function isValidName(name){
            return /^[a-zA-Z]+$/.test(name);
        }
        const handleSubmit=(e)=>{
            e.preventDefault();
            if(!name || name.length<4 ||! isValidName(name)){
                alert("Invalid Name")
                return
            }
            if(!user || user.length<4 ){
                alert("Invalid User name")
                return
            }
            if(! isValidEmail(email)){
                alert("Invalid Email")
                return
            }
            if(password.length<8){
                alert("password is less than 8 characters")
                return
            }
            if(password!==confirmPassword){
                alert("password mismatch")
                return
            } 
            if(number.length!==10){
                alert("Invalid Phone-Number")
                return
            }   
            if(user===password){
                alert("password cannot be same as username")
                return
            } 
            navigate("/login")               
        }   
    return(
        <>
            <div className='signup-1'>
                <div className='box'>
                    <h2 className='heading'>Sign Up</h2>
                    <form >
                        <div className='input-form'>
                            <div className="inputbox">
                                <input type='text' value={name} onChange={(e)=>setName(e.target.value)} required />
                                <label>Name</label>
                            </div>
                            <div className="inputbox">
                                <input type='text' value={user} onChange={(e)=>setUser(e.target.value)} required />
                                <label>Username</label>   
                            </div>
                            <div className="inputbox">
                                <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} required />
                                <label>Email</label>
                            </div>
                            <div className="inputbox">
                                <input type='tel' value={number} onChange={(e)=>setNumber(e.target.value)} required />
                                <label>Mobile No.</label>
                            </div>
                            <div className="inputbox">
                                <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} required />
                                <label> New Password</label>
                            </div>
                            <div className="inputbox">
                                <input type='password' onChange={(e)=>setConfirmPassword(e.target.value)} required />
                                
                                <label>Confirm Password</label>
                            </div>
                           <button onClick={handleSubmit} className='signup-button'>Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp

