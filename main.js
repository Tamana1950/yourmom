var x=0;
var y=0;
var rw=0;
var lw=0;
var diff=0;
function setup()
{
    video = createCapture(VIDEO);
    video.size(550 , 500);
    canvas = createCanvas(550 , 550);
    canvas.positon(560 , 150);
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);

}
function draw()
{
    background('#00ff6f');
    fill('#10c7af');
    stroke('#ff69f7');
    square(x,y,diff);
}
function modelLoaded()
{
    console.log('poseNet is initialized :)');
}
function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);
x=results[0].pose.nose.x;
y=results[0].pose.nose.y;
console.log("nose x ="+x+"nose y ="+y);
lw=results[0].pose.lw.x;
rw=results[0].pose.rw.y;
diff=floor(lw-rw);



}
}