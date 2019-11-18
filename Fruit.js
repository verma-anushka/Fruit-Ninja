
function Fruit(x,y,speed,color,size,fruit,bomb){
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.color = color;
    this.bomb = bomb; 
    this.size = size;
    this.xSpeed = randomXSpeed(x);
    this.ySpeed = random(-10.4, -7.4);
    this.fruit = fruit;
    this.sliced = false;
    this.visible = true;
}

Fruit.prototype.draw = function(){
    // console.log(fruitsList.length);
    fill(this.color);
    if(this.sliced){
        // if(this.bomb){
        //     gameOver();
        // }
        // this.color = lerpColor(this.color, color(51), 0.5);
    }else{
        image(this.fruit, this.x, this.y, this.size, this.size);
        // console.log(this.fruit);
        // var b = Math.round(random(99));
        // if(b % 5 === 0 ){
        //     image(this.bomb, this.x + 10, this.y - 10, this.size, this.size);
        //     // // if(this.bomb.visible){
        //     // //     console.log("visible");
        //     //     if(bomb.sliced){
        //     //         console.log("BOMB");
        //     //         gameOver();
        //     //     }
        //     // // }
        // }
        if(this.fruit === bomb){
            console.log("BOMB!!!!!!!!!")
        }
    }
};

Fruit.prototype.update = function(){

    this.x += this.xSpeed;
    this.y += this.ySpeed;
    this.ySpeed += GRAVITY;
    if(this.y > height){
        this.visible = false;
    }

};

function randomFruit(){
    var x = random(width);
    var y = height;
    var size = noise(frameCount)*20 + 40;
    var col = color(random(255),random(255),random(255));
    var speed = random(3,5);
    var idx = round(random(0,fruitsList.length-1));
    // console.log(idx);
    var fruit = random(fruitsImgs);
    return new Fruit(x,y,speed,col,size,fruit,bomb);
}

function randomXSpeed(x){
    if( x > width/2 ){
        return random(-2.8,-0.5); // If fruit generated on right side, go left
    }else{
        return random(0.5,2.8); // If fruit generated on right side, go left  
    }
};
