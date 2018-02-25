const Robot = require('./Robot')
const placeCommand = require('./commands/placeCommand')
const turnCommand = require('./commands/turnCommand')
const moveCommand = require('./commands/moveCommand')
const reportCommand = require('./commands/reportCommand')
const defaultCommand = require('./commands/defaultCommand')

module.exports = (input) => {
  const placePattern = RegExp('PLACE (R1|R2)+,[0-4]+,[0-4]+,(NORTH|SOUTH|EAST|WEST)')
  const robotInstPattern = RegExp('[^\s]+ (R1|R2)')

  const commands = {
    'LEFT':     turnCommand,
    'RIGHT':    turnCommand,
    'MOVE':     moveCommand,
    'PLACE':    placeCommand,
    'REPORT':   reportCommand,
    'default':  defaultCommand,
  }
  const inputSplit = input.replace(/\s/g, ',').split(',')
  
  if(input.match(placePattern)) {
    return {
      theRobot: inputSplit[1],
      command: commands['PLACE'](inputSplit[2], inputSplit[3], inputSplit[4])
    }
  }
   
  if(input.match(robotInstPattern)) {
    return {
      theRobot: inputSplit[1],
      command: (commands[`${inputSplit[0]}`] || commands['default'])(inputSplit[0])
    }
  }
  else {
    return {
      theRobot: 'R1',
      command: commands['default']()}
  }
   
}