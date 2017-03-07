function obfuscate(password) {

  var passwordObfuscated = "";

  for (var i = 0; i < password.length; i++) {

    if (password.substr(i,1) === "a") {
      passwordObfuscated = passwordObfuscated + "4";
    } else if (password.substr(i,1) === "e") {
      passwordObfuscated = passwordObfuscated + "3";
    } else if (password.substr(i,1) === "o") {
      passwordObfuscated = passwordObfuscated + "0";
    } else if (password.substr(i,1) === "l") {
      passwordObfuscated = passwordObfuscated + "1";
    } else {
      passwordObfuscated = passwordObfuscated + password.substr(i,1);
    }

  }

  return passwordObfuscated;

}

var password = process.argv.slice(2);
var passwordString = password.toString();

console.log(obfuscate(passwordString));
