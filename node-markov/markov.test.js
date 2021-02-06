const{MarkovMachine} = require('./markov');

test('falsy and not truthy', function(){
    let mm =  new MarkovMachine ("the cat in the hat");
    expect(mm.makeText()).toBeFalsy();
    let mm2 =  new MarkovMachine ("I would not like them Here or there.");
    expect(mm2.makeText()).not.toBeTruthy();
});

