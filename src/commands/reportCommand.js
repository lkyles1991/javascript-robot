module.exports = () => ((robot, table) => {
  if(!robot) {
    console.log('Robot not placed')
    return null
  }
  console.log(`Robot: ${robot.xPos}, ${robot.yPos}, ${robot.direction}`)
  return robot
})
