// main-div for two images
var div = document.createElement("div");
div.setAttribute("id", "container")
div.setAttribute("align", "center")

div.innerHTML = "This  is first image";
document.body.appendChild(div);

document.getElementById("container").style.align = "center"

// taking N = 2 images

var N = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/VST_images_the_Lagoon_Nebula.jpg/1280px-VST_images_the_Lagoon_Nebula.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Radiometer_9965_Nevit.gif/120px-Radiometer_9965_Nevit.gif"
]

// first image
var element = document.createElement('div')
element.setAttribute("id", "firstimage")
element.style.height = "150px";
element.style.width = "500px ";
document.getElementById("container").appendChild(element)

var para = document.createElement("p");
var node = document.createTextNode("This is second image");
para.appendChild(node);

element.appendChild(node);


function imageOne(N) {

    let x = document.createElement("img");
    x.setAttribute("src", N[0]);
    x.setAttribute("height", "150px");
    x.setAttribute("width", "500px");
    x.setAttribute("alt", "card1");


    document.getElementById("firstimage").appendChild(x);

}

imageOne(N);

var element = document.createElement('div')
element.setAttribute("id", "secondimage")
element.style.height = "150px";
element.style.width = "500px ";
document.getElementById("container").appendChild(element)


var para1 = document.createElement("p");
var node1 = document.createTextNode("This is second image");
para.appendChild(node);

element.appendChild(node);


// second image
function imageTwo(N) {
    let y = document.createElement("img")
    y.setAttribute("src", N[1]);
    y.setAttribute("height", "150px");
    y.setAttribute("width", "500px");
    y.setAttribute("alt", "card2");
    document.getElementById("secondimage").appendChild(y);
}

imageTwo(N);




var element = document.createElement('div')




element.setAttribute("id", "secdiv");
element.style.height = "90px";
element.style.width = "300px"
element.style.position = "absolute"
element.style.bottom = "5%";
element.style.left = "40%"



element.innerHTML = "This is iframe div"



document.getElementById("container").appendChild(element)

document.getElementById("secdiv").onclick = function changeContent() {

    document.getElementById("secdiv").style = "background-Color: blue";
}



// creating iframe and setting image inside it


function Iframe() {

    var target = document.getElementById("secdiv");

    var first_frame = document.createElement("iframe");


    first_frame.setAttribute("src", N[0]);
    first_frame.setAttribute("scrolling", "no");

    first_frame.setAttribute("id", "theiframe")

    first_frame.style.height = "90%";

    first_frame.style.background = "red";



    target.appendChild(first_frame);

 
}
Iframe();



