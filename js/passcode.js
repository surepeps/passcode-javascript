// Selecting all necessary Elements
let numbersBtn = document.getElementsByClassName("button");
let displayTag = document.getElementById("displayCode");
let deleteNum = document.getElementById("buttonClear");

// Empty array for code collection
let codeArray = [];

// Listen to each of the buttons
let numbersBtnLength = numbersBtn.length;

// Create a for loop
for (let i = 0; i < numbersBtnLength; i++){
    numbersBtn[i].addEventListener("click", function() {
        codeArray.push(this.textContent);
        console.log(codeArray);
    })
}


