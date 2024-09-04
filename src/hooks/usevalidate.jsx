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
    console.log("validate-email",email)
    if ((!emailPattern.test(email))) {
      setError(prevState => ({
        ...prevState,
        email: "Invalid Error"
      }));
      return false
    }
    else
      return true
  };
  const validatePassword =(password) =>{
    if((!user.password) && (user.password.length < 8)){
      setError(prevState =>({
          ...prevState,
          password:"Invalid Password"
      }))
    }
  }
  return {
    user,
    error,
    handleChange,
    validateEmail,
    validatePassword
  }

}
export default useValidate

// if (("email" in user) && (!emailPattern.test(user.email))) {
//   error.email = "Invalid Email"
// }
// if (("password" in user) && ((!user.password) && (user.password.length < 8))) {
//   error.password = "Invalid password"
// }
// if (("name" in user) && (!user.name || user.name.length < 4 || !namePattern.test(user.name))) {
//   error.name = "Invalid Name"
// }
// if (("userName" in user) && (!user.userName || user.userName.length < 4 || !userNamePattern.test(user.userName))) {
//   error.userName = "Invalid Username"
// }
// if (("password" in user) && (user.userName === user.password)) {
//   error.password = "Password Cannot be same as Username"
// }
// if (("password" in user) && (user.password.length < 8 || !passwrodPattern.test(user.password))) {
//   error.password = "Invalid Password"
// }
// if (("confirmPassword" in user) && (user.password !== user.confirmPassword)) {
//   error.confirmPassword = "Password Mismatch"
// }
// if (("confirmPassword" in user && "password" in user) && (!user.confirmPassword && !user.password)) {
//   error.confirmPassword = "Invalid Password"
// }
// if (("number" in user) && (!user.number || user.number.length < 10 || user.number.length > 12 || !numberPattern.test(user.number))) {
//   error.number = "Invalid Number"
// }

// return error