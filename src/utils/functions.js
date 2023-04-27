// (What we call the "scrollbox" is where you can scroll thanks to a overflow auto on the categories and shop page without overlapping the title)
// Used to get the max possible size for the categories and shop.
// It gets the full size of the page and substract the offsetTop of the scroll box from it.
// Thanks to that the scroll box will always take all the available space to be usable and without any bug visually.
//
import { utcToZonedTime, format } from "date-fns-tz";

export function maxSize(scrollBoxRef) {
  scrollBoxRef.style.height =
    window.innerHeight - scrollBoxRef.offsetTop + "px";
}

export function getTime() {
  const date = new Date();
  const zonedDate = utcToZonedTime(date, "Europe/Paris");
  const output = format(zonedDate, "HH:mm - dd/MM/yyyy", {
    timeZone: "Europe/Paris",
  });

  return output;
}

export function checkInputs(password, confirmPasswordRef, email, firstName, lastName) {
  const errorsObj = {};

  // First we check if inputs are empty
  if (email === "") errorsObj["email"] = "Please enter an email";

  if (firstName === "")
    errorsObj["firstname"] = "Please enter your first name";

  if (lastName === "") errorsObj["lastname"] = "Please enter your last name";

  if (password === "") {
    errorsObj["password"] = "Please enter a password.";
  } else {
    // If password is not empty we check if it's a valid password

    // We check if there's at least 1 lower case
    if (!password.match(/[a-z]/gm)) {
      // if the key "password" doesn't exist yet we create it
      if (!errorsObj["password"]) errorsObj["password"] = {};

      // If there's an error we create a new key-value pair inside password
      errorsObj["password"]["lowercase"] = "Your password must include at least 1 lower-case letter.";
    }

    // We check if there's at least 1 upper case
    if (!password.match(/[A-Z]/gm)) {
      if (!errorsObj["password"]) errorsObj["password"] = {};
      errorsObj["password"]["uppercase"] = "Your password must include at least 1 upper-case letter.";
    }

    // We check if there's at least 1 number
    if (!password.match(/[0-9]/gm)) {
      if (!errorsObj["password"]) errorsObj["password"] = {};
      errorsObj["password"]["number"] = "Your password must include at least 1 number.";
    }

    // We check if there's at least 1 special character (!#%)
    if (!password.match(/[!#%]/gm)) {
      if (!errorsObj["password"]) errorsObj["password"] = {};
      errorsObj["password"]["specialChar"] = "Your password must include at least 1 special character (only the following special characters are allowed: !#%).";
    }
  }

  // We check if both passwords are the same
  if (password !== confirmPasswordRef.current.value) {
    if (!errorsObj["password"]) errorsObj["password"] = {};
    errorsObj["password"]["match"] = "The passwords doesn't match";
  }
  
    

  if (password.length < 8) errorsObj["password"]["characters"] = "Your password must be at least 8 characters long"

  return errorsObj;
}