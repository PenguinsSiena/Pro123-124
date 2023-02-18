function setup() {
    video = createCapture(VIDEO);
    video.size(400, 350);
    video.position(250, 270);

    canvas = createCanvas(400, 400);
    canvas.position(765, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("modal Loaded!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}
