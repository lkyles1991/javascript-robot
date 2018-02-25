module.exports = class Robot {
  constructor(x, y, direction) {
    this.xPos = x
    this.yPos = y
    this.direction = direction
  }

  turn(directionToTurn){
    let directionEnum = {
      NORTH: 0,
      EAST: 1,
      SOUTH: 2,
      WEST: 3,
      properties: {
        0: 'NORTH',
        1: 'EAST',
        2: 'SOUTH',
        3: 'WEST'
      }
    }
    const directionAsNumber = directionEnum[this.direction]
    if(directionToTurn === 'LEFT') {
      this.direction = directionAsNumber === 0 ? directionEnum.properties[3] : directionEnum.properties[(directionAsNumber - 1) % 4]
    }
    else if(directionToTurn === 'RIGHT') {
      this.direction = directionAsNumber === 3 ? directionEnum.properties[0] : directionEnum.properties[(directionAsNumber + 1) % 4]
    }
  }
}