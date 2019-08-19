var sword;
var score;
var lives;
var x = 0; //for lives
var bomb;
var fruit = [];
var livesImgs = [];
var livesImgs2 = [];
var fruitsList = ['apple', 'banana', 'peach', 'strawberry', 'watermelon'];
var fruitsImgs = [];
var start = false;

var GRAVITY = 0.1;
let img;

function setup(){

    for(var i=0; i<5; i++){
        fruitsImgs[i] = loadImage('images/'+ fruitsList[i] + '.png');
    }

    for(var i=0; i<3; i++){
        livesImgs[i] = loadImage('images/x'+ (i+1) + '.png');
        // console.log(livesImgs[i]);
    }

    for(var i=0; i<3; i++){
        livesImgs2[i] = loadImage('images/xx'+ (i+1) + '.png');
        // console.log(livesImgs2[i]);
    }

    bomb = loadImage('images/boom.png');
    scoreImg = loadImage('images/score.png');
    gameOverImg = loadImage('images/game-over.png');
    logo = loadImage('images/logo.png');
    
    bg = loadImage('images/background.jpg');
    createCanvas(800,600);
    sword = new Sword(color("#FFFFFF"));
    frameRate(60);
    score = 0;
    lives = 3;
    // textAlign(CENTER);
    // fruit.push(new Fruit(random(width),height,3,"#FF00FF",random()));
}

function startScreen(){
    console.log("start")
    background(bg);
    if(mouseIsPressed){
        draw();
    }
}


function draw(){
    // if(lives === 0){
    //     clear();
    //     background(bg);
    // }
    background(bg);
    image(this.logo, 20, 20, 288, 135);

    textAlign(LEFT);
    noStroke();
    fill(255,147,21);
    // fill(rgb(253,147,21));
    // fill(#fd9315);
    textSize(50);
    text("Select your mode: ", 200, 250);
    // text("Select your mode: ")


    if(mouseIsPressed){
        start = true;
    }

    if(start){
        if(mouseIsPressed){
            sword.swipe(mouseX, mouseY);
        }
    
        // Display new fruit
        if(frameCount % 5 === 0){
            if(noise(frameCount) > 0.7){
                fruit.push(randomFruit());    
            }
        }
    
        // var combo = 0;
        var points = 0;
        for(var i=fruit.length-1; i>=0; i--){
            // console.log(fruit[i]);
            fruit[i].update();
            fruit[i].draw();
            // combo += (sword.checkSlice(fruit[i]) && points > 0) ? 1 : 0;
    
            if(!fruit[i].visible){
                if(!fruit[i].sliced){
                    lives--;
                    if(lives == 2){
                       image(this.livesImgs2[0], width - (3*30 + 30), 20, livesImgs2[0].width, livesImgs2[0].height);
                    }
                    // image(this.livesImgs2[i], width - ((lives - x)*30 + 30), 20, livesImgs2[i].width, livesImgs2[i].height);
                    x++;
                    // console.log("x " + x);
                }
                if(lives < 1){
                    gameOver();
                }
                fruit.splice(i,1);
            }else{
                points += (sword.checkSlice(fruit[i])) ? 1 : 0;
            }
        }
        if(frameCount % 2 === 0 ){
            sword.update();
        }
        sword.draw();
        score += points;
        // console.log(score);
        drawScore();
        drawLives();  
    }
    
}

function drawLives(){

    stroke(255);
    strokeWeight(3);
    fill("#FF00EE");
    image(this.livesImgs[0], width - 110, 20, livesImgs[0].width, livesImgs[0].height);
    image(this.livesImgs[1], width - 88, 20, livesImgs[1].width, livesImgs[1].height);
    image(this.livesImgs[2], width - 60, 20, livesImgs[2].width, livesImgs[2].height);
    
    if(lives <= 2 ){
        image(this.livesImgs2[0], width - 110, 20, livesImgs2[0].width, livesImgs2[0].height);
    }
    if(lives <= 1){
        image(this.livesImgs2[1], width - 88, 20, livesImgs2[1].width, livesImgs2[1].height);
    }
    if(lives === 0){
        image(this.livesImgs2[2], width - 60, 20, livesImgs2[2].width, livesImgs2[2].height);
    }
    // for(var i=fruit.length-1; i>=0; i--){
    //     if(!fruit[i].visible){
    //         if(!fruit[i].sliced){
    //             lives--;             
    //             // image(this.livesImgs2[i], width - ((lives - x)*30 + 30), 20, livesImgs2[i].width, livesImgs2[i].height);
    //             x++;
    //             console.log("x " + x);
    //         }
    //     }
    // }
    // console.log(lives);
    // for(var i = 0; i<3; i++){
    //     // console.log(livesImgs[i].size);
    //     image(this.livesImgs[i], width - ((lives - i)*30 + 30), 20, livesImgs[i].width, livesImgs[i].height);
    //     // ellipse(width - (i*20 + 20), 50, 20);
    // }
}

function drawScore(){
    image(this.scoreImg, 10, 10, 40, 40);
    textAlign(LEFT);
    noStroke();
    fill(255,147,21);
    // fill(rgb(253,147,21));
    // fill(#fd9315);
    textSize(50);
    text(score, 50, 50);
}


function gameOver(){
    noLoop();
    clear();
    background(bg);
    image(this.gameOverImg, 155, 260, 490, 85);
    // clearCanvas();
    lives = 0;
    console.log("lost");
}