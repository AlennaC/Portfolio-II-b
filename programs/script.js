//color page functions
function changeColor(cardNum) {
    let card = document.querySelector(".card_"+cardNum);
    
    let randomColor = "#"+Math.round(Math.random() * 16777215).toString(16);

    //catches invalid HEX codes that aren't six digits
    while (randomColor.length < 7) {
        randomColor += (Math.round(Math.random() * 15)).toString(16);
    }
    
    card.children[1].textContent = randomColor;
    
    document.getElementById("cs_"+cardNum).style.backgroundColor = randomColor;
}

function changeAllColors() {
    for (let currentCardNum = 0; currentCardNum < 4; currentCardNum++) {
        changeColor(currentCardNum);
    }
}

//name page function
function addName() {
    var name = document.getElementById("name-input").value;
    
    document.getElementById("name-pool").children[0].textContent = name;
    document.getElementById("name-pool").children[1].textContent = "Hello, "+name+" and welcome to my website!";
}

//hello page functions
function displayHello() {
    var nameMessage = "My name is Alenna";
    var gradeMessage = "I'm a sophmore";

    document.getElementById("hello-text-space").children[0].textContent = "Hello!";
    document.getElementById("hello-text-space").children[1].textContent = nameMessage+" and "+gradeMessage;
}

function hideHello() {
    document.getElementById("hello-text-space").children[0].textContent = "";
    document.getElementById("hello-text-space").children[1].textContent = "";
}

/* Number Guess */

function getAnswer() {
    // update with randomizer
    return 192;
}

function checkGuess() {
    var guess = document.getElementById("guess-input").value;
    var answer = getAnswer()

    // Add hints? (ie way higher)
    if (guess < answer) {
        document.getElementById("guess-feedback").textContent = "Higher!"
    } else if (guess > answer) {
        document.getElementById("guess-feedback").textContent = "Lower!"
    } else {
        document.getElementById("guess-feedback").textContent = "Correct!"
        document.getElementById("answer-spot").textContent = answer;
    }
}