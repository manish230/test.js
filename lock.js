var fs =require('fs')
var myfile=process.argv[2]
var key=process.argv[3]
var crypto=require('crypto')
var colors=require('colors')
if(key!=null)
{console.log(colors.yellow("key is appropriate"))}
fs.stat(process.cwd()+'/'+myfile,(err)=>{
    if (err){
        console.log(err)}
       else {
        console.log("hello")


        cipher = crypto.createCipher('aes192', key.toString());
        inp = fs.createReadStream(process.cwd()+'/'+myfile);
        out = fs.createWriteStream("unlock.enc");
        inp.pipe(cipher).pipe(out);

        inp.on('close', () => {
            console.log("input is closed")
        })

        fs.unlink(process.cwd()+'/'+myfile, (err) => {
            if (!err) {
                console.log(colors.red("old file has been deleted successfully"))
                console.log("whatsup")
            }


            out.on('finish', () => {
                console.log(colors.blue("all the data is written in output file "));
                fs.rename(__dirname+'/'+'unlock.enc', __dirname+'/'+'tlock.txt', (err) => {
                    if (!err) {
                        console.log(colors.green("file is locked and renamed"))
                    }
                })
            })
        })

    } });