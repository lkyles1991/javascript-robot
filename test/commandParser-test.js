const commandParser = require('../src/commandParser')
const placeCommand = require('../src/commands/placeCommand')
const turnCommand = require('../src/commands/turnCommand')
const moveCommand = require('../src/commands/moveCommand')
const reportCommand = require('../src/commands/reportCommand')
const defaultCommand = require('../src/commands/defaultCommand')

describe('Command parser', () => {
  let result

  test('should return place command given the correct input', () => {
    expect(commandParser('PLACE R1,3,2,NORTH').command.toString()).toEqual(placeCommand().toString())
  })

  test('should return move command given the correct input', () => {
    expect(commandParser('MOVE R1').command.toString()).toEqual(moveCommand().toString())
  })

  test('should return turn command given the correct input', () => {
    expect(commandParser('LEFT R1').command.toString()).toEqual(turnCommand().toString())
    expect(commandParser('RIGHT R1').command.toString()).toEqual(turnCommand().toString())
    
  })

  test('should return report command given the correct input', () => {
    expect(commandParser('REPORT R1').command.toString()).toEqual(reportCommand().toString())
    
  })

  test('should return default command given the an incorrect input', () => {
    expect(commandParser('place left,bottom,north').command.toString()).toEqual(defaultCommand().toString())
    
  })
})