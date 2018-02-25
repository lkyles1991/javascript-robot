const Robot = require('./Robot')
const Table = require('./Table')

module.exports = class Mover {
  constructor() {
    this.table = new Table()
    this.robot = null
  }

  execute(command){
    this.robot = command(this.robot, this.table)
  }
}