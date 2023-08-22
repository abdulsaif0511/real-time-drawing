noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size (500,500);

    canvas = createCanvas(500,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modeloaded);
    poseNet.on('pose', gotPoses);

}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = leftWristX - rightWristX;
        console.log("leftWritX =" +leftWristX + "rightWristX = " +rightWristX + "difference = " + difference );
    }
}

function modeloaded(){
    console.log('PoseNet Is Initialized!');
}

function draw(){
    background('#969A97');

    document.getElementById('square_side').innerhtml = "Width And Height of aSquare willbe =" +difference+"px";
    fill('#F90093');
    stroke('#F90093');
    square(noseX, noseY, difference);
}


