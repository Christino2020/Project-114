function setup(){
    canvas = createCanvas(400, 400)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300, 300)
    video.hide()
}
function modelLoaded(){
    console.log("poseNet Ready!")
}

function take_snapshot(){
    save("Are You a clown?")
}
function preload(){

}
function draw(){
    
}
