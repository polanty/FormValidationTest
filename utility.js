// Utility function to check if a date is in the past or today
export const isDateInPastOrToday = (dateString) => {
  // Convert input string to a Date object
  const inputDate = new Date(dateString);

  // Get today's date (without time)
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Normalize to midnight

  // Compare dates
  return inputDate <= today;
};

//Regular expression for validating  Each Input field
//Provided by stackoverflow.com
export const isEmailValid = (email) => {
  const re = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return re.test(String(email).toLowerCase());
};

export const isPhoneValid = (phone) => {
  const trimmed = phone.trim();

  // Remove all non-digits to check length boundaries
  const digitsOnly = trimmed.replace(/\D/g, "");
  if (digitsOnly.length < 10 || digitsOnly.length > 14) return false;

  // Improved regex: supports parentheses, spaces, dashes, dots, and leading +
  const phoneRegex =
    /^\+?\d{0,3}?[\s.-]?\(?\d{2,4}\)?[\s.-]?\d{3,4}[\s.-]?\d{3,4}$/;

  return phoneRegex.test(trimmed);
};

export const isNameValid = (name) => {
  const re = /^[A-Za-z\s'-]+$/;
  return re.test(String(name));
};

// End of Regex for validating Each Input field
