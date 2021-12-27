// Add your Circle class here
const pi = Math.PI
class circle{
  constructor(radius){
    this.radius = radius
  }
  get diameter(){
    let diameters = this.radius * 2;
    return diameters
  }
  get circumfrence(){
let circumferences = pi * this.diameter
return circumferences
  }get area(){

  }
}
