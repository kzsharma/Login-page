import React from 'react'

function usevalidate(user) {
  const error = {}
  const emailPattern = /\S+@\S+\.\S+/;//  return <"ivalid"> {data.error}
  const passwrodPattern = /^\d+$/;

    if(!emailPattern.test(user.email)){
      error.email ="invalid Email"
     
    }
    if (user.password.length < 8){
      error.password ="Invalid password"

    }
    // console.log(error)
    return error
}



export default usevalidate