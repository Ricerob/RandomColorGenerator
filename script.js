var backgroundColor = "#";

function randomize() {
    backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    return backgroundColor;
}

document.getElementById("main").style.backgroundColor = randomize();
document.getElementById("color_displayer").innerHTML = backgroundColor;