function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value.match(validRegex)) {
  
      alert("Subscription added!");
      input.focus();
  
      return true;
  
    } else {
  
      alert("Invalid email address!");
      input.focus();
      return false;
      
  
    }
  
  }
  
  Defi