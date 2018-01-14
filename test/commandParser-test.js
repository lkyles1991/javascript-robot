const commandParser = require('../src/commandParser')
const placeCommand = require('../src/commands/placeCommand')
const turnCommand = require('../src/commands/turnCommand')
const moveCommand = require('../src/commands/moveCommand')
const reportCommand = require('../src/commands/reportCommand')
const defaultCommand = require('../src/commands/defaultCommand')

describe('Command parser', () => {
  let result

  test('should return place command given the correct input', () => {
    expect(commandParser('PLACE 3,2,NORTH').toString()).toEqual(placeCommand().toString())
  })

  test('should return move command given the correct input', () => {
    expect(commandParser('MOVE').toString()).toEqual(moveCommand().toString())
  })

  test('should return turn command given the correct input', () => {
    expect(commandParser('LEFT').toString()).toEqual(turnCommand().toString())
    expect(commandParser('RIGHT').toString()).toEqual(turnCommand().toString())
    
  })

  test('should return report command given the correct input', () => {
    expect(commandParser('REPORT').toString()).toEqual(reportCommand().toString())
    
  })

  test('should return default command given the an incorrect input', () => {
    expect(commandParser('place left,bottom,north').toString()).toEqual(defaultCommand().toString())
    
  })
})