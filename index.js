
function generatePassword(length,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols) {
  
  const lowercase="abcdefghijklmnopqrstuvwxyz";
  const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers="0123456789";
  const symbolschar="!@#$%^&*()_+"; 

  let allowchar="";
  let password="";

  allowchar+=includeLowerCase ? lowercase :"";
  allowchar+=includeUpperCase ? uppercase :"";
  allowchar+=includeNumbers ? numbers : "";
  allowchar+=includeSymbols ? symbolschar : "";

 if (length<=0) {
  return `(password length must be aleast 1)`
 }
 if (allowchar.length===0) {
  return `(atleast 1 set of char should be selected )`
 }
 for (let i = 0; i < length; i++) {
  const random=Math.floor( Math.random() * allowchar.length);
  password += allowchar[random];
  
 }
     return password;
}

const lengthOFpassword =12;
const includeLowerCase=true;
const includeUpperCase=true;
const includeNumbers=true;
const includeSymbols=true;

const password = generatePassword(lengthOFpassword,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols);

console.log(`generated password ${password}`);
