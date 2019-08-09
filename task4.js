function reverseString(s) {
  const split = s.split("");
  const reverse = split.reverse();
  return reverse.join("");
}

function trimSpaces(s) {
  return s.trim();
}

function upperCase(s) {
  return s.toUpperCase();
}

console.log(reverseString("abc"));
console.log(trimSpaces("   abc"));
console.log(upperCase("abc"));

function combine() {
  //arrow function no arguments, no this
  return (s) => {
    for(let i = arguments.length - 1; i >= 0; i--) {
      console.log(arguments[i]);
      s = arguments[i](s);
    }
    return s;
  };
}

const updateStr = combine(upperCase, trimSpaces, reverseString);
console.log(updateStr("   abc"));
