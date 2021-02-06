/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    // this.makeChains();
    this.chain = {};
  }

    showWordChain(){
      console.log(this.words);
    }

    makeChains() {
      // TODO
      // let chain = {};
      let length = this.words.length;
      for(let i=0; i<length; i++){
        //if this.words[i] already exists in the chain object, then I need to add to the arrary rather than overwriting existing value(s)
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
      console.log(this.chain)
    }

  
  
//     /** return random text from chains */
  
    makeText(numWords = 100) {
      // TODO
      //pick a starting word randomly (use the words array)
      let text = "";
      let length = this.words.length;
      console.log(`Length is: ${length}`);
      let word = this.words[0];
      let n = 0;
      

      while (text.indexOf(null) == -1){
      let i = Math.floor(Math.random()*length);
      console.log(`Random number is: ${i}`);
      let word = this.words[i];
      let selectedWordArrayLength = this.chain[word].length;
      console.log(`selectedWordArrayLength is: ${selectedWordArrayLength}`);
      let j = Math.floor(Math.random()*selectedWordArrayLength);
      console.log(`j is: ${j}`);
      console.log(`this.chain[word][j] is: ${this.chain[word][j]}`)
      let wordToAdd = this.chain[word][j]
      text = text + ' ' + wordToAdd;

      }
      console.log(text);

      // REMOVE null BEFORE CONSOLE.LOG

    }

 
}


    let mm = new MarkovMachine("the cat in the hat");
