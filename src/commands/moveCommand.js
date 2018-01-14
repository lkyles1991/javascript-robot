module.exports = () => ((robot, table) => {
  const move = (robotAxis, tableAxisLength) => {
    if(robot.direction === 'NORTH' || robot.direction === 'EAST') {
      if(robot[robotAxis] + 1 > tableAxisLength) {
        console.log('Can\'t move robot off of the table')
        return robot
      }
      robot[robotAxis] = robot[robotAxis] + 1
      return robot
    }
    else if(robot.direction === 'WEST' || robot.direction === 'SOUTH') {
      if(robot[robotAxis] - 1 <= tableAxisLength) {
        console.log('Can\'t move robot off of the table')
        return robot
      }
      robot[robotAxis] = robot[robotAxis] - 1
      return robot
    }
  }

  if(!robot) {
    console.log('Robot not placed')
    return null;
  }
  const moveInDirection = {
    NORTH: () => move('y', table.maxYPos),
    EAST: () => move('x', table.maxXPos),
    SOUTH: () => move('y', 0),
    WEST: () => move('x', 0)
  }
  return moveInDirection[robot.direction]()
})