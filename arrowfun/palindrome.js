let arr = ['adda', 'rave', 'gaag', 'hello', 'dood', 'lol'];
let palin = (str) => {
let revstr = str.split("").reverse().join("");
if (str == revstr) {
return str;
}
else 
{ 
return false;
}
}
console.log(arr.filter(palin));
