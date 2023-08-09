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
     if(model_status != ""){
          ObjD.detect(video,gotResults)

          for(i=0; i<objects.length; i++){
               document.getElementById("status").innerHTML = "Status : OBJECTS DETECTED"
               
               fill("red")
               percent = floor(objects[i].confidence*100) 
               text(objects[i].label + " "+ percent + "%",objects[i].x+15,objects[i].y+15)
               noFill()
               stroke("red")
               rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)

               if(objects[i].label == req_obj){
                    video.stop()
                    ObjD.detect(gotResults)
                    document.getElementById("status").innerHTML = "Status : OBJECTS DETECTED"
                    document.getElementById("obj_presence").innerHTML = "Status : MENTIONED OBJECT FOUND"
                    synth =  window.SpeechSynthesis
                    speak_data = req_obj+"Found"
                    utter_this = new SpeechSynthesisUtterance(speak_data)
                    synth.speak(utter_this)
                }
           }
         
}
   
}

function gotResults(error,results){
     if(error){
          console.error(error)

     }
     console.log(results)
      objects = results

    
}
