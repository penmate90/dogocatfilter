function preload() {
    cat= loadImage('https://i.postimg.cc/zGRYcq07/cat-whiskers-removebg-preview.png');
    dog= loadImage('https://i.postimg.cc/B6x3P4GB/dognose-removebg-preview.png');
}

nose_x=0;
nose_y=0;
decider=0;
function c() {
    decider=1;
 }
 function d() {
     decider=0;
 }
function setup() {
    canvas=createCanvas(300,300);

    canvas.center();
    video= createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet= ml5.poseNet(video, modelload);
    poseNet.on("pose", startpose);

}

function draw() {
    image(video, 0, 0,300,300);
    if (decider==1) {
        image(cat, nose_x-50,nose_y-19 ,100,50);
    } else {
        image(dog,nose_x-65 ,nose_y-28 ,130,80); }
    
}
function download() {
   save('filtersnapshot.png');
}

function modelload() {
    console.log("posenet is on");
}

function startpose(results) {
    console.log(results);
    if (results.length >0) {
        nose_x= results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;

        console.log("nose x="+nose_x+"and nose y="+nose_y);
    }
}
