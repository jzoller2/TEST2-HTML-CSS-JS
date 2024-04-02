function isStrongPassword(password) {
   // TODO: Write your solution here //
  /*The password is at least 8 characters long.
     The password does not contain the string "password".
       The password contains at least one uppercase character.*/

  if password.length < 8 { return false};
  if password.indexOf("password") != -1 {return false};
  if password.indexOf("PASSWORD") != -1 {return false};
  if password.indexOf("Password") != -1 {return false};
  let Y = false;
  for (i =1 , i< password.length, i++){
      character = password.charAt(i);
        if (character == character.toUpperCase()) {
              Y=true;
          }
  }
  
}
console.log("Testing isStrongPassword()...");

console.log("Qwerty - " + isStrongPassword("Qwerty"));                  // false - Too short
console.log("passwordQwerty - " + isStrongPassword("passwordQwerty"));  // false - Contains "password"
console.log("qwerty123 - " + isStrongPassword("qwerty123"));            // false - No uppercase chars
console.log("Qwerty123 - " + isStrongPassword("Qwerty123"));            // true


// Do NOT remove the following line:
export default isStrongPassword;
