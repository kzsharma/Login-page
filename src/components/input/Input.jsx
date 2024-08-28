import { React, useState } from 'react'
import Hide from "../signUp/hide.png"
import View from "../SignUp/View.png"

function Input({ type,name, value, label, onChange, error}) {
    const [showEyeIcon, setShowEyeIcon] = useState(true)
    return (
        <div className='invalid'>
            <div className="inputbox pass-eye">
                <input
                    type={type==='text'?  'text' :showEyeIcon ?'password': 'text'}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required />
                <label>{label}</label>
                {(type === 'password' && value) &&
                    <img
                        onClick={() =>setShowEyeIcon(!showEyeIcon)}
                        className="hide"
                        src={showEyeIcon ? View: Hide}>
                    </img>}
            </div>
            {error &&<p className='invalid-text'>{error}</p>}
        </div>
    );
}
export default Input
