module.exports = () => ((robot, table) => {
  if(!robot) {
    console.log('Robot not placed')
    return null;
  }
  console.log(`Robot: ${robot.x}, ${robot.y}, ${robot.direction}`)
  return robot
})
