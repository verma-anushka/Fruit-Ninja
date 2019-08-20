var mode = 0;
function Mode(x,y){

    this.x = x;
    this.y = y;
    this.col = color(255,147,21);
    // this.mode = fruit;
}

Mode.prototype.display1 = function(){

    image(fruitImg, this.x, this.y, 40, 40);
    // image(veggieImg, this.x + 500, this.y, 40, 40);

};
Mode.prototype.display2 = function(){

    // image(fruitImg, this.x, this.y, 40, 40);
    image(veggieImg, this.x, this.y, 40, 40);
    
};


Mode.prototype.clicked = function(){

    var d = dist(mouseX, mouseY, this.x, this.y);

    // console.log("mouseX " + mouseX);
    // console.log("mouseY " + mouseY);
    // console.log("X " + this.x);
    // console.log("Y " + this.y);
    // console.log("dist: " + d);
    
    if(d < 50){
        console.log( "dcnbhnkjzsbvc");
        if( mouseX < 400){
            mode = 1;
            console.log("mode " + mode);
        }else{
            mode = 2;
            console.log("mode " + mode);
        }
    }
    
};

Mode.prototype.move = function(){

    // this.x = this.x + random(-1,1);
    // this.y = this.y + random(-1,1);
};