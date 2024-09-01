
function usevalidate(user) {
  console.log(user)
  const error = {}
  const emailPattern = /\S+@\S+\.\S+/;
  const userNamePattern = /^[A-Za-z0-9_@./!$^*)(#&+-]*$/;
  const namePattern = /^[a-zA-Z ]*$/;
  const numberPattern = /^\d+$/
  const passwrodPattern = /^[ A-Za-z0-9_@./#&+-]*$/;

  if (("email" in user) && (!emailPattern.test(user.email))) {
    error.email = "Invalid Email"
  }
  if ((user.password) && (user.password.length < 8)) {
    error.password = "Invalid password"
  }
  if (("name" in user) && (!user.name || user.name.length < 4 || !namePattern.test(user.name))) {
    error.name = "Invalid Name"
  }
  if (("userName" in user) && (!user.userName || user.userName.length < 4 || !userNamePattern.test(user.userName))) {
    error.userName = "Invalid Username"
  }
  if (("password" in user) && (user.userName === user.password)) {
    error.password = "Password Cannot be same as Username"
  }
  if (("password" in user) && (user.password.length < 8 || !passwrodPattern.test(user.password))) {
    error.password = "Invalid Password"
  }
  if (("confirmPassword" in user) && (user.password !== user.confirmPassword)) {
    error.confirmPassword = "Password Mismatch"
  }
  if (("confirmPassword" in user && "password" in user) && (!user.confirmPassword && !user.password)) {
    error.confirmPassword = "Invalid Password"
  }
  if (("number" in user) && (!user.number || user.number.length < 10 || user.number.length > 12 || !numberPattern.test(user.number))) {
    error.number = "Invalid Number"
  }
  return error
}

export default usevalidate