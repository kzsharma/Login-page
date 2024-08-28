import { React, useState } from 'react'
import "./signUp.css"
import { useNavigate } from 'react-router-dom'
import Input from '../input/Input'

function SignUp() {
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
        //return /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/.test(number)     // alternate regex
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
        let isdataValid = true
        setErrors(prevState => ({
            ...prevState,
            name: '',
            user: '',
            email: '',
            number: '',
            password: '',
            confirmPassword: ''
        }))
        if (!data.name || data.name.length < 4 || !isValidName(data.name)) {
            setErrors(prevState => ({
                ...prevState,
                name: 'Invalid Name'
            }))
            isdataValid = false
        }
        if (!data.user || data.user.length < 4 || !isValidUser(data.user)) {
            setErrors(prevState => ({
                ...prevState,
                user: 'Invalid User-Name'
            }))
            isdataValid = false
        }
        if (!isValidEmail(data.email)) {
            setErrors(prevState => ({
                ...prevState,
                email: 'Invalid Email'
            }))
            isdataValid = false
        }
        if (data.user === data.password) {
            setErrors(prevState => ({
                ...prevState,
                password: 'Password Cannot be same as username'
            }))
            isdataValid = false
        }
        if (data.password.length < 8 || !isValidUser(data.password)) {
            setErrors(prevState => ({
                ...prevState,
                password: 'Invalid Password'
            }))
            isdataValid = false
        }
        if (data.password !== data.confirmPassword) {
            setErrors(prevState => ({
                ...prevState,
                confirmPassword: 'Password Mismatch'
            }))
            isdataValid = false
        }
        if (data.number.length < 10 || data.number.length > 12 || !isValidNumber(data.number)) {
            setErrors(prevState => ({
                ...prevState,
                number: 'Invalid Number'
            }))
            isdataValid = false
        }
        if (isdataValid) {
            navigate("/")
        }
    }
    return (
        <>
            <div className='signup-1'>
                <div className='box'>
                    <h2 className='heading'>Sign Up</h2>
                    <form >
                        <div className='input-form'>
                            <Input
                                type='text'
                                name='name'
                                value={data.name}
                                onChange={handleChange}
                                label="Name"
                                error={errors.name}
                            />
                            <Input
                                type='text'
                                name='user'
                                value={data.user}
                                onChange={handleChange}
                                label="User"
                                error={errors.user}
                            />
                            <Input
                                type='text'
                                name='email'
                                value={data.email}
                                onChange={handleChange}
                                label="Email"
                                error={errors.email}
                            />
                            <Input
                                type="text"
                                name='number'
                                value={data.number}
                                onChange={handleChange}
                                label="Number"
                                error={errors.number }
                            />
                             <Input
                                 
                                 name='password'
                                 value={data.password}
                                 onChange={handleChange}
                                 label="Password"
                                 error={errors.password}
                             />
                            {/* <div className='invalid'>
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
                            </div> */}
                            <Input
                                name='confirmPassword'
                                value={data.confirmPassword}
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