const { exec } = require('child_process');

var child_process = require('child_process');
const { rawListeners } = require('process');


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('Launch DDOS Tool?', async(name) => {
            if (name === 'Y') {
                  require('child_process').exec('start cmd /c script.bat')
            } else if (name === 'N') {
                  process.exit(console.log('You have closed the launcher.'))
            } else {
                  console.log('Unknown command. "Y" - Yes. "N" - No.')
                  process.exit()
            }
      });