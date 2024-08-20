import React, { useEffect, useState } from 'react'
import "./signUp.css"
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
function SignUp() {
        const [name , setName] =useState("")
         const [user, setUser] = useState("")
        const [email, setEmail] = useState("")
        const [number, setNumber]= useState("")
        const [pass, setPass]= useState("")
        const [cpass, setCpass]= useState("")
       
        
        const [FormValid, setFormValid ]= useState(false)
        function isValidEmail(email) 
        {
            return /\S+@\S+\.\S+/.test(email);
        }

        const handleSubmit = e =>
            {
                e.preventDefault();
                console.log("hi")     
            }
            const handleNumber = e=>{
                setNumber(e.target.value)
                if(number.length==9)
                {
                    setFormValid(true)
                }
                else
                {
                    setFormValid(false)
                }
            }
            const handleEmail = e => {
                setEmail(e.target.value);
               
                if(isValidEmail(email))
                {
                   setFormValid(true)
                }
                else {
                setFormValid(false)
                }
              };
              const handlePass = e =>{
                setCpass(e.target.value)
                if(cpass===pass)
                {
                    setFormValid(true)
                }
                else{
                    setFormValid(false)
                }
              }
    return (
        <>
            <div className='signup-1'>
                <div className='box'>
                    <h2 className='heading'>Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='input-form'>
                            <div className="inputbox">
                                <input type='text'  onChange={(e) => setName(e.target.value)} required />
                                <label>Name</label>
                            </div>
                            <div className="inputbox">
                                <input type='text'  onChange={(e) => setUser(e.target.value)} required />
                                <label >Username</label>
                            </div>
                            <div className="inputbox">
                                <input type='text'  onChange={handleEmail} required />
                                <label >Email</label>
                            </div>
                            <div className="inputbox">
                                <input type='tel'  onChange={handleNumber}  required />
                                <label >Mobile No.</label>
                            </div>
                            <div className="inputbox">
                                <input type='password' onChange={(e) => setPass(e.target.value)} required />
                                <label > New Password</label>
                            </div>
                            <div className="inputbox">
                                <input type='password'onChange={handlePass} required />
                                <label >Confirm Password</label>
                            </div>
                            <Link to="/" className='signup-button' > <button className='signup-button' disabled={!FormValid} >Sign Up</button></Link>
                        </div>
                    </form>
                </div>
                {cpass}
            </div>
        </>
    )
}

export default SignUp