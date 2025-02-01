// @ts-ignore
function greaterpart(num) {
  if (isNaN(num) || num === Infinity || num <= 0) return;

  const partedNum = num.toString().split(".");

  if (partedNum.length === 1) {
    console.log(partedNum[0]);
    return;
  }

  const greaterNum =
    +partedNum[0] > +partedNum[1] ? +partedNum[0] : +partedNum[1];
  console.log(greaterNum);
  return;
}

// greaterpart(32.045);
// greaterpart(301.71);
// greaterpart(100);

greaterpart(0.1);
greaterpart(0);

// function binarySum(str) {
//   let binaryStr = "";
//   for (let iStr = 0; iStr < str.length; iStr++) {
//     const charCode = str.charCodeAt(iStr);
//     const binaryChar = charCode.toString(2).padStart(8, "0");
//     binaryStr += binaryChar;
//   }

//   return binaryStr.replace(/0/g, "").length;
// }

// function hasNum(str: string) {
//   const numRegex = /[0-9]/;
//   return numRegex.test(str);
// }
// function hasLowercase(str: string) {
//   const lowercaseRegex = /[a-z]/;
//   return lowercaseRegex.test(str);
// }
// function hasUppercase(str: string) {
//   const uppercaseRegex = /[A-Z]/;
//   return uppercaseRegex.test(str);
// }
// function hasSpecialSymbol(str: string) {
//   const specialSymbolRegex = /[^a-zA-Z0-9\s]/;
//   return specialSymbolRegex.test(str);
// }
// function hasSatisfiedLength(str: string) {
//   const leastLength = 8;
//   const maxLength = 50;

//   if (str.length < leastLength || str.length > maxLength) {
//     return false;
//   }
//   return true;
// }

// function obfuscatepwd(str: string) {
//   if (typeof str !== "string") {
//     console.log("invalid");
//   }

//   if (
//     !hasNum(str) ||
//     !hasLowercase(str) ||
//     !hasUppercase(str) ||
//     !hasSpecialSymbol(str) ||
//     !hasSatisfiedLength(str)
//   ) {
//     console.log("invalid");
//     return;
//   }

//   console.log(binarySum(str));
// }

// obfuscatepwd("aB1@aaaaaa");
// obfuscatepwd("password");
// obfuscatepwd("1234@abcABC");
// obfuscatepwd("A1.aaaa");
// obfuscatepwd("A1.aaaaa");
// obfuscatepwd("A1.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
// obfuscatepwd("A1.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

// console.log(typeof "😃");
