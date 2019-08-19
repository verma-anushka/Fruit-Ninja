
function Fruit(x,y,speed,color,size,fruit,bomb){

    this.x = x;
    this.y = y;
    this.speed = speed;
    this.color = color;
    // this.clearCol = clearColor(color); //color with no alpha
    
    this.bomb = bomb; 
    this.size = size;
    this.xSpeed = randomXSpeed(x);
    this.ySpeed = random(-10.4, -7.4);
    this.fruit = fruit;
    // this.cSansAlpha = removeAlpha(color); 
    this.sliced = false;
    this.visible = true;
}

Fruit.prototype.update = function(){

    // ySpeed = []
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    // this.xSpeed *= 0.95;
    this.ySpeed += GRAVITY;

    if(this.y > height){
        this.visible = false;
    }

};
Fruit.prototype.draw = function(){
    // noStroke();
    fill(this.color);
    if(this.sliced){

        // if(this.bomb){
        //     // Game Over
        //     gameOver();
        // }
        // if fruit is sliced, fade it out
        this.color = lerpColor(this.color, color(51), 0.5); // ??
    }else{
        
        image(this.fruit, this.x, this.y, this.size, this.size);
        // ellipse(this.x, this.y, this.size)
        // rect(this.x, this.y, this.size, this.size);
    }
    
};


function randomFruit(){
    var x = random(width);
    var y = height;
    var size = noise(frameCount)*20 + 40;

    // var red = noise(frameCount) * 255;
    // var green = noise(frameCount * 2) * 255;
    // var blue = noise(frameCount * 3) * 255;
    // var col = color(red,green,blue);

    var col = color(random(255),random(255),random(255));
    var speed = random(3,5);

    var fruit = random(fruitsImgs);
    return new Fruit(x,y,speed,col,size,fruit,bomb);
}

// function clearColor(col){
    
//     var r = red(col);
//     var g = green(col);
//     var b = blue(col);
//     return color(r, g, b, 0);
// }

function randomXSpeed(x){
    if( x > width/2 ){
        // If fruit generated on right side, go left
        return random(-2.8,-0.5);
    }else{
        // If fruit generated on right side, go left
        return random(0.5,2.8);        
    }
};


// function removeAlpha(color){
//     var red = red(color);
//     var green = green(color);
//     var blue = blue(color);

//     return (red,green,blue,0);
// }