Webcam.set({
    width : 350,
    height : 300,
    image_format : "png",
    png_quality : 90,
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function takepicture(){
    Webcam.snap(function(data_URL){
        document.getElementById("result").innerHTML = "<img id='capture_image' src='" + data_URL + "'>"
    });
}

console.log("ml5 version " , ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/IDh8eyfhc/model.json",modelLoaded);

function modelLoaded(){
    console.log("hellllllllllllllllooooooooooooooo");
}

function check(){
    image = document.getElementById("capture_image");
    classifier.classify(image,gotResult);

}

function gotResult(error,results){
    if (error){
        console.log("error");
    }
    else {
        console.log(results);
        document.getElementById("object-name").innerHTML = results[0].label;
        document.getElementById("object-accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}


