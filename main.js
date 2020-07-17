function first() {
    document.getElementsByClassName("first")[0].innerHTML = "This is a heading!";
}

function new_heading() {
    const h = document.getElementById("heading");
    h.innerHTML = "This is a new heading!";
}

function image() {
    document.getElementById("Batman's Knife").src = "Batman's Knife.jpg";
    document.getElementById("Batman's Knife").title = "Batman's Knife"
}

function image2() {
    document.getElementsByClassName("Batman's return")[0].src = "Batman.jpg";
    document.getElementsByClassName("Batman's return")[0].title = "Batman";
}

function time() {
    document.getElementById("time").innerHTML= Date();
}

function Thanks() {
    alert("Thank you!");
}

function Ahmed1() {
    document.getElementById("Ahmed").style.color = "deepskyblue";
}

function Ahmed2() {
    document.getElementById("Ahmed").style.color = "black";
}

function h22() {
    const h222 = document.querySelectorAll("h2");
    let i;
    for (i = 0; i < h222.length; i++) {
        h222[i].style.color = "yellow";
    }
}

function he22() {
    const he222 = document.querySelectorAll("h2");
    let i;
    for (i = 0; i < he222.length; i++) {
        he222[i].style.color = "black";
    }
}

function delete_paragraph() {
    const child = document.getElementById("p2");
    child.remove();
}

function new_paragraph() {
    const paragraph = document.createElement("p");
    const node = document.createTextNode("This is a new paragraph!");
    paragraph.appendChild(node);

    const element = document.getElementById("article1");
    element.appendChild(paragraph);
}

function math() {
    document.getElementById("math").innerHTML = 1+1;
}