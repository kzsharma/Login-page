import { React, useState } from 'react'
import "./signUp.css"
import { useNavigate } from 'react-router-dom'
import Hide from "../signUp/hide.png"
import View from "../signup/view.png"
function SignUp() {
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: '',
        user: '',
        email: '',
        number: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({
        name: '',
        user: '',
        email: '',
        number: '',
        password: '',
        confirmPassword: ''
    })

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    function isValidName(name) {
        return /^[a-zA-Z ]*$/.test(name);
    }
    function isValidUser(user) {
        return /^[A-Za-z0-9_@./!$^*)(#&+-]*$/.test(user)
    }
    function isValidNumber(number) {
        return /^\d+$/.test(number)
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!data.name || data.name.length < 4 || !isValidName(data.name)) {
            setErrors(prevState => ({
                ...prevState,
                name: 'invalid name'
            }))
            return
        }
        if (!data.user || data.user.length < 4 || !isValidUser(data.user)) {
            setErrors(prevState => ({
                ...prevState,
                user: 'invalid user-Name'
            }))
            return
        }
        
        if (!isValidEmail(data.email)) {
            setErrors(prevState => ({
                ...prevState,
                email: 'Invalid Email'
            }))
            return
        }
        if (data.password.length < 8 || !isValidUser(data.password)) {
            setErrors(prevState => ({
                ...prevState,
                password: 'Invalid Password'
            }))
            return
        }
        if (data.password !== data.confirmPassword) {
            setErrors(prevState => ({
                ...prevState,
                confirmPassword: 'Password Mismatch'
            }))
            return
        }
        if (data.number.length < 10 || data.number.length > 12 || !isValidNumber(data.number)) {
            setErrors(prevState => ({
                ...prevState,
                number: 'Invalid Number'
            }))
            return
        }
        if (data.user === data.password) {
            setErrors(prevState => ({
                ...prevState,
                password: 'Password Cannot be same as username'
            }))
            return
        }
        navigate("/")
        console.log(data.name)
    }
    return (
        <>
            <div className='signup-1'>
                <div className='box'>
                    <h2 className='heading'>Sign Up</h2>
                    <form >
                        <div className='input-form'>
                        <div className='invalid'>
                            <div className="inputbox">
                                <input
                                    type='text'
                                    name='name'
                                    value={data.name}
                                    onChange={handleChange}
                                    required
                                />
                                <label>Name</label>
                                </div>
                                {errors.name && <p className='invalid-text'>{errors.name}</p>}
                            </div>
                            <div className='invalid'>
                                <div className="inputbox">
                                    <input
                                        type='text'
                                        name='user'
                                        value={data.user}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label>Username</label>
                                </div>
                                {errors.user && <p className='invalid-text'>{errors.user}</p>}
                            </div>
                            <div className='invalid'>
                                <div className="inputbox">
                                    <input
                                        type='text'
                                        name='email'
                                        value={data.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label>Email</label>
                                </div>
                                {errors.email && <p className='invalid-text'>{errors.email}</p>}
                            </div>
                            <div className='invalid'>
                                <div className="inputbox">
                                    <input
                                        type='text'
                                        name='number'
                                        value={data.number}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label>Mobile No.</label>
                                </div>
                                {errors.number && <p className='invalid-text'>{errors.number}</p>}
                            </div>
                            <div className='invalid'>
                                <div className="inputbox pass-eye">
                                    <input
                                        type={show ? "text" : "password"}
                                        name='password'
                                        value={data.password}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label> New Password</label>
                                    {data.password &&
                                        <img
                                            onClick={() => setShow(!show)}
                                            className="hide"
                                            src={show ? Hide : View}>
                                        </img>}
                                </div>
                                {errors.password && <p className='invalid-text'>{errors.password}</p>}
                            </div>
                            <div className='invalid'>
                                <div className="inputbox pass-eye">
                                    <input
                                        type={show2 ? "text" : "password"}
                                        name='confirmPassword'
                                        value={data.confirmPassword}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label>Confirm Password</label>
                                    {data.confirmPassword &&
                                        <img
                                            onClick={() => setShow2(!show2)}
                                            className="hide"
                                            src={show2 ? Hide : View}>
                                        </img>}
                                </div>
                                {errors.confirmPassword && <p className='invalid-text'>{errors.confirmPassword}</p>}
                            </div>
                            <button
                                onClick={handleSubmit}
                                className='signup-button'>Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default SignUp

