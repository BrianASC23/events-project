let displayRef = document.getElementById("color-display");

let aquaRef = document.getElementById("aqua");

let tealRef = document.getElementById("teal");

let pinkRef = document.getElementById("pink");

let purpleRef = document.getElementById("purple");

let colorlessRef = document.getElementById("colorless");


aquaRef.onclick = function() {
    if(displayRef.style.backgroundColor != "aqua"){
        displayRef.style.backgroundColor = "aqua";

        displayRef.innerHTML = "aqua";
    }
}

tealRef.onclick = function() {
    if(displayRef.style.backgroundColor != "teal"){
        displayRef.style.backgroundColor = "teal";

        displayRef.innerHTML = "teal";
    }
}


pinkRef.onclick = function() {
    if(displayRef.style.backgroundColor != "pink"){
        displayRef.style.backgroundColor = "pink";

        displayRef.innerHTML = "pink";
    }
}

purpleRef.onclick = function() {
    if(displayRef.style.backgroundColor != "purple"){
        displayRef.style.backgroundColor = "purple";

        displayRef.innerHTML = "purple";
    }
}

colorlessRef.onclick = function() {
    if(displayRef.style.backgroundColor != "white"){
        displayRef.style.backgroundColor = "white"

        displayRef.innerHTML = "colorless";
    }
}