var input = document.getElementById("input");
var nums = [];
var display = document.getElementById("options-list");
var addBtn = document.getElementById("add-btn");
var decideBtn = document.getElementById("increment");
var resultDisplay = document.getElementById("output");



 addBtn.addEventListener("click", addAnddisplay);

// populates nums with user input after add button is pushed
 function addAnddisplay() {
    var inputVal = input.value;
    if (!isNaN(inputVal)) { // check if the input is a number
        nums.push(Number(inputVal)); // convert input to a number and add to array
        display.textContent = nums;
        input.value = ""; // clear input field
        input.focus(); // move cursor back to input field
    } else {
        alert("Please enter a number."); 
    }
}

 increment.addEventListener("click", incrementer);

// increments number by index in array 
function incrementer() { 
    if( nums.length == 0 ){
      alert('Please enter a number')
      return;
    }
    
    var decision  = nums.map((num, index) => (num + (index + 1)) );
    resultDisplay.textContent = decision ;
  }

// clears all values
clearBtn.addEventListener("click", function() {
    input.value = "";
    display.textContent = "";
    resultDisplay.textContent = "";
    nums = [];
    input.focus();
});
