const Robot = require('./Robot')
const Table = require('./Table')

module.exports = class Mover {
  constructor() {
    this.table = new Table()
    this.robot = null;
  }

  move(command){
    this.robot = command(this.robot, this.table)
  }
  
}