const Robot = require('../Robot')

module.exports = (xPos, yPos, direction) => ((robot, table) => {
  if(xPos <= 0 ||
    xPos > table.maxXPos ||
    yPos <= 0 ||
    yPos > table.maxYPos) {
      console.log('Can\'t place robot off table');
      return null
    }
  return new Robot(parseInt(xPos), parseInt(yPos), direction)
})