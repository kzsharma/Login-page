import { React, useState } from 'react'
import "./signUp.css"
import { useNavigate } from 'react-router-dom'
import Input from '../input/Input'
import usevalidate from '../../hooks/usevalidate'
function SignUp() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: '',
        userName: '',
        email: '',
        number: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({})
        const validateErrors = usevalidate(user)
        setErrors(validateErrors)
        if (Object.keys(validateErrors).length === 0) {
            navigate("/")
        }
    }
    return (
        <>
            <div className='signup-1'>
                <div className='box'>
                    <h2 className='heading'>Sign-Up</h2>
                    <form >
                        <div className='input-form'>
                            <Input
                                type='text'
                                name='name'
                                value={user.name}
                                onChange={handleChange}
                                label="Name"
                                error={errors.name}
                            />
                            <Input
                                type='text'
                                name='userName'
                                value={user.userName}
                                onChange={handleChange}
                                label="User-Name"
                                error={errors.userName}
                            />
                            <Input
                                type='text'
                                name='email'
                                value={user.email}
                                onChange={handleChange}
                                label="Email"
                                error={errors.email}
                            />
                            <Input
                                type="text"
                                name='number'
                                value={user.number}
                                onChange={handleChange}
                                label="Mobile Number"
                                error={errors.number}
                            />
                            <Input
                                type='password'
                                name='password'
                                value={user.password}
                                onChange={handleChange}
                                label="Password"
                                error={errors.password}
                            />
                            <Input
                                type='password'
                                name='confirmPassword'
                                value={user.confirmPassword}
                                onChange={handleChange}
                                label="Confirm Password"
                                error={errors.confirmPassword}
                            />
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