var fs = require('fs');
//var colors=require('colors')
var path=require('path')
history=fs.readFileSync(path.join(__dirname+'/../../.bash_history'));
tokens=history.toString().split("\n");
//ws=fs.createWriteStream("history.csv");
for(var i=0;i<tokens.length;i++) {
    let test = tokens[i];
    let count = 1;
    let j = 1;
    while (j <= tokens.length) {

        if (test == tokens[j]){
            count++;
            j++;
        }
        else {
            j++
        }

    }
    console.log(test,count);
}
