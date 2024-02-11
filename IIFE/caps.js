(function(str) {
let sentence = str.toLowerCase().split(" ");
    for (let i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    console.log(sentence.join(" "));
    return sentence;
    })("iam learning java script");
    
    