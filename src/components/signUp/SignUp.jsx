import React, { useState } from 'react'
import "./signUp.css"
import { Link } from 'react-router-dom'
function SignUp() {
        const [name , setName] =useState("")
        const [email, setEmail] = useState("")
        const [number, setNumber]= useState("")
        const [user, setUser] = useState("")
        const [pass, setPass]= useState("")
        
        const [FormValid, setFormValid ]= useState(true)
    return (
        <>

            <div className='signup-1'>

                <div className='box'>

                    <h2 className='heading'>Sign Up</h2>
                    <form action="">

                        <div className='input-form'>

                            <div className="inputbox">

                                <input type='text'  onChange={(e) => setName(e.target.value)} required />
                                <label for="">Name</label>
                            </div>
                            <div className="inputbox">

                                <input type='text'  onChange={(e) => setUser(e.target.value)} required />
                                <label for="">Username</label>
                            </div>
                            <div className="inputbox">


                                <input type='email'  onChange={(e) => setEmail(e.target.value)} required />
                                <label >Email</label>
                            </div>
                            <div className="inputbox">


                                <input type='tel'  onChange={(e) => setNumber(e.target.value)} required />
                                <label >Mobile No.</label>
                            </div>
                            <div className="inputbox">

                                <input type='password' onChange={(e) => setPass(e.target.value)} required />
                                <label > new password</label>
                            </div>
                            <div className="inputbox">

                                <input type='password' required />
                                <label >confirm password</label>
                            </div>
                            <a href="#" className='signup-button' > <button className='signup-button' disabled={!FormValid} >Sign Up</button></a>

                        </div>

                    </form>


                </div>
            </div>
        </>
    )
}

export default SignUp