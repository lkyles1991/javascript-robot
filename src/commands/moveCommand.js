module.exports = () => ((robot, table) => {
  
    if(!robot) {
      console.log('Robot not placed')
      return null
    }
  
    const updateRobot = (invalidMove = true, state, robotAxis) => {
      if(invalidMove) {
        console.log('Can\'t move robot off of the table')
        return robot
      }
      robot[robotAxis] = state
      return robot
    }
  
    const move = (robotAxis, tableAxisLength) => {
      let invalidMove, state
      if(robot.direction === 'NORTH' || robot.direction === 'EAST') {
        state = robot[robotAxis] + 1
        invalidMove = robot[robotAxis] + 1 > tableAxisLength 
      }
      else if(robot.direction === 'WEST' || robot.direction === 'SOUTH') {
        state = robot[robotAxis] - 1
        invalidMove = robot[robotAxis] - 1 <= tableAxisLength
      }
      return updateRobot(invalidMove, state, robotAxis)  
    }
  
    const moveInDirection = {
      NORTH: () => move('yPos', table.maxYPos),
      EAST: () => move('xPos', table.maxXPos),
      SOUTH: () => move('yPos', 0),
      WEST: () => move('xPos', 0)
    }
    return moveInDirection[robot.direction]()
  })