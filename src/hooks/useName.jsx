import React, { useEffect, useState } from 'react'

function useName() {
    const [list,setList]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
        .then((res)=>setList(res));
    },[list])
    return list
}

export default useName