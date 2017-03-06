var fs   = require('fs')
/*option1={ encoding: 'base64'};
option2={ encoding: 'utf8'};
option3={ encoding: 'hex'};*/
file = process.argv[2];
data = fs.readFileSync(file+'.mp3').toString();
var buf= new Buffer(data,'binary')
var wstream=fs.createWriteStream(file+'.hex')
wstream.write(buf.toString('hex'));
wstream2=fs.createWriteStream(file+'.b64');
wstream2.write(buf.toString('base64'));
wstream3=fs.createWriteStream(file+'.txt');
wstream3.write(buf.toString('utf8'));
/*wstream3.end();

wstream4=fs.createWriteStream(file+'.hex',option4);
wstream4.write(data);*/


//console.log(buf.toString());
