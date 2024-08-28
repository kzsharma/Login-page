import { React, useState } from 'react'
import Hide from "../signUp/hide.png"
import View from "../SignUp/View.png"

function Input({ type,name, value, label, onChange, error}) {
    const [show, setShow] = useState(true)
    return (
        <div className='invalid'>
            <div className="inputbox pass-eye">
                <input
                    type={type==='text'?  'text' :show?'password': 'text'}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required />
                <label>{label}</label>
                {(type === 'password' && value) &&
                    <img
                        onClick={() =>setShow(!show)}
                        className="hide"
                        src={show ? Hide : View}>
                    </img>}
            </div>
            {error &&<p className='invalid-text'>{error}</p>}
        </div>
    );
}
export default Input
