/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.chain = {};
    this.makeChains();
  }

    // showWordChain(){
    //   console.log(this.words);
    // }

    makeChains() {
      let length = this.words.length;
      for(let i=0; i<length; i++){
        if(this.chain[this.words[i]]) {
          this.chain[this.words[i]].push(this.words[i+1]);
        }
        else {
          if(this.words[i+1] == undefined){
            this.chain[this.words[i]] = [null];
          }
          else{
        this.chain[this.words[i]] = [this.words[i+1]];
          }
        }
      }
      // console.log(this.chain)
    }

  
  
//     /** return random text from chains */
  
    makeText(numWords = 50) {
      // TODO
      //pick a starting word randomly (use the words array)
      let text = "";
      let length = this.words.length;
      let word = this.words[0];
      let n = 0;
      let wordsUsed = 0;

      while (text.indexOf(null) == -1 && wordsUsed <= numWords){
      let i = Math.floor(Math.random()*length);
      let word = this.words[i];
      let selectedWordArrayLength = this.chain[word].length;
      let j = Math.floor(Math.random()*selectedWordArrayLength);
      let wordToAdd = this.chain[word][j]
      text = text + ' ' + wordToAdd;
      wordsUsed++;

      }
      console.log(text.replace('null',''));

    }
 
}


    // let mm = new MarkovMachine("the cat in the hat");


    module.exports = {MarkovMachine};