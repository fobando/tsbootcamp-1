export class HelloWorld {
    word : string
    constructor(){
        this.word = "Belize Bank Tscript bootCamp";
    }
    sayIt = function() {
        console.log(this.word);
    }
}
