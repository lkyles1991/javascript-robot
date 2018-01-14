module.exports = (directionToTurn) => ((robot, table) => {
  if(!robot) {
    console.log('Robot not placed')
    return null;
  }
  robot.turn(directionToTurn)
  return robot
})