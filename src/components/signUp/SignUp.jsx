import React from 'react'
import "./signUp.css"
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
                                <label for="">Email</label>
                            </div>
                            <div className="inputbox">


                                <input type='tel'  required />
                                <label for="">Mobile No.</label>
                            </div>
                            <div className="inputbox">

                                <input type='password'  required />
                                <label for=""> new password</label>
                            </div>
                            <div className="inputbox">

                                <input type='password' required />
                                <label for="">confirm password</label>
                            </div>
                            <button className='signup-button'>Sign Up</button>
                            
                        </div>
                       
                    </form>
                    
                   
                </div>
            </div>
        </>
    )
}

export default SignUp