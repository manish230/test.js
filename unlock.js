
var fs =require('fs')
var myfile=process.argv[2]
var key=process.argv[3]
var crypto=require('crypto')
var colors=require('colors')

if(key!=null)
{console.log(colors.yellow("key is appropriate"))}

fs.stat(process.cwd()+'/'+myfile,(err)=> {
    if (err) {
        console.log(err)
    }
    else {
        console.log("hello")

        decipher = crypto.createDecipher('aes192', key.toString());
        inpt = fs.createReadStream(process.cwd()+'/'+myfile);
        outt = fs.createWriteStream(process.cwd()+'/'+'input.txt');
        inpt.pipe(decipher).pipe(outt);

        inpt.on('close', () => {
            console.log("input is closed")

        fs.unlink(process.cwd()+'/'+myfile, (err) => {
            if (!err) {
                console.log(colors.blue("old file has been deleted successfully"))
                console.log("hey whatsup");
            }
        })

        })




    }

})


