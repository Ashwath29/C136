status = "";
objects = [];

function setup() {
    canvas = createCanvas(450,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function start() {
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
document.getElementById("status").innerHTML = "status: Detecting Objects";
}

function modelLoaded() {
  console.log("Model Loaded!");
    status = true;
}

function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    else {
console.log(results);
objects = results;
    }
}

function draw() {
    image(video, 0,0,500,450);
}