//please update everytime you change the code
lstUpdate = 2021-06-15
// // // // // // // // // // // // // // // // // //

fr = 60




//ctr+f "timer" to find how timer functions work
let oTime = 80
let timer = 80;
// //

//ctr+f "round to see how the round ++ functions work"
let round = 1
// //

//Car multi set/game1 //
let cars = [];
let carr;
//slect 1 means the user selected the "1" game (cars)
let select1;
// //

//media //
//images
let win1;
let win2;
let backdrop;
let backdrop1;
let bacc;
let road;
let img1;
let lav
//music
let muzac;
// //



//scene manage
let sNum = 0;
let game1 = false;
let htp = false;
let endscrn= false
let endscrn2=false
let crc = false
// //

//random image selectors
let rndLogo = [];
let number = 10
//Tells comp how many pictures in array
let nCtrl = 17//should be 17 for game 1
let aN = 0
// //

//tile control
var NUM_COLS = 4;
var NUM_ROWS = 4;
var tiles = [];
let drawTiles;
let tNum;
//ctr+f "mul" to find how tiles disapear
let mul = 0
//to corelate time to tiles
var add = function(num1, num2) {
    return num1 + num2;
  };
// //



//useless... for now
let rNum;
// //

//misc
let output = "";





//button to start game 1
//mouseX >= 25 && mouseX <= 115 && mouseY >= 210 && mouseY <= 240)
let mX1 = 25;
let mX2 = 115;
let mY1 = 210;
let mY2 = 240;

//button for help
let mX1a = 230;
let mX2a = 340;
let mY1a = 2;
let mY2a = 26;

var sel = [
  {
    disc: "Do you know you car logos? All companies are in north america",
    Play: "Play",
  },
  { disc: "Coming soon! Contact cityGames to suggest a topic!", Play: "Soon" },
  { disc: "Coming soon! Contact cityGames to suggest a topic!", Play: "Soon" },
];

function preload() {
  soundFormats("mp3", "ogg");
  muzac = loadSound("9-Elevator-Music-Royalty-Free.mp3");
}

function setup() {
  createCanvas(400, 400);
   // muzac.play();
  number = floor(random(1, nCtrl));
  print(number);
  //image
  carr = loadImage("image- help- carr.gif");
  road = loadImage("image-help-road.jpg");
  backdrop = loadImage("image-help-back.jpg");
  backdrop1 = loadImage("image-help-trans.png");
  select1 = loadImage("image-help-cars.png");
  img1 = loadImage("image-help-soon.jpg");
  bac = loadImage("image- help- bac.jpg");
  win1 = loadImage("image- help- win1.gif")
  win2 = loadImage("image- help -win2.gif")
  lav = loadImage("image- help- lava.jpg")
  // rNum = floor(random(1, 4));
  // console.log(rNum);
  //TWO RND NUMBER HAVE TO FIX
  for (var i = 0; i < NUM_COLS; i++) {
    for (var j = 0; j < NUM_ROWS; j++) {
      tiles.push(new Tile(i * 63 + 75, j * 63 + 80));
    }
  }

  //arrays of possible pictures
  cars.push(loadImage("image- cars- audi.jpg"));
  cars.push(loadImage("image- cars- ford.jpg"));
  cars.push(loadImage("image- cars- honda.jpg"));
  cars.push(loadImage("image- cars- hyundai.jpg"));
  cars.push(loadImage("image- cars- lexus.jpg"));
  cars.push(loadImage("image- cars- mercedes.jpg"));
  cars.push(loadImage("image- cars- subaru.jpg"));
  cars.push(loadImage("image- cars- volkswagon.jpg"));
  cars.push(loadImage("image- cars- chevy.jpg"));
  cars.push(loadImage("image- cars- toyota.jpg"));
  cars.push(loadImage("image- cars- bmw.jpg"));
  cars.push(loadImage("image- cars- cadilac.jfif"));
  cars.push(loadImage("image- cars- mitsubishi.jfif"));
  cars.push(loadImage("image- cars- mazda.png"));
  cars.push(loadImage("image- cars- mini.jpg"));
  cars.push(loadImage("image- cars- lincoln.png"));
  cars.push(loadImage("image- cars- acura.jpg"));
  cars.push(loadImage("image- cars- buick.jpg"));
  // cars.push(loadImage("image- cars- tesla.png"));
  // cars.push(loadImage("image- cars- ram.jpg"));
  // cars.push(loadImage("image- cars- infini.png"));
   // for (let i = 0; i < 10; i++) {
     rndLogo = (new Logos());
//  }
}

drawTiles = function () {
  for (let i in tiles) {
    tiles[i].show();
  }
};

