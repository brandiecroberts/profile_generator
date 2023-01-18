const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What is your name? Nicknames are also acceptable :) ', (answer) => {
  rl.question('What is an activity you like doing? ', (answer2) => {
    rl.question('What do you listen to while doing that? ', (answer3) => {
      rl.question('Which mean is your favourite? (eg: dinner, brunch, etc ', (answer4) => {
        rl.question('What is your favourite thing to eat for that meal? ', (answer5) => {
          rl.question('What sport is your absolute favourite? ', (answer6) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {
              console.log(`${answer} loves listening to ${answer3} while ${answer2}, devouring ${answer5} for ${answer4}, prefers ${answer6} over any other sport, and is amazing at ${answer7}.`);
            });
          });
        });
      });
    });
  });
});
