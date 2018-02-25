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
  })
  
  afterEach(() => {
    mover = null
  })

  test('should place robot', () => {
    expected = new Robot(1,2,'NORTH')
    mover.execute(commandParser('PLACE 1,2,NORTH'))
    result = mover.robot
    expect(result).toEqual(expected)
  })

  test('should place robot on limits', () => {
    expected = new Robot(0,0,'NORTH')
    mover.execute(commandParser('PLACE 0,0,NORTH'))
    result = mover.robot
    expect(result).toEqual(expected)

    expected = new Robot(4,4,'NORTH')
    mover.execute(commandParser('PLACE 4,4,NORTH'))
    result = mover.robot
    expect(result).toEqual(expected)
  })

  test('should move robot', () => {
    expected = new Robot(1,3,'NORTH')
    mover.execute(commandParser('PLACE 1,2,NORTH'))
    mover.execute(commandParser('MOVE'))
    result = mover.robot
    expect(result).toEqual(expected)
  })

  test('should not move robot off table', () => {
    expected = new Robot(1,4,'NORTH')
    mover.execute(commandParser('PLACE 1,2,NORTH'))
    mover.execute(commandParser('MOVE'))
    mover.execute(commandParser('MOVE'))
    mover.execute(commandParser('MOVE'))
    mover.execute(commandParser('MOVE'))
    result = mover.robot
    expect(result).toEqual(expected)
    expect(global.console.log).toHaveBeenCalledWith('Can\'t move robot off of the table')

    expected = new Robot(4,2,'EAST')
    mover.execute(commandParser('PLACE 0,2,EAST'))
    mover.execute(commandParser('MOVE'))
    mover.execute(commandParser('MOVE'))
    mover.execute(commandParser('MOVE'))
    mover.execute(commandParser('MOVE'))
    mover.execute(commandParser('MOVE'))
    result = mover.robot
    expect(result).toEqual(expected)
    expect(global.console.log).toHaveBeenCalledWith('Can\'t move robot off of the table')
    
  })

  test('should turn robot', () => {
    expected = new Robot(1,2,'WEST')
    mover.execute(commandParser('PLACE 1,2,NORTH'))
    mover.execute(commandParser('LEFT'))
    result = mover.robot
    expect(result).toEqual(expected)

    expected = new Robot(1,2,'EAST')
    mover.execute(commandParser('PLACE 1,2,NORTH'))
    mover.execute(commandParser('RIGHT'))
    result = mover.robot
    expect(result).toEqual(expected)
  })

  test('should report robot position on table', () => {
    mover.execute(commandParser('PLACE 1,2,NORTH'))
    mover.execute(commandParser('REPORT'))
    expect(global.console.log).toHaveBeenCalledWith('Robot: 1, 2, NORTH')
  })

  test('should return not placed response when command is run prior to robot being places', () => {
    mover.execute(commandParser('REPORT'))
    expect(global.console.log).toHaveBeenCalledWith('Robot not placed')
  })

  test('should return "incorrect command" response when command is not correct', () => {
    mover.execute(commandParser('PLACE ROBOT'))
    expect(global.console.log).toHaveBeenCalledWith('Incorrect command, please try again')

    mover.execute(commandParser('PLACE -1,6,NORTH'))
    expect(global.console.log).toHaveBeenCalledWith('Incorrect command, please try again')

    mover.execute(commandParser('PLACE -1,-1,SOUTHWEST'))
    expect(global.console.log).toHaveBeenCalledWith('Incorrect command, please try again')
  })

})