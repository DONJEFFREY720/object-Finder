function setup(){
     canvas = createCanvas(400,400)
     canvas.center()
     video = createCapture(VIDEO) ;
     video.hide()
}

vdo =""
model_status = ""
objects = []

function start(){
     ObjD = ml5.objectDetector('cocossd',modelLoaded)
     document.getElementById("status").innerHTML = "Status : DETECTING OBJECT"
}

function preload(){
     
}

function modelLoaded(){
     console.log("model is ready")
     model_status = true
    
}