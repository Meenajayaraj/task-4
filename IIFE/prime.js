//IIFE Function
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
(prime = function(a) {
    
for (let j = 2; j <= a-1; j++) 
{
    if (a % j == 0) {
     return false;
    }
    }
    return a > 1 ;
    })();
    console.log(a.filter(prime));