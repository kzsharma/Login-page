import { React, useState } from 'react'
import "./signUp.css"
import Input from '../input/Input'
import usevalidate from '../../hooks/useValidate.jsx'
import utilites from '../../assets/utilities/utilites.jsx'
function SignUp() {

    const { user, error, name, password, confirmPassword, number,
        validateConfirmPassword,
        handleChange, validateEmail,
        validatePassword,
        validateNumber,
        validateName,
        validatePassAndCPass,
        validateUsername,
        validatePassAndUSer
    } = usevalidate()
    const { navigate } = utilites()
    const inputFields = [
        { type: 'text', name: 'name', label: 'Name' },
        { type: 'text', name: 'userName', label: 'User-Name' },
        { type: 'text', name: 'email', label: 'Email' },
        { type: 'text', name: 'number', label: 'Mobile Number' },
        { type: 'password', name: 'password', label: 'Password' },
        { type: 'password', name: 'confirmPassword', label: 'Confirm Password' }
    ];
    const handleSubmit = (e) => {
        e.preventDefault();
        validatePassword(user.password)
        validateName(user.name)
        validateEmail(user.email)
        validateConfirmPassword(user.confirmPassword)
        validateNumber(user.number)
        validateUsername(user.userName)
        validatePassAndCPass(user.password, user.confirmPassword)
        validatePassAndUSer(user.password, user.userName)
        if (validatePassword(user.password) &&
            validateName(user.name) &&
            validateEmail(user.email) &&
            validateConfirmPassword(user.confirmPassword) &&
            validateNumber(user.number) &&
            validateUsername(user.userName) &&
            validatePassAndUSer(user.password, user.userName) &&
            validatePassAndCPass(user.password, user.confirmPassword)) {
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
                            {inputFields.map((field, index) => (
                                <Input
                                    key={index}
                                    type={field.type}
                                    name={field.name}
                                    value={user[field.name]}
                                    onChange={handleChange}
                                    label={field.label}
                                    error={error[field.name]}
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