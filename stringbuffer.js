var stringbuffer=class {
    constructor() {
        this.buf=Buffer.from('');
    }

    appendd(stringdata) {
        var buf1=Buffer.from(stringdata)
            this.buf=Buffer.concat([this.buf,buf1]);
    return this.buf;}
tostringg(){
       return this.buf.toString()
}
}

module.exports=stringbuffer;

