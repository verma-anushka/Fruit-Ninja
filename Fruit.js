
function Fruit(x,y,speed,color,size,fruit,name){
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.color = color;
    this.size = size;
    this.xSpeed = randomXSpeed(x);
    this.ySpeed = random(-10.4, -7.4);
    this.fruit = fruit;
    this.name = name;
    this.sliced = false;
    this.visible = true;
}

Fruit.prototype.draw = function(){
    fill(this.color);
    if(this.sliced){
    }else{
        image(this.fruit, this.x, this.y, this.size, this.size);
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
    var fruit = fruitsImgs[idx];
    var name = fruitsList[idx];
    return new Fruit(x,y,speed,col,size,fruit,name);
}

function randomXSpeed(x){
    if( x > width/2 ){
        return random(-2.8,-0.5); // If fruit generated on right side, go left
    }else{
        return random(0.5,2.8); // If fruit generated on right side, go left  
    }
};
