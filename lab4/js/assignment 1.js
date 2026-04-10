// Complete variable definitions and random functions

const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");
function randomRangeSet(count, min, max) {
  const result = [];

  for (let i = 0; i < count; i++) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    result.push(num);
  }


  
  return result;
}

function fahrenheitToCelsius(f) {
  return (f - 32) * 5 / 9;
}



 // random number 


// Raw text strings

// Willy the Goblin
// Big Daddy
// Father Christmas

// the soup kitchen
// Disneyland
// the White House

// spontaneously combusted
// melted into a puddle on the sidewalk
// turned into a slug and slithered away


  


function returnRandomStoryString() {
  var d=randomRangeSet(5, 1, 10);
  story.textContent  ="It was 94 Fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

  
}

// Event listener and partial generate function definition

generateBtn.addEventListener("click", generateStory);

function generateStory() {
  if (customName.value !== "") {
    a=returnRandomStoryString()
  }

  if (document.getElementById("uk").checked) {
    console.log("GH")
    
    const weight = Math.round(300);
    const temperature = Math.round(94);
  }

  // TODO: replace "" with the correct expression
 
}
