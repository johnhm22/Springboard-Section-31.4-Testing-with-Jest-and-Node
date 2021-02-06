/** Command-line tool to generate Markov text. */

const fs = require('fs');
// const process = require('process');
const { MarkovMachine } = require('./markov');
const axios = require('axios');
const { stripHtml } = require("string-strip-html");


//read command line in node
//is it url ot file?
//add fs.readFile() add path for file to read from
//add callback that outputs error message or outputs data from read file
//console.log data that is displayed in node

// use async function and await for url

let argv = process.argv;
let type = argv[2];

async function showText(){
    if(type == "file"){
        fs.readFile(argv[3], 'utf8', function(err, data){
            if(err){
                console.log(err);
                process.exit(1);
            }
            let output =  new MarkovMachine(data);
            console.log(output.makeText());
        })
    }
    else if(type == 'url'){
        await axios.get(argv[3])
            .then(res => {
                let output = new MarkovMachine(res.data);
                console.log(output.makeText());
            })
            .catch(e => {
                console.log(`ERROR: ${e}`)
            })
    }

}


showText();
