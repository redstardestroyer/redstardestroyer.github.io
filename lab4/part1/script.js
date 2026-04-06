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
  return (f - 32) * 5.0 / 9;
}
function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}


const characters = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const places = ["the soup kitchen", "Disneyland", "the White House"];
const events = ["spontaneously combusted","melted into a puddle on the sidewalk",
  "turned into a slug and slithered away"];


  


function returnRandomStoryString() {
  var d=randomRangeSet(1, 1, 3);
 //storyText 	= 'It was 94 Fahrenheit outside, so `${characters[d] }` went for a walk. When they got to ${places[d]   }, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised ${event[d]} weighs 300 pounds, and it was a hot day.';
	storyText = 'It was 94 Fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
  return storyText;
}

// Event listener and partial generate function definition

generateBtn.addEventListener("click", generateStory);

function generateStory() {
	//console.log("IN generateStory() function");
      a=returnRandomStoryString();
      var character =  randomValueFromArray(characters);
      var place =  randomValueFromArray(places);
      var event =  randomValueFromArray(events);
      console.log(character);
      console.log(place);
      console.log(event);
      
      
  if (customName.value !== "") {
     a = a.replace("Bob",  customName.value);
  }
  a = a.replaceAll(":insertx:", character);
a = a.replaceAll(":inserty:", place);
a = a.replaceAll(":insertz:", event);
console.log(a);
 
  if (document.getElementById("uk").checked) {
    const weight = Math.round(300 / 14.0 ) + " stones"; //14 pounds in a stone
    const temperature = Math.round(fahrenheitToCelsius(94)) + " Celsius";
   } 
  

  // TODO: replace "" with the correct expression
 
}
 
  story.style.visibility = "visible";
