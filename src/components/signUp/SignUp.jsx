import React, { useState } from 'react'
import "./signUp.css"
import {Link} from 'react-router-dom'

function SignUp() {
        const [name , setName] = useState("")
        const [user, setUser] = useState("")
        const [email, setEmail] = useState("")
        const [number, setNumber] = useState("")
        const [password, setPassword] = useState("")
        const [confirmPassword, setConfirmPassword] = useState("")

        function isValidEmail(email){
            return /\S+@\S+\.\S+/.test(email);
        }
        const handleSubmit=e=>{
                console.log("hi")  
                if(!name){
                    alert("name ivalid")
                    return
                }
                if(!user){
                    alert("user invalid")
                    return
                }
                if(! isValidEmail(email)){
                   alert("wrong mail")
                   return
                }
                if(password!=confirmPassword){
                    alert("password mismatch")
                    return
                } 
                if(number.length!=10){
                    alert("invalid no.")
                    return
                }   
                if(confirmPassword!=password){
                    alert("wrong pass")
                    return
                }                      
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
                            <Link to="#" className='signup-button'><button onClick={handleSubmit} className='signup-button'>Sign Up</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp

