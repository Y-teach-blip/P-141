right_wristX = "";
left_wristY = "";
right_wrist_score = "";
gameStatus = "";

function setup()
{
  canvas = createCanvas(700,600);
  canvas.parent("canvas");
  video = createCapture(VIDEO);
  video.size(700,600);
  video.hide();
  poseNet = ml5.poseNet('video', modelLoaded);
  poseNet.on('pose' , gotPoses);
}

function draw()
{
 background(0); 
 image(video,0,0,700,600);
 
 fill("black");
 stroke("black");
 rect(680,0,20,700);

 fill("black");
 stroke("black");
 rect(0,0,20,700);
}

function modelLoaded()
{
    console.log("Model Loaded!");
}

function gotPoses(results)
{
  if(results.length)
  {
    console.log(results);
    right_wristX = results[0].pose.right_wrist.x;
    left_wristY = results[0].pose.left_wrist.y;
    right_wrist_score = results[0].pose.keypoints[10].score;
    console.log("right_wristX " + right_wristX + "left_wristY " + left_wristY);
  }
}

function startGame()
{
  gameStatus = "start";
  document.getElementById("outcome").innerHTML = "Game Is Loading";
}