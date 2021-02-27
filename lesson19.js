var setup=function(){
    createCanvas(1600, 800);
background(200);
//noLoop();
};

var draw=function(){
for (let outerIndex = 0; outerIndex < 100; outerIndex++) {
    for (let index = 0; index < 100; index++) {
        fill(random(20), random(80), random(60))
rect(index*140, outerIndex*140, 200)};
    }

}