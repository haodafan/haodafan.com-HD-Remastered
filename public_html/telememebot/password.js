var realPass = "yinyufei";
var userInput = document.getElementById("password");
var docButton = document.getElementById("enterButton");
var userPass = userInput.value;

function check() {
    if (userPass == realPass) {
        document.getElementById("notice").innerHTML = "Aw yeah baby!"; 
        window.location.href="messenger.html";
    }
    else {
        document.getElementById("notice").innerHTML = "Invalid password";
    }
}

function update() {
    userPass = userInput.value;
}
userInput.addEventListener("input", update);
docButton.addEventListener("click", check);