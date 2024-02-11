let arr = ['adda', 'rave', 'gaag', 'hello', 'dood', 'lol'];
let palin = function(arr) {
    let c = [];
    for (let i = 0; i < arr.length; i++) {
        let strarr = arr[i];
        let revstr = str.split("").reverse().join("");
        if (strarr == revstr) {
            c.push(strarr);
        }
    }
    console.log(c);
}
palin(arr);