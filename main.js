var objects=[];
var statusatual=false

function setup() {
    createCanvas( 800,600 )
    video=createCapture(VIDEO)
    video.size(800,600)
    video.hide()
    objectdetector=ml5.objectDetector("cocossd",modelLoaded)
    document.getElementById("status").innerHTML="status:detectando objeto"
}

function draw(){
    image(video,0,0,800,600)
    
    if(statusatual){
        r=random(255)
        g=random(255)
        b=random(255)
        document.getElementById("status").innerHTML="objeto detectado"
        objectdetector.detect(video,gotResult)
        for(var i=0;i<objects.length;i++){
        porcentagem=objects[i].confidence
        porcentagem=floor(porcentagem*100)
        x=floor(objects[i].x)+100
        y=floor(objects[i].y)
        height=floor(objects[i].height)+100
        width=floor(objects[i].width)
        textSize(30)
        text(objects[i].label+" "+porcentagem+'%',x,y)
        stroke(r,g,b)
        noFill()
        rect(x,y,width,height)
        }
        
    }
    
    
}

function modelLoaded(){
    console.log("modelo carregado")
    
    statusatual=true
}

function gotResult(error,results){
    if(error){
        console.error(error)
    }else{
        console.log(results)
        objects=results
    }
}

























































































