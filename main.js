function setup(){
     canvas = createCanvas(480,380)
     canvas.center()
     video = createCapture(VIDEO) ;
     video.hide()
}

video =""
model_status = ""
objects = []
req_obj = ""

function start(){
     ObjD = ml5.objectDetector('cocossd',modelLoaded)
     document.getElementById("status").innerHTML = "Status : DETECTING OBJECT"
     req_obj = document.getElementById("obj_input").value
     console.log(req_obj)
}

function preload(){
     
}

function modelLoaded(){
     console.log("model is ready")
     model_status = true
    
}

function draw(){
     image(video,0,0,480,380)
     
}