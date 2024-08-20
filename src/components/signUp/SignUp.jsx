import React from 'react'
import "./signUp.css"
import { Link } from 'react-router-dom'
function SignUp() {
    return (
        <>

            <div className='signup-1'>
          
                <div className='box'>
                
                <h2 className='heading'>Sign Up</h2>  
                    <form action="">
                   
                        <div className='input-form'>
                      
                            <div className="inputbox">

                                <input type='text'  required />
                                <label for="">Name</label>
                            </div>
                            <div className="inputbox">

                                <input type='text'  required />
                                <label for="">Username</label>
                            </div>
                            <div className="inputbox">


                                <input type='email'  required />
                                <label >Email</label>
                            </div>
                            <div className="inputbox">


                                <input type='tel'  required />
                                <label >Mobile No.</label>
                            </div>
                            <div className="inputbox">

                                <input type='password'  required />
                                <label > new password</label>
                            </div>
                            <div className="inputbox">

                                <input type='password' required />
                                <label >confirm password</label>
                            </div>
                            <a href="#" className='signup-button' > <button className='signup-button' >Sign Up</button></a>
                            
                        </div>
                       
                    </form>
                    
                   
                </div>
            </div>
        </>
    )
}

export default SignUp