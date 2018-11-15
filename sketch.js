var slider1;
var slider2;
var sliderWidth = 400;
var sliderGap = 80;
//var slider3;
var img11;
var img12;
var img13;
var img21;
var img22;
var img23;
var img31;
var img32;
var img33;
var cnv;
var initX = -25;

function setup() {
     cnv= createCanvas(800 , 800);
    centerCanvas();
  background(255, 0, 200);
    //createSlider(min, max, [value], [step])
    slider1 = createSlider(0,255,0,127);
    slider2 = createSlider(0,255,0);
    slider1.position(cnv.position().x+sliderWidth/2,height - 2*sliderGap);
    slider2.position(cnv.position().x+sliderWidth/2,height - sliderGap);
    slider1.style('width', sliderWidth + 'px');
    slider2.style('width', sliderWidth + 'px');
    img11 = loadImage("images/1-1.png"); 
    img12 = loadImage("images/1-2.png"); 
    img13 = loadImage("images/1-3.png"); 
    img21 = loadImage("images/2-1.png"); 
    img22 = loadImage("images/2-2.png");
    img23 = loadImage("images/2-3.png"); 
    img31 = loadImage("images/3-1.png"); 
    img32 = loadImage("images/3-2.png"); 
    img33 = loadImage("images/3-3.png"); 
}

function draw() {
    //var dir1 = floor(slider1.value()/127)*127;
    //var dir2 = floor(slider2.value()/127)*127;
    var dir1 = floor(slider1.value());
    var dir2 = floor(slider2.value());
    background(255);
    //fill(0,dir2,0);
    //rectMode(CENTER);
    //rect(width/2,height/2, 200, 200);
    fill(0);
    //text(dir1,10,20);
    //text(dir2,10,30);
    text("CHANGE IN STRUCTURE", width/2-35, height - 2*sliderGap);
    text("CHANGE IN MATERIAL", width/2-30, height - sliderGap);
    if (dir1 == 0) {
        if (dir2 < 127){
            tint(255, 255-2*dir2);
            image(img11,initX,50,455.33*2,256*2);
            tint(255, 2*dir2);
            image(img12,initX,50,455.33*2,256*2);
        } else if (dir2>= 127){
            tint(255, 512-2*dir2);
            image(img12,initX,50,455.33*2,256*2);
            tint(255, 2*dir2-255);
            image(img13,initX,50,455.33*2,256*2);
        }
    } else if (dir1 == 127) {
        if (dir2 < 127){
            tint(255, 255-2*dir2);
            image(img21,initX,50,455.33*2,256*2);
            tint(255, 2*dir2);
            image(img22,initX,50,455.33*2,256*2);
        } else if (dir2>= 127){
            tint(255, 512-2*dir2);
            image(img22,initX,50,455.33*2,256*2);
            tint(255, 2*dir2-255);
            image(img23,initX,50,455.33*2,256*2);
        }
    }else if (dir1 == 254) {
        if (dir2 < 127){
            tint(255, 255-2*dir2);
            image(img31,initX,50,455.33*2,256*2);
            tint(255, 2*dir2);
            image(img32,initX,50,455.33*2,256*2);
        } else if (dir2>= 127){
            tint(255, 512-2*dir2);
            image(img32,initX,50,455.33*2,256*2);
            tint(255, 2*dir2-255);
            image(img33,initX,50,455.33*2,256*2);
        }
    }

}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function windowResized() {
  centerCanvas();
}
