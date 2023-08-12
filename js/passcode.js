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

        // check if the length of the array is 4
        if (codeArray.length < 4) {
            codeArray.push(this.textContent);
            // display the numbers
            displayCode(codeArray)
        }

        // activate the delete icon when the array lenght is greater or equal to 1
        if (codeArray.length > 0) {
            deleteNum.style.visibility = "visible";
        }
    
    })
}

// The display function
function displayCode(numArray) {
    let newNums = numArray.join("");
    displayTag.textContent = newNums;
}
