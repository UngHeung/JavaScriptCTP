const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    res = ''
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i).charCodeAt()>=97) {
            res += str.charAt(i).toUpperCase()
        } else {
            res += str.charAt(i).toLowerCase()
        }
    }
    console.log(res)
});