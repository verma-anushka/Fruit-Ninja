# FRUIT NINJA :kiwi_fruit:
**Fruit Ninja** - the most popular fruit-slicing game in the world! This game is built completely using the **p5js** JavaScript library.


## GETTING STARTED :pencil:
To start playing:
  - Clone the repository 
    - Clone or download the repository **'Fruit-Ninja'** by clicking on the Clone or Download button
    - Open the 'index.html' file and start playing!
    
    **or**

  - Visit the link: [https://verma-anushka.github.io/Fruit-Ninja/](https://verma-anushka.github.io/Fruit-Ninja/)

    **or**
  
  - You can also find **Fruit Ninja** and many more cool games at the link: 
    [https://verma-anushka.github.io/Gaming-Zone/](https://verma-anushka.github.io/Gaming-Zone/)


## HOW TO PLAY? :interrobang:
**RULE 1:** Slice fruit :kiwi_fruit: <br/>
**RULE 2:** Don't slice bombs :bomb: <br/>
**...and that is all you need to know to get started with the addictive Fruit Ninja action!!**


## TO-DO :clipboard:
- [x] Add sounds
- [x] Fix bugs
- [ ] Add modes
- [ ] Mobile friendly


## ABOUT p5js :speech_balloon:

### Basic sketch
  - This is the basic setup for a p5.js sketch- **setup()** and **draw()**. 
  - **Note:** p5.js will also require an empty HTML file that links to the p5.js library and your sketch file in the header.

    ```javascript
    function setup() {
      // setup stuff
    }
    function draw() {
      // draw stuff
    }
    ```
    
  - Alternatively, you could use the **preload()** function. 
  - If a preload() block exists it runs first, then setup() will wait until everything in there has completed before it gets run, so you can make use of things loaded in preload in setup and draw.
  
    ```javascript
    let img;
    function preload() {
      img = loadImage('img.jpg');
    }
    ```


## Game Snapshot :camera:
![Fruit Ninja](fruitNinja.png)


## REFERENCES :books:
[p5js Documentation](https://p5js.org/): A complete guide on how to use the **p5js** library.


## CONTRIBUTE :shipit:
Issues, PRs, and all your suggestions and discussions are very welcome!

