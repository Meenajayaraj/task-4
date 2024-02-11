let arr = [1, 2, 2, 2, 4, 6, 6, 6, 7, 7, 8, 8, 8, 8, 8, 9, 10,22, 4, 4, 567, 67, 78, 78, 45, 67, 45, 45, 45, 78, 67, 56, 54];
let dup = function(arr) {
let newarr = [new Set(arr)];
console.log(newarr);
}
dup(arr);