import React from 'react'
import { useNavigate} from 'react-router-dom'

function utilites() {
    const navigate = useNavigate();

  return {navigate}
    
}

export default utilites