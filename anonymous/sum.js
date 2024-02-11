let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
let b = function() {
let sum = 0;
for (let i = 0; i < a.length; i++) 
{
sum = sum + a[i];
}
return sum;
}
console.log(b());

