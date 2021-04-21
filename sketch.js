var canvas,bg;
var together;
var cat, catImg1,catImg2;
var mouse,mouseImg1,mouseImg2,mouseImg3

function preload() {
    bg = loadImage("images/garden.png");
    tomImg1= loadAnimation("images/cat1.png");
    tomImg2=loadAnimation("images/cat2.png","images/cat3.png");
    tomImg3= loadAnimation("images/cat4.png");
    jerryImg1=loadAnimation("images/mouse1.png");
    jerryImg2= loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImg3=loadAnimation("images/mouse4.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    cat = createSprite(870, 600);
    cat.scale= 0.25;
    

    mouse = createSprite(200, 600);
    mouse.scale = 0.15;
    

}

function draw() {

    background(bg);

    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tomLastImage", catImg3);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage", mouseImg1);
        jerry.scale=0.15;
        jerry.changeAnimation("jerryLastImage");
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5; 
        cat.addAnimation("tomRunning", tomImg2);
        cat.changeAnimation("tomRunning");
        
        mouse.addAnimation("jerryTeasing", jerryImg2);
        mouse.frameDelay = 25;
        mouse.changeAnimation("jerryTeasing");
    }
}
