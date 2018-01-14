module.exports = class Robot {
  constructor(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  turn(directionToTurn){
    let directionEnum = {
      NORTH: 1,
      EAST: 2,
      SOUTH: 3,
      WEST: 4,
      properties: {
        1: 'NORTH',
        2: 'EAST',
        3: 'SOUTH',
        4: 'WEST'
      }
    };
    const directionAsNumber = directionEnum[this.direction]
    if(directionToTurn === 'LEFT') {
        this.direction = directionAsNumber === 1 ? directionEnum.properties[4] : directionEnum.properties[directionAsNumber - 1]
    }
    else if(directionToTurn === 'RIGHT') {
      this.direction = directionAsNumber === 4 ? directionEnum.properties[1] : directionEnum.properties[directionAsNumber + 1]
    }
  }
};