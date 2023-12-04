var name = prompt("What is your name?");
console.log("name");
alert("Welcome " + name);

let answer = prompt("What is your favorite color?");
document.body.style.backgroundColor = answer;

function change_colors(element){
    if(element.style.color = "blue"){
        element.style.color = "yellow"
    }
    if(element.style.color = "red"){
        element.style.color = "green"
    }
    if(element.style.color = "green"){
        element.style.color = "orange"
    }
}

document.body.addEventListener("keydown", changeColor);

function changeColor(event){
    if(document.body.style.backgroundColor == "red"){
        document.body.style.backgroundColor = "blue";
    }else{
        document.body.style.backgroundColor = "red";
    }
}



