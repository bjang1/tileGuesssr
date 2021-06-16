
class Tile {
    constructor(x,y, color) {
    this.x = x;
    this.y = y;
    this.size = 63;
    this.r = 88
    this.g = 88
    this.b = 88
    this.h = 255;
    // this.color = color;

}

update(){

  
}

  show() {
//     if(){
      
//     }
    fill(this.r, this.g, this.b, this.h); 
    strokeWeight(2);
    rect(this.x, this.y, this.size, this.size );
    textSize(100);
    
}
}
