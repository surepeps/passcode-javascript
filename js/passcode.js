// Selecting all necessary Elements
let numbersBtn = document.getElementsByClassName("button");
let displayTag = document.getElementById("displayCode");
let deleteNum = document.getElementById("buttonClear");

// Empty array for code collection
let codeArray = [];

// Set the Original password
let realPass = "4608";


// Listen to each of the buttons
let numbersBtnLength = numbersBtn.length;

// Create a for loop
for (let i = 0; i < numbersBtnLength; i++){
    numbersBtn[i].addEventListener("click", function() {

        // check if the length of the array is 4
        if (codeArray.length < 4) {
            codeArray.push(this.textContent);
            // display the numbers
            let userCode = displayCode(codeArray)

            if (userCode.length == 4) {
                if (userCode  === realPass) {
                    displayTag.style.border = "3px solid green"

                    setTimeout(function(){
                        console.log("success")
                    },1000)
                } else {
                    displayTag.style.border = "3px solid red"

                }

            }

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
    return newNums;
}

// The delete action
deleteNum.addEventListener("click",function() { 
    // to check if the value exists and delete the last value from the array
    if (codeArray.length){
        codeArray.pop()
        // This is displaying the current array once the delete button is clicked
        displayCode(codeArray)

        // Remove the Red border Alert after delete button is clicked
        displayTag.style.border = "none";
    }
    // This checks if there is no value in the array and then hides the delete button
    if(!codeArray.length) {
        deleteNum.style.visibility = "hidden";
    }
    
    
})