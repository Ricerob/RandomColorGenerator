var backgroundColor = "#";

function randomize() {
    backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    if(backgroundColor.length===7){
        return backgroundColor;
    }
    else{
        randomize()
    }
}

document.getElementById("main").style.backgroundColor = randomize();
document.getElementById("color_displayer").innerHTML = backgroundColor;