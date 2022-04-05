function changeColour(){
    let hexInput = document.getElementById("color");
    let newColor = document.getElementById("body");

    newColor.style.backgroundColor = hexInput.value;
}