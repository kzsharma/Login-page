import { React, useState } from "react";

function useValidate() {

  const emailPattern = /\S+@\S+\.\S+/;
  const userNamePattern = /^[A-Za-z0-9_@./!$^*)(#&+-]*$/;
  const namePattern = /^[A-Za-z]+( [A-Za-z]+)?$/
  const numberPattern = /^\d+$/;
  const passwrodPattern = /^[ A-Za-z0-9_@./#&+-]*$/;
  const [user, setUser] = useState({
    name: '',
    userName: '',
    email: '',
    number: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState({
    name: '',
    userName: '',
    email: '',
    number: '',
    password: '',
    confirmPassword: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));

  };
  const validateEmail = (email) => {
    console.log("validate-email", email)
    if ((!emailPattern.test(email))) {
      setError(prevState => ({
        ...prevState,
        email: "Invalid Error"
      }));

      return false
    }
    else {
      setError(prevState => ({
        ...prevState,
        email: ""
      }))
      return true
    }
  };
  const validatePassword = (password) => {
    if (!password || password.length < 8|| !passwrodPattern.test(password)) {
      setError(prevState => ({
        ...prevState,
        password: "Invalid Password"
      }))
      return false
    }
    else {
    setError(prevState => ({
      ...prevState,
      password: ""
    }))
    return true
  }
  }
  const validateUsername = (userName) => {
    if (!userName || userName.length < 4|| !userNamePattern.test(userName)) {
      setError(prevState => ({
        ...prevState,
        userName: "Invalid Username"
      }))
      return false
    }
    else{
      setError(prevState => ({
        ...prevState,
        userName: ""
      }))
      return true
    }
  }
  const validateNumber = (number) => {
    console.log(number)
    if (!number || number.length < 10 || number.length > 12 || !numberPattern.test(number)) {
      setError(prevState => ({
        ...prevState,
        number: "Invalid Number"
      }))
      return false
    }
    else{
      setError(prevState => ({
        ...prevState,
        number: ""
      }))
      return true
    }
  }
  const validateName = (name) => {
    if (!name || name.length < 4 || !namePattern.test(name)) {
      setError(prevState => ({
        ...prevState,
        name: "Invalid name"
      }))
      return false
    }
    else {
      setError(prevState => ({
        ...prevState,
        name: ""
      }))
      return true
    }
  }
  const validateConfirmPassword = (confirmPassword) => {
    if (!confirmPassword || confirmPassword.length<8) {
      setError(prevState => ({
        ...prevState,
        confirmPassword: "Invalid Password"
      }))
      return false
    }
    else 
    {
      setError(prevState => ({
        ...prevState,
        confirmPassword: ""
      }))
      return true
    }
  }
  const validatePassAndCPass = (confirmPassword,password) => {
    if (!confirmPassword|| confirmPassword!=password) {
      setError(prevState => ({
        ...prevState,
        confirmPassword: "Invalid Password"
      }))
      return false
    }
    else 
    {
      setError(prevState => ({
        ...prevState,
        confirmPassword: ""
      }))
      return true
    }
  }
  const validatePassAndUSer= (password,userName) => {
    if (!password || password===userName) {
      setError(prevState => ({
        ...prevState,
        password: "Cannot be same as Username"
      }))
      return false
    }
    else {
    setError(prevState => ({
      ...prevState,
      password: ""
    }))
    return true
  }
  }
  


  return {
    user,
    error,
    handleChange,
    validateEmail,
    validatePassword,
    validateName,
    validateNumber,
    validateUsername,
    validateConfirmPassword,
    validatePassAndCPass,
    validatePassAndUSer
  }

}
export default useValidate
