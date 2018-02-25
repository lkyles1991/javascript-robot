const Robot = require('./Robot')
const Table = require('./Table')

module.exports = class Mover {
  constructor() {
    this.table = new Table()
    this.robot1 = null
    this.robot2 = null
  }

  execute({command, theRobot}){
    if(theRobot === 'R1') {
      this.robot1 = command(this.robot1, this.table, this.robot2)      
    }
    else if(theRobot === 'R2') {
      this.robot2 = command(this.robot2, this.table, this.robot1)
    }
    else {
      console.log('No robot selected. Please select R1 or R2')
    }
  }
}