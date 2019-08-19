function Sword(color){
    this.swipes = [];
    this.swipeSizes = [];

    this.color = color;
};

Sword.prototype.update = function(){
    // fade swipe
    if(this.swipes.length > 20){
        // delete last value
        this.swipes.splice(0,1);
        this.swipes.splice(0,1);

    }
    if(this.swipes.length > 0){
        // delete last value
        this.swipes.splice(0,1);
    }
};

Sword.prototype.checkSlice = function(fruit){

    if(fruit.sliced || this.swipes.length < 2){
        return false;
    }
    var length = this.swipes.length;
    var stroke1 = this.swipes[length - 1]; // latest stroke
	var stroke2 = this.swipes[length - 2]; // second-to-latest stroke

	/* calculate distance from strokes 1 & 2 from fruit */
    var d1 = dist(stroke1.x, stroke1.y, fruit.x, fruit.y);
    var d2 = dist(stroke2.x, stroke2.y, fruit.x, fruit.y);

    /* calculate distance from stroke1 to stroke2 */
    var d3 = dist(stroke1.x, stroke1.y, stroke2.x, stroke2.y);

    // console.log((d1 < d3 && d2 < d3));
    // if(d1 < d3 && d2 < d3){
    //     return true;
    // }
    var sliced = (d1 < fruit.size) || ((d1 < d3 && d2 < d3) && (d3 < width/4));
    fruit.sliced = sliced;
    return sliced;
    
};
Sword.prototype.draw = function(points, combo){

    var l = this.swipes.length;
    for(var i=0; i< this.swipes.length; i++){
        var size = map(i, 0, this.swipes.length, 2, 20);

        noStroke();
        fill(this.color);
        // rect(this.swipes[i].x, this.swipes[i].y, size, size);
        ellipse(this.swipes[i].x, this.swipes[i].y, size);
        
    }

    if(l<1){
        return;
    }
    fill(255);
    textSize(20);
    // text(points + "+" + combo + " combo", this.swipes[l-1].x, this.swipes[l-1].y-20);

};

Sword.prototype.swipe = function(x,y){
    this.swipes.push(createVector(x, y));
}