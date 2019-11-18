var cnv;
var sword;
var score;
var lives;
var x = 0; //for lives
var button;
var bomb;
var fruit = [];
var livesImgs = [];
var livesImgs2 = [];
var fruitsList = ['apple', 'banana', 'peach', 'strawberry', 'watermelon', 'boom'];
var fruitsImgs = [];
var isPlay = false;
// var timer;
// var counter = 60;
// var seconds, minutes;
var timerValue = 60;
var startButton;

var GRAVITY = 0.1;
let img;

function setup(){

    for(var i=0; i<fruitsList.length; i++){
        fruitsImgs[i] = loadImage('images/'+ fruitsList[i] + '.png');
    }

    for(var i=0; i<3; i++){
        livesImgs[i] = loadImage('images/x'+ (i+1) + '.png');
    }

    for(var i=0; i<3; i++){
        livesImgs2[i] = loadImage('images/xx'+ (i+1) + '.png');
    }

    bomb = loadImage('images/boom.png');
    scoreImg = loadImage('images/score.png');
    gameOverImg = loadImage('images/game-over.png');
    logo = loadImage('images/logo.png');
    fruitImg = loadImage('images/fruitMode.png');
    bg = loadImage('images/background.jpg');
    cnv = createCanvas(800,635);
    sword = new Sword(color("#FFFFFF"));
    frameRate(60);
    score = 0;
    lives = 3;
    // timer = createP("timer");
    // setInterval(timeIt, 1000);

    // textAlign(CENTER);
    // setInterval(timeIt, 1000);
    
    //   if (timerValue == 0) {
    //     text('game over', width / 2, height / 2 + 15);
    //   }
    // fruit.push(new Fruit(random(width),height,3,"#FF00FF",random()));
}

// function resetSketch(){
//     clear();
//     background(bg);
//     game();
// }

// function timeIt() {
//     console.log("time");
//     if (timerValue > 0) {
//         console.log(timerValue);
//         timerValue--;
//         textAlign(CENTER);
//         noStroke();
//         fill(255,147,21);
//         textSize(50);
//         text(timerValue, 200, 250);
//     }
//   }

function draw(){
    // console.log("draw");
    clear();
    background(bg);

    image(this.logo, 20, 20, 288, 135);
    textAlign(LEFT);
    noStroke();
    fill(255,147,21);
    textSize(50);
    image(this.fruitImg, 390, 280, 60, 60);
    cnv.mouseClicked(check);
    
    if(isPlay){
        game();
    }
    // game();
    // if(startButton){
    //     if (timerValue >= 60) {
    //         text("0:" + timerValue, width / 2, height / 2);
    //     }
    //     if (timerValue < 60) {
    //         text('0:0' + timerValue, width / 2, height / 2);
    //     }
    // }
}

function check(){
    // console.log(mouseX);
    // console.log(mouseY);
    if(mouseX > 380 && mouseX < 450 && mouseY > 280 && mouseY < 340){
        isPlay = true;

    }
}

function game(){
    clear();
    background(bg);
    if(mouseIsPressed){
        sword.swipe(mouseX, mouseY);
    }
    
    if(frameCount % 5 === 0){
        if(noise(frameCount) > 0.69){
            fruit.push(randomFruit()); // Display new fruit
        }
    }
    var points = 0;
    for(var i=fruit.length-1; i>=0; i--){
        fruit[i].update();
        fruit[i].draw();
        if(!fruit[i].visible){

            console.log( fruit[i].visible );

            if(!fruit[i].sliced && fruit[i].name != 'boom'){
                lives--;
                if(lives == 2){
                    image(this.livesImgs2[0], width - (3*30 + 30), 20, livesImgs2[0].width, livesImgs2[0].height);
                }
                x++;
            }
            if(lives < 1 ){
                gameOver();
            }
            fruit.splice(i,1);
        }else{
            console.log( "else" );
            if(fruit[i].sliced && fruit[i].name == 'boom'){
                console.log("boom!!!");
                gameOver();
            }
            points += (sword.checkSlice(fruit[i])) ? 1 : 0;
        }
    }
    if(frameCount % 2 === 0 ){
        sword.update();
    }
    sword.draw();
    score += points;
    drawScore();
    drawLives();  
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
}

function drawScore(){
    image(this.scoreImg, 10, 10, 40, 40);
    textAlign(LEFT);
    noStroke();
    fill(255,147,21);
    textSize(50);
    text(score, 50, 50);
}

function gameOver(){
    noLoop();
    clear();
    background(bg);
    image(this.gameOverImg, 155, 260, 490, 85);
    lives = 0;
    // button = createButton("Reset");
    // button.position(450, 350);
    // button.mousePressed(resetSketch);
    console.log("lost");
}