//FOR KEYSnlk
var keyPressed = function () {
  if (key.code !== 8 && key.code !== 65535) {
    output += key.toString();
  }
  if (keyCode === BACKSPACE) {
    output = output.slice(0, output.length - 10);
  }
};

//MAIN PAGE

function draw() {
  if (sNum == 0) {
     frameRate(fr); // Attempt to refresh at starting
    background(220);
    background(backdrop);
    background(backdrop1);
    textSize(40);
    fill(255, 255, 255);
    rect(5, 0, 220, 60);
    fill(0, 0, 0);
    text("TileGuessr!", 10, 50);
    //selectors
    for (let n = 0; n < sel.length; n++) {
      fill(255, 255, 255);
      rect(20 + n * 120, 80, 100, 170);
      textSize(8);
      fill(0, 0, 0);
      text(sel[n].disc, 25 + n * 120, 170, 80);
      fill(255, 255, 255);
      rect(25 + n * 120, 210, 90, 30);
      textSize(27);
      fill(0, 0, 0);
      text(sel[n].Play, 40 + n * 120, 213, 80);
    }
    image(select1, 22, 80, 97, 80);
    image(img1, 142, 80, 97, 80);
    image(img1, 262, 80, 97, 80);
    // print(mouseX+"x")
    // print(mouseY+"y")

    //how to play
  }

  //back to home

  //selector, changing scenes
  mouseClicked = function () {
    if (mouseX >= 5 && mouseX <= 222 && mouseY >= 0 && mouseY <= 55) {
      sNum = 0;
      game1 = false;
      htp = false;
    }
    if (mouseX >= mX1 && mouseX <= mX2 && mouseY >= mY1 && mouseY <= mY2) {
      sNum = 1;
      game1 = true;
    }

    //how to play
    if (
      mouseX >= mX1a &&
      mouseX <= mX2a &&
      mouseY >= mY1a &&
      mouseY <= mY2a &&
      !htp
    ) {
      sNum = 10;
      htp = true;
    }
    //TEMP
    print(sNum);
  };

  // print(mouseX+"x")
  // print(mouseY +"Y")
  fill(255, 255, 255, 100);
  rect(230, 5, 110, 27);
  rect(230, 35, 110, 25);
  fill(0, 0, 0);
  textSize(20);
  text("How to play", 230, 29);

  //BREAKING IF GAME START
  if (game1) {
    mX1 = 0;
    mX2 = 0;
    mY1 = 0;
    mY2 = 0;
  } else if (!game1) {
    let mX1 = 25;
    let mX2 = 115;
    let mY1 = 210;
    let mY2 = 240;
  }

  if (htp) {
    mX1a = 0;
    mX2a = 0;
    mY1a = 0;
    mY2a = 0;
  } else if (!htp) {
    let mX1a = 230;
    let mX2a = 340;
    let mY1a = 2;
    let mY2a = 26;
  }

  //open car logos scene
  if (sNum == 1) {
    //timer
    if (frameCount % 60 == 0 && timer > 0) {
      timer--;
    }
if(timer == 2){
  endscrn2 = true
}
    rect(25, 210, 90, 30);
    background(road);
    background(backdrop1);
    textSize(40);
    fill(88, 88, 88);
    rect(5, 0, 220, 60);
    fill(255, 255, 255);
    text("TileGuessr!", 10, 50);
    fill(255, 255, 255);
    rect(75, 80, 250, 250);
    fill(28, 28, 28);
    //get random logo and display
    rndLogo.show();

    fill(88, 88, 88, 30);
    rect(75, 340, 250, 30);
    gStart = true;
    drawTiles();

    //keyfunc
    textSize(20);
    fill(255, 255, 255);
    if (game1) {
      if (millis() % 1000 < 500) {
        text(output, 100, 360);
      } else {
        text(output + "|", 100, 360);
      }
      fill(88, 88, 88, 100);
      rect(230, 5, 110, 27);
      rect(230, 35, 110, 25);
      textSize(20);
      fill(255, 255, 255);

      text("TIME: " + timer, 235, 29);
      text("PIC: " + round +"/10",  235, 58);
    }
//TO CORELATE TILES TO TIME..  Allows us to call once
    
    if (timer == oTime-mul) {
      mul = add(mul, 1)
      tNum = floor(random(1,16));
      tiles[tNum].update();
      tiles[tNum].h = 0;
      tNum++
      
    }
    print(mul+"mul")



    
    if (game1) {
      print(number);
    }
    //CHECK LOGO
    //audi
    if (number == 0 && output == "audi") {
      print("yep");
      number = floor(random(0,nCtrl));
      drawTiles();
      rndLogo.update()
      rndLogo.show();
      round++;
      output = ""
      for (var i = 0; i <tiles.length; i++) {
      tiles[i].h = 255;
     tiles[i].update();
      }
    }
    

    //ford
    if (number == 1 && output == "ford") {
      print("yep");
      drawTiles();
      number = floor(random(0, nCtrl));
      rndLogo.update()
      rndLogo.show();
      round++;
      output = ""
            for (var j = 0; j <tiles.length; j++) {
      tiles[j].h = 255;
     tiles[j].update();
      }
    }
    
    //honda
    if (number == 2 && output == "honda") {
      print("yep");
      number = floor(random(0, nCtrl));
      rndLogo.update()
      drawTiles();
      rndLogo.show();
      round++;
      output = ""
                  for (var b = 0; b <tiles.length; b++) {
      tiles[b].h = 255;
     tiles[b].update();
      }
    }
    //hyundai
    if (number == 3 && output == "hyundai") {
      print("yep");
      number = floor(random(0, nCtrl));
      rndLogo.update()
      drawTiles();
      rndLogo.show();
      round++;
      output = ""
                  for (var a = 0; a <tiles.length; a++) {
      tiles[a].h = 255;
     tiles[a].update();
      }
    }
    //lexus
    if (number == 4 && output == "lexus") {
      print("yep");
      number = floor(random(0, nCtrl));
      rndLogo.update()
      drawTiles();
      round++;
      rndLogo.show();
      output = ""
                  for (var n = 0; n <tiles.length; n++) {
      tiles[n].h = 255;
     tiles[n].update();
      }
    }
    //mercedes
    if (number == 5 && output == "mercedes") {
      print("yep");
      number = floor(random(0, nCtrl));
      rndLogo.update()
      drawTiles();
      round++;
      rndLogo.show();
      output = ""
                  for (var o = 0; o <tiles.length; o++) {
      tiles[o].h = 255;
     tiles[o].update();
      }
    }
    if (number == 6 && output == "subaru") {
      print("yep");
      number = floor(random(0, nCtrl));
      rndLogo.update()
      drawTiles();
      round++;
      rndLogo.show();
      output = ""
                  for (var t = 0; t <tiles.length; t++) {
      tiles[t].h = 255;
     tiles[t].update();
      }
    }
    if (number == 7 && output == "volkswagon") {
      print("yep");
      number = floor(random(0, nCtrl));
      rndLogo.update()
      drawTiles();
      round++;
      rndLogo.show();
      output = ""
      for (var u = 0; u <tiles.length;u++) {
      tiles[u].h = 255;
     tiles[u].update();
      }
    }
    if (number == 8 && output == "chevrolet") {
      print("yep");
      number = floor(random(0, nCtrl));
      rndLogo.update()
      drawTiles();
      rndLogo.show();
      round++;
      output = ""
            for (var l = 0; l <tiles.length;l++) {
      tiles[l].h = 255;
     tiles[l].update();
      }
    }
    if (number == 9 && output == "toyota") {
      print("yep");
      number = floor(random(0, nCtrl));
       drawTiles();
      rndLogo.update()
      rndLogo.show();
      round++;
      output = ""
            for (var k = 0; k <tiles.length;k++) {
      tiles[k].h = 255;
     tiles[k].update();
      }
    }
        if (number == 10 && output == "bmw") {
      print("yep");
      number = floor(random(0, nCtrl));
      rndLogo.update()
      drawTiles();
      rndLogo.show();
      round++;
      output = ""
                for (var z = 0; z <tiles.length;z++) {
      tiles[z].h = 255;
     tiles[z].update();
      }
    }
            if (number == 11 && output == "cadilac"){
      print("yep");
      number = floor(random(0, nCtrl));
      rndLogo.update()
      drawTiles();
      rndLogo.show();
      round++;
                    for (var r = 0; r <tiles.length;r++) {
      tiles[r].h = 255;
     tiles[r].update();
      }
      output = ""
    }

   if (number == 12 && output == "mitsubishi"){
      print("yep");
      number = floor(random(0, nCtrl));
      rndLogo.update()
      drawTiles();
      rndLogo.show();
      round++;
      output = ""
           for (var f = 0; f <tiles.length;f++) {
      tiles[f].h = 255;
     tiles[f].update();
      }
    }

if (number == 13 && output == "mazda"){
      print("yep");
      number = floor(random(0, nCtrl));
      rndLogo.update()
      drawTiles();
      rndLogo.show();
      round++;
      output = ""
        for (var g = 0; g <tiles.length;g++) {
      tiles[g].h = 255;
     tiles[g].update();
      }
    }
if (number == 14 && output == "mini"){
      print("yep");
      number = floor(random(0, nCtrl));
      rndLogo.update()
      drawTiles();
      rndLogo.show();
      round++;
        for (var h = 0; h <tiles.length;h++) {
      tiles[h].h = 255;
     tiles[h].update();
      }
      output = ""
    }

    if (number == 15 && output == "lincoln"){
      print("yep");
      number = floor(random(0, nCtrl));
      rndLogo.update()
      drawTiles();
      rndLogo.show();
      round++;
            for (var w = 0; w <tiles.length;w++) {
      tiles[w].h = 255;
     tiles[w].update();
      }
      output = ""
    }
    
    if (number == 16 && output == "acura"){
      print("yep");
      number = floor(random(0, nCtrl));
      rndLogo.update()
      drawTiles();
      rndLogo.show();
      round++;
            for (var v = 0; v <tiles.length;v++) {
      tiles[v].h = 255;
     tiles[v].update();
      }
      output = ""
    }
if (number == 17 && output == "buick"){
      print("yep");
      number = floor(random(0, nCtrl));
      rndLogo.update()
      drawTiles();
      rndLogo.show();
      round++;
        for (var m = 0; m <tiles.length;m++) {
      tiles[m].h = 255;
     tiles[m].update();
      }
      output = ""
    }
      
//       if (number == 18 && output == "tesla"){
//       print("yep");
//       number = floor(random(1, nCtrl));
//       rndLogo.update()
//       drawTiles();
//       rndLogo.show();
//       round++;
//       output = ""
//     }
// if (number == 19  && output == "ram"){
//       print("yep");
//       number = floor(random(1, 20));
//       rndLogo.update()
//       drawTiles();
//       rndLogo.show();
//       round++;
//       output = ""
//     }
// if (number == nCtrl && output == "infiniti"){
//       print("yep");
//       number = floor(random(1, nCtrl));
//       rndLogo.update()
//       drawTiles();
//       rndLogo.show();
//       round++;
//       output = ""
//     }



  
  }
  
  
  //win screen
  if(round == 10){
    loop()
     angleMode(DEGREES); 
  background(220);
      background(220);
    background(carr);
    textSize(40);
    fill(88, 88, 88, 88);
    rect(150, 200, 110, 60);
   
    fill(88, 88, 88, 88);
    rect(5, 0, 220, 60);
  rect(100, 120, 220, 50)
    fill(29,123,181);
    text("TileGuessr!", 10, 50);
    text("WINNER!",110,160)
    fill(88, 88, 88, 88);
  //   push()
  //   rotate(-18)
  //   image(win1,120,350,150,100)
  //   pop()    
  //   push()
  //   rotate(13)
  // image(win2,80,250,180,100)
  //   pop()
    textSize(23);
   // fill(167,168,167);

   endscrn = true

    
  }
if(endscrn){
      noLoop()
      fill(29,123,181)
  textSize(16)
    text("10 Pictures in:", 150, 220);
  text(oTime-timer + " seconds", 152, 240);
}
  //help scrn
  
  if (sNum == 10) {
    loop()
    background(220);
    background(bac);
    textSize(40);
    fill(255, 255, 255, 100);
    rect(230, 5, 110, 27);
    rect(230, 35, 110, 25);
    fill(255, 255, 255, 88);
    rect(5, 0, 220, 60);
    fill(0, 0, 0);
    text("TileGuessr!", 10, 50);
    fill(255, 255, 255, 88);
    rect(50, 100, 300, 250);
    textSize(23);
    fill(0, 0, 0);
    text("Bing J", 230, 30);
    textSize(9)
    text("Last update:" + lstUpdate,235,55)
    textSize(18);
    text(
      "Pick a game and wait for the tiles to slowly disapear (one will disapear every 2 seconds). Once you have identified the image; type its name. Do not press enter, computer will automatically change images if correct.", 64,130,280
    );
    fill(209,20,48)
        text("[NO CAPITALS OR SYMBOLS]",64,285,300
    );
    
    textSize(10);
    fill(0, 0, 0);
    text("PS: To get back to the homescreen, click the 'TilGuessr' square",64,308,300
    );

    //ps to get back click on tileguessr

  }
  //DEATH U LOSE
if(endscrn2){
  angleMode(DEGREES); 
  background(220);
      background(220);
    background(lav);
    textSize(40);
    fill(251,188,4, 88);
    rect(150, 200, 110, 80);
   
    fill(251,188,4, 88);
    rect(5, 0, 220, 60);
  rect(100, 120, 220, 60);
    fill(0, 0, 0);
    text("TileGuessr!", 10, 50);
    text("LOST :(",110,160)
    fill(251,188,4, 88);
    push()
  //   rotate(-18)
  //   image(win1,120,350,150,100)
  //   pop()    
  //   push()
  //   rotate(13)
  // image(win2,80,250,180,100)
  //   pop()

    textSize(23);
    fill(0,0,0);
  textSize(16)
    text("Its ok, try again.", 150, 220);
    text("You guessed " +round+ "/10 images", 152, 240,110);

    textSize(9)
}
  
}

//
