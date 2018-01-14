const Mover = require('../src/Mover')
const commandParser = require('../src/commandParser')
const Robot = require('../src/Robot')

describe('Command parser', () => {
  let result
  let expected
  let mover
  beforeEach(() => {
    mover = new Mover()
    global.console = {
      warn: jest.fn(),
      log: jest.fn()
    }
  });
  
  afterEach(() => {
    mover = null
  });

  test('should place robot', () => {
    expected = new Robot(1,2,'NORTH')
    mover.move(commandParser('PLACE 1,2,NORTH'));
    result = mover.robot
    expect(result).toEqual(expected)
  })

  test('should move robot', () => {
    expected = new Robot(1,3,'NORTH')
    mover.move(commandParser('PLACE 1,2,NORTH'));
    mover.move(commandParser('MOVE'))
    result = mover.robot
    expect(result).toEqual(expected)
  })

  test('should turn robot', () => {
    expected = new Robot(1,2,'WEST')
    mover.move(commandParser('PLACE 1,2,NORTH'));
    mover.move(commandParser('LEFT'))
    result = mover.robot
    expect(result).toEqual(expected)

    expected = new Robot(1,2,'EAST')
    mover.move(commandParser('PLACE 1,2,NORTH'));
    mover.move(commandParser('RIGHT'))
    result = mover.robot
    expect(result).toEqual(expected)
  })

  test('should report robot position on table', () => {
    mover.move(commandParser('PLACE 1,2,NORTH'));
    mover.move(commandParser('REPORT'))
    expect(global.console.log).toHaveBeenCalledWith('Robot: 1, 2, NORTH')
  })

  test('should return not placed response when command is run prior to robot being places', () => {
    mover.move(commandParser('REPORT'))
    expect(global.console.log).toHaveBeenCalledWith('Robot not placed')
  })

  test('should return "incorrect command" response when command is not correct', () => {
    mover.move(commandParser('PLACE ROBOT'))
    expect(global.console.log).toHaveBeenCalledWith('Incorrect command, please try again')
  })

})