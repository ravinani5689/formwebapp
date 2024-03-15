function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const dob = document.getElementById('dob').value;
  
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.innerHTML = '';
  
    if (!name || !email || !age || !dob) {
      errorMessage.innerHTML = 'All fields are required.';
      return;
    }
  
    if (!isValidEmail(email)) {
      errorMessage.innerHTML = 'Invalid email address.';
      return;
    }
  
    if (parseInt(age) <= 0) {
      errorMessage.innerHTML = 'Invalid age. Age must be a positive integer.';
      return;
    }
  
    // If all validations pass, submit the form
    document.getElementById('userForm').submit();
  }
  
  function isValidEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  