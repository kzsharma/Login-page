import React from 'react'
import "./login.css"
function Login() {
    return (
        <>

            <div className="form-box">
                <div className="form-value">
                    <form >
                        <div>
                            <h2>Login</h2>
                            <div className="inputbox">

                                <input type="text" required />
                                <label for="">Email</label>
                            </div>
                            <div className="inputbox">

                                <input type="password" required />
                                <label for="">Password</label>
                            </div>
                            <div className="forget" >
                                <label for=""
                                ><input type="checkbox" />Remember Me
                                    <a href="#">Forget Password</a></label>
                            </div>
                            <button className='login-button'>Log in</button>
                            <div className="register">
                                <p>Don't have a account <a href="#">Register</a></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Login