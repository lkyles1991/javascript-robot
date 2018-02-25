const Robot = require('./Robot')
const placeCommand = require('./commands/placeCommand')
const turnCommand = require('./commands/turnCommand')
const moveCommand = require('./commands/moveCommand')
const reportCommand = require('./commands/reportCommand')
const defaultCommand = require('./commands/defaultCommand')

module.exports = (input) => {
  const placePattern = RegExp('PLACE [0-4]+,[0-4]+,(NORTH|SOUTH|EAST|WEST)')

  const commands = {
    'LEFT':     turnCommand,
    'RIGHT':    turnCommand,
    'MOVE':     moveCommand,
    'PLACE':    placeCommand,
    'REPORT':   reportCommand,
    'default':  defaultCommand,
  }

   if(input.match(placePattern)) {
     const inputSplit = input.replace(/\s/g, ',').split(',')
     return commands['PLACE'](inputSplit[1], inputSplit[2], inputSplit[3])
   }

   return (commands[`${input}`] || commands['default'])(input)
}