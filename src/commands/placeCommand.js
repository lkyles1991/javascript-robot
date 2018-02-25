const Robot = require('../Robot')

module.exports = (xPos, yPos, direction) => ((robot, table) =>
  new Robot(parseInt(xPos), parseInt(yPos), direction)
)