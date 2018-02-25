const Robot = require('../Robot')

module.exports = (xPos, yPos, direction) => ((robot, table, otherRobot) => {
  let newRobot = new Robot(parseInt(xPos), parseInt(yPos), direction)

  if(otherRobot && otherRobot.xPos === newRobot.xPos && otherRobot.yPos === newRobot.yPos) {
    console.log('Can\'t place robot in same place as another')  
    return null  
  }
  
  return newRobot
})