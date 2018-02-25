const readline = require('readline')
const parseCommand = require('./commandParser')
const Mover = require('./Mover')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
const mover = new Mover()
const commandPrompt = () => {
  rl.question('Please enter a command \n', (input) => {
    if(input === 'EXIT') {
      console.log('Bye')
      rl.close()
    }
    const command = parseCommand(input)
    mover.execute(command)
    commandPrompt()
  })
}

commandPrompt()