
const validateForm = (email,password,firstName,lastName)=>{
    let formErrors = {};
    if (!email || !email.trim()) {
        formErrors.emailError = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        formErrors.emailError = 'Invalid email address format';
      }
      else if(email.trim().length > 39)
      formErrors.emailError = 'Email must be less than 40 characters';
      if (!password || !password.trim()) {
        formErrors.passwordError = 'Password is required';
      }
      else if(password.length < 6){
        formErrors.passwordError = 'Password must be more than 5 characters ';
      }
      else if(password.length > 39){
        formErrors.passwordError = 'Password must be less than 40 characters ';
      }
      if (!firstName || !firstName.trim()) {
        formErrors.firstNameError = 'First Name is required';
      }
      else if (firstName.trim().length > 39) {
        formErrors.firstNameError = 'First Name must be less than 40 characters';
      }
      if (!lastName || !lastName.trim()) {
        formErrors.lastNameError = 'Last Name is required';
      }
      else if (lastName.trim().length > 39) {
        formErrors.lastNameError = 'Last Name must be less than 40 characters';
      }
      return formErrors;
}
export default  validateForm;