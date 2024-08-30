import React from 'react'

function usevalidate(user) {
  console.log(user)
  console.log(!user.name)
  const error = {}
  const emailPattern = /\S+@\S+\.\S+/;
  const userNamePattern = /^[A-Za-z0-9_@./!$^*)(#&+-]*$/;
  const namePattern = /^[a-zA-Z ]*$/;
  const numberPattern = /^\d+$/
  const passwrodPattern = /^[ A-Za-z0-9_@./#&+-]*$/;

  if (!emailPattern.test(user.email)) {
    error.email = "Invalid Email"
  }
  if (user.password.length < 8) {
    error.password = "Invalid password"
  }
  if (!user.name || user.name.length < 4 || !namePattern.test(user.name)) {
    error.name = "Invalid Name"
  }
  if (!user.user || user.user.length < 4 || !userNamePattern.test(user.user)) {
    error.user = "Invalid Username"
  }
  if (user.user === user.password)
  {
    error.password="Password Cannot be same as Username"
  }
  if (user.password.length < 8 || !passwrodPattern.test(user.password)){
    error.password = "Invalid Password"
  }
  if (user.password !== user.confirmPassword)
  {
    error.confirmPassword= "Password Mismatch"
  }
  if(!user.confirmPassword && !user.password){
    error.confirmPassword ="Invalid Password"
  }
  if (!user.number|| user.number.length < 10 || user.number.length > 12 || !numberPattern.test(user.number))
  {
      error.number="Invalid Number"
  }
  
  // console.log(error)
  return error
}

export default usevalidate