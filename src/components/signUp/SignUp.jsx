import { React, useState } from 'react'
import "./signUp.css"
import { useNavigate } from 'react-router-dom'
import Input from '../input/Input'
import usevalidate from '../../hooks/useValidate.jsx'
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
    const [errors, setErrors] = useState({})
    const inputFields = [
        { type: 'text', name: 'name', label: 'Name' },
        { type: 'text', name: 'userName', label: 'User-Name' },
        { type: 'text', name: 'email', label: 'Email' },
        { type: 'text', name: 'number', label: 'Mobile Number' },
        { type: 'password', name: 'password', label: 'Password' },
        { type: 'password', name: 'confirmPassword', label: 'Confirm Password' }
    ];
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
                            {/* <Input
                                type='password'
                                name='confirmPassword'
                                value={user.confirmPassword}
                                onChange={handleChange}
                                label="Confirm Password"
                                error={errors.confirmPassword}
                            />  */}
                            {inputFields.map((field, index) => (
                                <Input
                                    key={index}
                                    type={field.type}
                                    name={field.name}
                                    value={user[field.name]}
                                    onChange={handleChange}
                                    label={field.label}
                                    error={errors[field.name]}
                                />
                            ))}
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